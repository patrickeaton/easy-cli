import { EasyCLITheme } from '../themes';
import { Options, PositionalOptions, CommandModule, Choices } from 'yargs';

// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';

/**
 * A command positional option that can be passed to a command with the option to prompt the user for the value.
 * @interface CommandOption
 *
 * @extends Options
 * @property {string} [prompt='never'] When to prompt the user for the value
 *
 * @example
 * ```typescript
 * // A flag that will always prompt the user for the value, if a value is provided via a flag it will be used as the default value.
 * {
 *  describe: 'The description of the flag',
 *  type: 'string',
 *  prompt: 'always',
 *  demandOption: true,
 * }
 *
 * // A flag that will prompt the user for the value if it is missing
 * {
 *  describe: 'The description of the flag',
 *  type: 'string',
 *  prompt: 'missing',
 *  demandOption: true,
 * }
 * ```
 */
export type CommandOption = Options & {
  prompt?: 'always' | 'missing' | 'never';
};

/**
 * A command argument (flag) that can be passed to a command with the option to prompt the user for the value.
 * @interface CommandArgument
 *
 * @extends PositionalOptionss
 * @property {string} [prompt='never'] When to prompt the user for the value
 */
export type CommandArgument = PositionalOptions & {
  prompt?: 'always' | 'missing' | 'never';
};

/**
 * A record of flags/postional options for a command.
 * @interface CommandOptionObject
 *
 * @template TParams The params for the command
 * @template TGlobalParams The global params for the CLI
 *
 * @property {CommandOption | CommandArgument} [key] The flag or argument to add to the command
 *
 */
export type CommandOptionObject<TParams, TGlobalParams> = Record<
  (keyof TGlobalParams & TParams) | string,
  CommandOption | CommandArgument
>;

/**
 * Optional Arguments for setting up a command.
 *
 * @interface CommandSetupOptions
 *
 * @template TGlobalParams The global params for the CLI
 * @template TParams The params for the command
 *
 * @property {string} description The description of the command
 * @property {string[]} aliases The aliases for the command
 * @property {CommandOptionObject<TGlobalParams, TParams>} flags The flags for the command
 * @property {CommandOptionObject<TGlobalParams, TParams>} prompts The prompts for the command
 * @property {CommandOptionObject<TGlobalParams, TParams>} args The positional arguments for the command
 * @property {boolean} skipConfig Should the command skip loading the configuration file
 * @extends CommandSetupOptions
 *
 * @example
 * ```typescript
 * {
 *   description?: string; // The description of the command
 *   aliases?: string[]; // The aliases for the command
 *   flags?: CommandOptionObject<TGlobalParams, TParams>; // The flags for the command
 *   prompts?: CommandOptionObject<TGlobalParams, TParams>; // The prompts for the command
 *   args?: CommandOptionObject<TGlobalParams, TParams>; // The positional arguments for the command
 *   skipConfig?: boolean; // Should the command skip loading the configuration file
 * }
 *```
 */
export type CommandSetupOptions<TGlobalParams, TParams> = {
  description?: string;
  aliases?: string[];
  flags?: CommandOptionObject<TGlobalParams, TParams>;
  prompts?: CommandOptionObject<TGlobalParams, TParams>;
  args?: CommandOptionObject<TGlobalParams, TParams>;
  skipConfig?: boolean;
};

/**
 * A class that represents a command that can be run in the CLI.
 * This class is a wrapper around yargs commands that allows for prompts and flags to be added to the command.
 *
 * @example
 * ```typescript
 * const command = new EasyCLICommand('do', (params, theme) => {
 *  theme?.getLogger().log(params);
 * }, {
 *   description: 'Set a config variable',
 *   aliases: [],
 *   args: {
 *     key: {
 *       describe: 'What key(s) are you setting?',
 *       type: 'string',
 *     },
 *   },
 *   prompts: {
 *     value: {
 *       describe: 'the value to set',
 *       type: 'string',
 *       prompt: 'missing',
 *       demandOption: true,
 *     },
 *   },
 * });
 * ```
 */
export class EasyCLICommand<
  TParams extends Record<string, any> = Record<string, any>,
  TGlobalParams extends Record<string, any> = Record<string, any>
