import { EasyCLITheme } from '../themes/model';
import { Options, PositionalOptions, CommandModule } from 'yargs';

// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';

export type CommandOption = Options & {
  prompt?: 'always' | 'missing' | 'never';
};

export type CommandArgument = PositionalOptions & {
  prompt?: 'always' | 'missing' | 'never';
};

export type CommandOptionObject<TParams, TGlobalParams> = Record<
  (keyof TGlobalParams & TParams) | string,
  CommandOption | CommandArgument
>;

export type CommandSetupOptions<TGlobalParams, TParams> = {
  description?: string;
  aliases?: string[];
  flags?: CommandOptionObject<TGlobalParams, TParams>;
  prompts?: CommandOptionObject<TGlobalParams, TParams>;
  args?: CommandOptionObject<TGlobalParams, TParams>;
};

export class EasyCLICommand<
  TParams = Record<string, any>,
  TGlobalParams = Record<string, any>
> {
  private name: string;
  private aliases: string[];
  private description: string;
  private flags: CommandOptionObject<TGlobalParams, TParams>;
  private prompts: CommandOptionObject<TGlobalParams, TParams>;
  private args: CommandOptionObject<TGlobalParams, TParams>;
  private handler: (
    params: TParams & TGlobalParams,
    theme: EasyCLITheme | null
  ) => void;

  constructor(
    name: string,
    handler: (
      params: TParams & TGlobalParams,
      theme: EasyCLITheme | null
    ) => void,
    {
      description = '',
      aliases = [],
      flags = {} as CommandOptionObject<TGlobalParams, TParams>,
      prompts = {} as CommandOptionObject<TGlobalParams, TParams>,
      args = {} as CommandOptionObject<TGlobalParams, TParams>,
    }: CommandSetupOptions<TGlobalParams, TParams>
  ) {
    this.name = name;
    this.handler = handler;
    this.description = description;
    this.aliases = aliases;
    this.flags = flags;
    this.prompts = prompts;
    this.args = args;
  }

  public getNames(): string[] {
    return [this.name, ...this.aliases];
  }

  public addFlag(key: keyof TParams & TGlobalParams, config: CommandOption) {
    this.flags[key] = config;
    return this;
  }

  public addPrompt(key: keyof TParams & TGlobalParams, config: CommandOption) {
    this.prompts[key] = config;
    return this;
  }

  public addArgument(
    key: keyof TParams & TGlobalParams,
    config: CommandArgument
  ) {
    this.args[key] = config;
    return this;
  }

  private prepareFlags(): Record<keyof TParams & TGlobalParams, Options> {
    return Object.entries<CommandOption>(this.flags).reduce(
      (acc, [flag, { prompt = 'never', ...config }]) => {
        return {
          ...acc,
          [flag]: {
            ...config,
            demandOption:
              // If the prompt is 'always' or when missing, we need to set this to false and we will prompt the user.
              prompt === 'never' ? config?.demandOption ?? false : false,
          },
        };
      },
      {} as Record<keyof TParams & TGlobalParams, Options>
    );
  }

  private prepareArgs(): Record<keyof TParams & TGlobalParams, Options> {
    return Object.entries<CommandOption>(this.args).reduce(
      (acc, [flag, { prompt = 'never', ...config }]) => {
        return {
          ...acc,
          [flag]: {
            ...config,
            demandOption:
              // If the prompt is 'always' or when missing, we need to set this to false and we will prompt the user.
              prompt === 'never' ? config?.demandOption ?? false : false,
          },
        };
      },
      {} as Record<keyof TParams & TGlobalParams, Options>
    );
  }

  public getDefaultArgv(): TParams {
    const args = Object.keys(this.args).reduce((acc, key) => {
      acc[key as keyof TParams] = this.args[key]?.default ?? undefined;
      return acc;
    }, {} as TParams);

    const flags = Object.keys(this.flags).reduce((acc, key) => {
      acc[key as keyof TParams] = this.flags[key]?.default ?? undefined;
      return acc;
    }, {} as TParams);

    return {
      ...args,
      ...flags,
    };
  }

  private preparePrompts(argv: TParams & TGlobalParams): {
    [key: string]: CommandOption;
  } {
    const convertYargsTypeToInteractiveTypes = (type: string) => {
      switch (type) {
        case 'string':
          return 'input';
        case 'boolean':
          return 'confirm';
        case 'number':
          return 'number';
        default:
          return 'input';
      }
    };

    // Merge the prompts from the prompts, flags and arguments
    const prompts = {
      ...this.prompts,
      ...Object.entries({ ...this.args, ...this.flags })
        // Filter out the values that should not be prompted
        .filter(([key, { prompt = 'never' }]: [any, any]) => {
          if (prompt === 'always') return true; // Always prompt
          if (prompt === 'never') return false; // Never prompt

          // If the prompt is missing, we need to check if the argument is missing
          return argv[key as keyof TParams & TGlobalParams] === undefined;
        })
        .reduce((acc, [key, config]) => {
          acc[key as keyof TParams & TGlobalParams] = config;

          return acc;
        }, {} as Record<keyof TParams & TGlobalParams, any>),
    };

    return (
      Object.entries<CommandOption>(prompts)
        // Filter out the prompts that should not be prompted
        .filter(([key, { prompt = 'never' }]) => {
          if (prompt === 'always') return true;
          if (prompt === 'never') return false;

          // If the prompt is missing, we need to check if the argument is missing
          return argv[key as keyof TParams & TGlobalParams] === undefined;
        })
        .reduce((acc, [key, { prompt = 'never', ...config }]) => {
          acc[key as keyof TParams & TGlobalParams] = {
            ...config,
            type: convertYargsTypeToInteractiveTypes(config?.type ?? 'string'),
            name: key,
            message: config.describe,
            prompt: 'always',
            demandOption: false,
            default:
              argv[key as keyof TParams & TGlobalParams] ?? config.default,
          };

          return acc;
        }, {} as Record<keyof TParams & TGlobalParams, any>)
    );
  }

  /**
   * Returns all prompts for the command, including flags and arguments that need to be prompted.
   *
   * @returns A list of prompts for the command.
   */
  private async prompt(
    args: TParams & TGlobalParams
  ): Promise<TParams & TGlobalParams> {
    const prompts = this.preparePrompts(args);

    const { interactive, ...values } = await yargsInteractive().interactive({
      interactive: { default: true },
      ...prompts,
    });

    return values as TParams & TGlobalParams;
  }

  /**
   * Converts the command to a yargs command.
   *
   * @param theme The theme to use for formatting strings.
   * @param globalFlags The global flags that are available to the command.
   * @returns The yargs command.
   */
  public convertToYargsCommand(
    theme: EasyCLITheme | null = null
    // globalFlags: TGlobalParams // TODO: See if this has to be added in
  ): CommandModule {
    const flags = this.prepareFlags();
    const args = this.prepareArgs();

    // Merge the flags and arguments into the command string
    const positionals = Object.entries<CommandOption>(args)
      .map(([key, opts]) => {
        const arrayKey = opts.array ? `${key}...` : key;
        return opts.demandOption ? `<${arrayKey}>` : `[${arrayKey}]`;
      })
      .join(' ');
    const command = `${this.name} ${positionals}`;

    return {
      command: command,
      aliases: this.aliases,
      describe: this.description,
      builder: yargs => {
        yargs.options(flags);

        for (const [key, opt] of Object.entries<CommandArgument>(args as any)) {
          yargs.positional(key, opt);
        }
        return yargs;
      },
      handler: async (argv: any) => {
        await this.run(argv, theme);
      },
    };
  }

  public async run(
    params: TParams & TGlobalParams,
    theme: EasyCLITheme | null
  ) {
    const promptParams = await this.prompt(params);

    return this.handler(
      {
        ...params,
        ...promptParams,
      },
      theme
    );
  }
}
