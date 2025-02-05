/**
 * @packageDocumentation A framework for building CLI applications that are robust and easy to maintain. Supports theming, configuration files, interactive prompts, and more. 
 * @module easy-cli
 */

import yargs from 'yargs';
import { CommandOption, CommandOptionObject, EasyCLICommand } from './commands/command';
import { EasyCLITheme } from './themes';
import { EasyCLIConfigFile } from './config-files';

/**
 * @interface EasyCLIConfig
 * The configuration for the EasyCLI
 *
 * @template TGloablParams An object representing the global params for the CLI
 *
 * @property {string} [executionName] The name to display in the help menu and error messages for the CLI
 * @property {string} [defaultCommand] The default command to run if no command is provided (defaults to 'help')
 * @property {EasyCLICommand[]} [commands] The commands to add to the CLI
 * @property {CommandOptionObject} [globalFlags] The global flags to add to the CLI
 */
export type EasyCLIConfig<TGloablParams> = {
  executionName?: string; // The name to display in the help menu and error messages for the CLI
  defaultCommand?: string; // The default command to run if no command is provided (defaults to 'help')
  commands?: EasyCLICommand<any, TGloablParams>[];
  globalFlags?: CommandOptionObject<{}, TGloablParams>;
};

/**
 * @class EasyCLI
 * The primary class for composing and running an EasyCLI application.
 * This class is responsible for managing the commands, global flags, and themes for the CLI.
 * It also handles the parsing of the arguments and executing the commands.
 *
 * @template TGlobalParams The global params for the CLI
 *
 * @example
 * ```typescript
 * const cli = new EasyCLI({
 *   executionName: 'my-cli',
 * });
 *
 * const command = new EasyCLICommand(...);
 * cli.addCommand(command);
 *
 * cli.execute();
 * ```
 */
export class EasyCLI<TGlobalParams> {
  private executionName: string = '';
  private defaultCommand: string = 'help';
  private commands: EasyCLICommand<any, TGlobalParams>[] = [];
  private theme: EasyCLITheme | null = null;
  private globalFlags: CommandOptionObject<{}, TGlobalParams> =
    {} as CommandOptionObject<{}, TGlobalParams>;
  private verboseFlag: string | null = null;
  private configFlag: string | null = null;
  private configFile: EasyCLIConfigFile | null = null;

  /**
   * Creates a new EasyCLI instance
   *
   * @param {EasyCLIConfig} [config={}] The configuration for the CLI
   */
  constructor(config: EasyCLIConfig<TGlobalParams> = {}) {
    this.executionName = config?.executionName ?? '';
    this.commands = config?.commands ?? [];
    this.globalFlags =
      config?.globalFlags ?? ({} as CommandOptionObject<{}, TGlobalParams>);
  }

  /**
   * Set the theme for the CLI, will overwrite any existing theme, and this theme will be passed to all commands unless overridden.
   *
   * @param {EasyCLITheme} theme The theme to use
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   *
   * const cli = new EasyCLI();
   * cli.setTheme(theme);
   * ```
   */
  public setTheme(theme: EasyCLITheme | null): EasyCLI<TGlobalParams> {
    this.theme = theme;
    return this;
  }

  /**
   * Set the configuration file for the CLI
   *
   * @param {EasyCLIConfigFile} config The configuration file to use
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const configFile = new EasyCLIConfigFile({
   *  ...
   * });
   *
   * const cli = new EasyCLI();
   * cli.setConfigFile(configFile);
   * ```
   */
  public setConfigFile(config: EasyCLIConfigFile): EasyCLI<TGlobalParams> {
    this.configFile = config;
    return this;
  }

  /**
   * Dangerously sets all the commands for the CLI, overwriting any existing commands.
   *
   * @param {EasyCLICommand[]} commands The commands to add to the CLI
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const command = new EasyCLICommand(...);
   * const cli = new EasyCLI();
   * cli.setCommands([command]);
   * ```
   */
  public setCommands(
    commands: EasyCLICommand<{}, TGlobalParams>[]
  ): EasyCLI<TGlobalParams> {
    this.commands = commands;
    return this;
  }

  /**
   * Adds a command to the CLI
   *
   * @template TParams The params that this command accepts.
   * 
   * @param {EasyCLICommand} command The command to add
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const command = new EasyCLICommand(...);
   * const cli = new EasyCLI();
   * cli.addCommand(command);
   * ```
   */
  public addCommand<TParams = Record<string, any>>(
    command: EasyCLICommand<TParams, TGlobalParams>
  ): EasyCLI<TGlobalParams> {
    this.commands.push(command);
    return this;
  }

  /**
   * Manage the verbose flag for the CLI
   *
   * @param {number} [defaultVerbosity=0] The default verbosity level
   * @param {Partial<CommandOption & { name: string }>} [overrides={}] Any overrides for the verbose flag
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const cli = new EasyCLI();
   * cli.handleVerboseFlag(0, { ... });
   * ```
   */
  public handleVerboseFlag(
    defaultVerbosity = 0,
    overrides = {} as Partial<CommandOption & { name: string }>
  ): EasyCLI<TGlobalParams> {
    this.verboseFlag = overrides?.name ?? 'verbose';

    this.globalFlags = {
      ...this.globalFlags,
      [overrides?.name ?? 'verbose']: {
        alias: 'v',
        description: 'Set the verbosity level',
        type: 'count',
        default: defaultVerbosity,
        ...overrides,
      },
    };
    return this;
  }

  /**
   * Manage the configuration file flag for the CLI
   *
   * @param {Partial<CommandOption & { name: string }>} [overrides={}] Any overrides for the configuration file flag
   *
   * @returns {EasyCLI} The EasyCLI instance
   *
   * @example
   * ```typescript
   * const cli = new EasyCLI();
   *
   * // This will add a `--config` flag to the CLI
   * cli.handleConfigFileFlag();
   *
   * // This will add a `--my-config` flag to the CLI
   * cli.handleConfigFileFlag({ name: 'my-config' });
   * ```
   *
   */
  public handleConfigFileFlag(
    overrides = {} as Partial<CommandOption & { name: string }>
  ): EasyCLI<TGlobalParams> {
    if (!this.configFile) throw new Error('No configuration file provided');

    this.configFlag = overrides?.name ?? 'config';

    this.globalFlags = {
      ...this.globalFlags,
      [overrides?.name ?? 'config']: {
        alias: 'c',
        description: 'Specify a configuration file',
        type: 'string',
        ...overrides,
      },
    };
    return this;
  }

  /**
   * An internal method to get the default values for the global flags
   *
   * @returns The default values for the global flags
   */
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

  /**
   * @returns A middleware function to load the configuration file
   */
  private configMiddleware() {
    return (argv: any) => {
      if (!this.configFile) return argv;

      // TODO: Extract the default values from the command args as well
      const command = this.commands.find(command =>
        command.getNames().includes(argv['_'][0])
      );

      if (command?.skipConfigLoad()) return argv;

      const configPath = argv?.[this?.configFlag as string] ?? null;

      const config = this.configFile.load(configPath);

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

  /**
   * @returns A middleware function to set the verbosity level
   */
  private verboseMiddleware() {
    return (argv: any) => {
      if (this.verboseFlag && argv[this.verboseFlag])
        this.theme?.setVerbosity(argv[this.verboseFlag]);
    };
  }

  /**
   * Run the CLI with the provided arguments.
   *
   * @param {((app: typeof yargs) => typeof yargs) | null} [callback=null] A callback to add additional configuration to the CLI via yargs
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
      app.help().wrap(72);
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