> {
  private name: string;
  private aliases: string[];
  private description: string;
  private skipConfig: boolean;
  private flags: CommandOptionObject<TGlobalParams, TParams>;
  private prompts: CommandOptionObject<TGlobalParams, TParams>;
  private args: CommandOptionObject<TGlobalParams, TParams>;
  private handler: (
    params: TGlobalParams & TParams,
    theme: EasyCLITheme | null
  ) => void;

  /**
   * Creates a new EasyCLICommand instance.
   *
   * @param name The name of the command.
   * @param handler The handler function that will be called when the command is run.
   * @param options Optional arguments for setting up the command.
   */
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
      skipConfig = false,
    }: CommandSetupOptions<TGlobalParams, TParams> = {}
  ) {
    this.name = name;
    this.handler = handler;
    this.description = description;
    this.aliases = aliases;
    this.flags = flags;
    this.prompts = prompts;
    this.args = args;
    this.skipConfig = skipConfig;
  }

  /**
   * @returns The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.
   *
   * @example
   * ```typescript
   * command.getNames(); // ['do', 'd']
   * ```
   */
  public getNames(): string[] {
    return [this.name, ...this.aliases];
  }

  /**
   * @returns The name of the command, this is used by EasyCLI to register the command with yargs and determine which command to run.
   *
   * @example
   * ```typescript
   * command.getName(); // 'do'
   * ```
   */
  public getName(): string {
    return this.name;
  }
  /**
   * @returns The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.
   *
   * @example
   * ```typescript
   * command.getKeys(); // ['key', 'value', 'verbose']
   * ```
   */
  public getKeys(): string[] {
    return [
      ...Object.keys(this.flags),
      ...Object.keys(this.prompts),
      ...Object.keys(this.args),
    ];
  }

  /**
   * @returns Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.
   *
   * @example
   * ```typescript
   * command.skipConfigLoad(); // false
   * ```
   */
  public skipConfigLoad(): boolean {
    return this.skipConfig;
  }

  /**
   * Adds a flag to the command.
   *
   * @param key The key of the flag to add.
   * @param config Configuration for the flag.
   *
   * @returns This command instance for optional chaining
   *
   * @example
   * ```typescript
   * command.addFlag('verbose', {
   *  describe: 'The verbosity of the command',
   *  type: 'number',
   *  default: 0,
   * });
   * ```
   */
  public addFlag(key: keyof TParams & TGlobalParams, config: CommandOption) {
    this.flags[key] = config;
    return this;
  }

  /**
   * Adds a prompt to the command.
   *
   * @param key The key of the prompt to add.
   * @param config Configuration for the prompt.
   *s
   * @returns This command instance for optional chaining
   *
   * @example
   * ```typescript
   * // Prompt the user for the environment to set
   * command.addPrompt('env', {
   *   describe: 'The environment to set',
   *   type: 'string',
   *   prompt: 'always',
   *   demandOption: true,
   * });
   * ```
   */
  public addPrompt(key: keyof TParams & TGlobalParams, config: CommandOption) {
    this.prompts[key] = config;
    return this;
  }

  /**
   * Adds an argument (positional option) to the command.
   *
   * @param key The key of the argument to add.
   * @param config Configuration for the argument.
   *
   * @returns This command instance for optional chaining
   *
   * @example
   * ```typescript
   * // Add an argument to the command
   * command.addArgument('key', {
   *   describe: 'The key to set',
   *   type: 'string',
   *   demandOption: true,
   * });
   *
   * // Builds a function similar to `app my-command [key]`
   *
   * // Add an argument to the command that is an array
   * command.addArgument('keys', {
   *  describe: 'The keys to set',
   *  type: 'string',
   *  demandOption: true,
   *  array: true,
   * });
   *
   * // Builds a function similar to `app my-command [key1] [key2] [key3] ...`
   * ```
   */
  public addArgument(
    key: keyof TParams & TGlobalParams,
    config: CommandArgument
  ) {
    this.args[key] = config;
    return this;
  }

  /**
   * Prepare the flags for the command by setting the demandOption to false for flags that should be prompted.
   *
   * @returns A modified version of the flags object with the demandOption set to false for flags that should be prompted.
   */
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

  /**
   * Prepare the args for the command by setting the demandOption to false for flags that should be prompted.
   *
   * @returns A modified version of the args object with the demandOption set to false for flags that should be prompted.
   */
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

  /**
   * Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.
   *
   * @returns The default values for the command arguments and flags
   *
   * @example
   * ```typescript
   * command.getDefaultArgv(); // { key: undefined, value: undefined, verbose: 0 }
   * ```
   */
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

  /**
   * Prepares the prompts for the command by merging the prompts, flags and arguments and filtering out the values that should not be prompted.
   *
   * @param argv The arguments passed to the command
   *
   * @returns A list of prompts for the command to run.
   */
  private preparePrompts(argv: TParams & TGlobalParams): {
    [key: string]: CommandOption;
  } {
    const convertYargsTypeToInteractiveTypes = (
      type: string,
      choices?: Choices,
      array?: boolean
    ) => {
      if (choices && !array) {
        return 'list';
      }

      if (choices && array) {
        return 'checkbox';
      }

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
            type: convertYargsTypeToInteractiveTypes(
              config?.type ?? 'string',
              config?.choices,
              config?.array
            ),
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
   * Runs the prompts for the command, including flags and arguments that need to be prompted and displays the prompts to the user.
   *
   * @returns The values for the command from the user after the prompts have been run
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
   * Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
   * This can also be used to directly register the command with yargs.
   *
   * @param theme The theme to use for formatting strings.
   *
   * @returns The yargs command.
   *
   * @example
   * ```typescript
   *
   * const command = new EasyCLICommand('do', (params, theme) => {
   *   theme?.getLogger().log(params); // Log the values of the command
   * }, { description: 'Do something' });
   *
   * // Register the command with EasyCLI to leverage other options
   * const easyCLI = new EasyCLI();
   * easyCLI.addCommand(command);
   *
   * // Register the command with yargs directly if you don't need the other helpers.
   * yargs.command(command.convertToYargsCommand());
   * ```
   */
  public convertToYargsCommand(
    isDefault: boolean = false,
    theme: EasyCLITheme | null = null
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

    const command = `${this.name} ${positionals}`.trim();

    return {
      command: isDefault ? ['$0', command] : command,
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

  /**
   * Runs the command with the provided arguments.
   *
   * @param params The parameters to run the command with.
   * @param theme The theme to use for formatting strings.
   *
   * @returns The result of the command handler.
   *
   * @example
   * ```typescript
   *  command.run({ key: 'value' }, theme);
   * ```
   */
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
