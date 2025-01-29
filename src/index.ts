import yargs from 'yargs';
import {
  CommandOption,
  CommandOptionObject,
  EasyCLICommand,
} from './commands';
import { EasyCLITheme } from './themes/model';
import { EasyCLIConfigFile } from './config';

export type EasyCLIConfig<TGloablParams> = {
  executionName?: string; // The name to display in the help menu and error messages for the CLI
  defaultCommand?: string; // The default command to run if no command is provided (defaults to 'help')
  commands?: EasyCLICommand<any, TGloablParams>[];
  globalFlags?: CommandOptionObject<{}, TGloablParams>;
};

export class EasyCLI<TGlobalParams> {
  private executionName: string = '';
  private defaultCommand: string = 'help';
  private commands: EasyCLICommand<any, TGlobalParams>[] = [];
  private theme: EasyCLITheme | null = null;
  private globalFlags: CommandOptionObject<{}, TGlobalParams> =
    {} as CommandOptionObject<{}, TGlobalParams>;
  private verboseFlag: string | null = null;
  private configFile: EasyCLIConfigFile | null = null;

  constructor(config: EasyCLIConfig<TGlobalParams> = {}) {
    this.executionName = config?.executionName ?? '';
    this.commands = config?.commands ?? [];
    this.globalFlags =
      config?.globalFlags ?? ({} as CommandOptionObject<{}, TGlobalParams>);
  }

  public setTheme(theme: EasyCLITheme | null): EasyCLI<TGlobalParams> {
    this.theme = theme;
    return this;
  }

  public setConfig(config: EasyCLIConfigFile): EasyCLI<TGlobalParams> {
    this.configFile = config;
    return this;
  }

  public setCommands(
    commands: EasyCLICommand<{}, TGlobalParams>[]
  ): EasyCLI<TGlobalParams> {
    this.commands = commands;
    return this;
  }

  public addCommand<TParams>(
    command: EasyCLICommand<{}, TGlobalParams>
  ): EasyCLI<TGlobalParams> {
    this.commands.push(command);
    return this;
  }

  public handleVerboseFlag(
    defaultVerbosirty = 0,
    overrides = {} as Partial<CommandOption & { name: string }>
  ): EasyCLI<TGlobalParams> {
    this.verboseFlag = overrides?.name ?? 'verbose';

    this.globalFlags = {
      ...this.globalFlags,
      [overrides?.name ?? 'verbose']: {
        alias: 'v',
        description: 'Set the verbosity level',
        type: 'count',
        default: defaultVerbosirty,
        ...overrides,
      },
    };
    return this;
  }

  public addInitCommand({
    name = 'init',
    description = 'Initialize a new configuration file',
    keys = null, // What keys to can be used to run this command
    defaults = {},
    promptMissing = true,
    failIfConfigExists = true,
    callback = null, // If there is custom code that needs to be run, provide it here. ie. Copying other files, etc.
  }): EasyCLI<TGlobalParams> {
    return this;
  }

  private getDefaults(): Partial<TGlobalParams> {
    return Object.keys(this.globalFlags).reduce(
      (acc: TGlobalParams, key: string) => {
        if (this.globalFlags[key].default !== undefined) {
          (acc as any)[key] = this.globalFlags[key].default;
        }
        return acc;
      },
      {} as TGlobalParams
    );
  }

  private configMiddleware() {
    return (argv: any) => {
      if (!this.configFile) return argv;

      const config = this.configFile.load();

      // TODO: Extract the default values from the command args as well
      const command = this.commands.find(
        command => command.getNames().includes(argv['_'][0])
      );

      const defaults: any = this.getDefaults();

      if (command) {
        const commandDefaults = command.getDefaultArgv();
        Object.assign(defaults, commandDefaults);
      }

      const argvRemovingDefaults = Object.keys(argv).reduce((acc, key) => {
        if (defaults[key] === argv[key]) return acc;
        acc[key] = argv[key];
        return acc;
      }, {} as any);

      return {
        ...defaults,
        ...config,
        ...argvRemovingDefaults, // Ensure that the arguments passed in take precedence
      };
    };
  }

  private verboseMiddleware() {
    return (argv: any) => {
      if (this.verboseFlag && argv[this.verboseFlag])
        this.theme?.setVerbosity(argv[this.verboseFlag]);
    };
  }

  /**
   * Run the CLI with the provided arguments.
   */
  public async execute(
    callback: ((app: typeof yargs) => typeof yargs) | null = null
  ): Promise<void> {
   
    const app = yargs;

    app.scriptName(this.executionName);

    // Add the global flags
    Object.entries(this.globalFlags).forEach(([name, config]) => {
      app.option(name, config);
    });

    // Add the commands
    this.commands.forEach(command => {
      app.command(command.convertToYargsCommand(this.theme));
    });

    if (this.defaultCommand) {
      app.demandCommand().help().wrap(72);
    }

    const middleware = [];
    middleware.push(this.configMiddleware());
    middleware.push(this.verboseMiddleware());
    app.middleware(middleware, true);

    // To add any additional configuration
    if (callback) {
      callback(app);
    }

    // Parse the arguments
    app.parse();
  }
}
