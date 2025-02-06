import { command } from 'yargs';
import { CommandSetupOptions, EasyCLICommand } from './command';
import { EasyCLIConfigFile } from '../config-files';
import { EasyCLITheme } from '../themes';

/**
 * Options for the init command
 * @interface InitCommandOptions
 *
 * @template TGlobalParams The global params for the CLI
 * @template TParams The params for the command
 *
 * @property {boolean} failOnExists Should the command fail if the config file already exists?
 * @property {string[]} globalKeysToUse Any global keys that should be stored in the config file
 * @property {Partial<TGlobalParams & TParams>} defaults The default values to use
 * @property {(params: TGlobalParams & TParams) => any} transformer How to transform the params before saving
 * @property {string} configFlag The name of the variable to use for the config file
 *
 * @extends CommandSetupOptions
 *
 * @example
 * ```typescript
 * {
 * failOnExists?: boolean; // Should the command fail if the config file already exists?
 * globalKeysToUse?: string[]; // What key(s) are you setting?
 * defaults?: Partial<TGlobalParams & TParams>; // The default values to use
 * transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
 * configFlag?: string; // The name of the variable to use for the config file
 * }
 * ```
 */
export type InitCommandOptions<TGlobalParams, TParams> = CommandSetupOptions<
  TGlobalParams,
  TParams
> & {
  failOnExists?: boolean; // Should the command fail if the config file already exists?
  globalKeysToUse?: string[]; // What key(s) are you setting?
  defaults?: Partial<TGlobalParams & TParams>; // The default values to use
  transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
  configFlag?: string; // The name of the variable to use for the config file
  callback?: (params: TGlobalParams & TParams) => void; // The callback to run after the command is executed, this is useful if you want to add additional functionality to the command ie. Copying a file
};

/**
 * A command to add an init command to the CLI that will save the configuration
 *
 * @template TParams The params for the command
 * @template TGlobalParams The global params for the CLI
 *
 * @extends EasyCLICommand
 *
 * @example
 * ```typescript
 * new EasyCLIInitCommand(config, 'init', {
 *   globalKeysToUse: ['verbose'],
 *   prompts: {
 *     env: {
 *       describe: 'What environent are you setting?',
 *       type: 'string',
 *       prompt: 'always',
 *       demandOption: true,
 *     },
 *   },
 * });
 * ```
 */
export class EasyCLIInitCommand<
  TParams extends Record<string, any> = Record<string, any>,
  TGlobalParams extends Record<string, any> = Record<string, any>
> extends EasyCLICommand<TParams, TGlobalParams> {
  /**
   * Creates a new init command
   * @param {EasyCLIConfigFile} config The configuration file to use to save the config
   * @param {string} [name='init'] The name of the command
   * @param {InitCommandOptions<TGlobalParams, TParams>} [options={}] The options for the command
   */
  constructor(
    config: EasyCLIConfigFile,
    name: string = 'init',
    options: InitCommandOptions<TGlobalParams, TParams> = {}
  ) {
    if (!config) {
      throw new Error('EasyCLIConfigFile is required for init command');
    }

    const {
      globalKeysToUse = [],
      transformer = (params: TGlobalParams & TParams) => params,
      defaults = {},
      configFlag = 'config',
      callback,
      ...commandOptions
    } = options;

    const handler = async (
      params: TGlobalParams & TParams,
      theme: EasyCLITheme | null
    ) => {
      if (
        options.failOnExists &&
        config.fileExists((params as any)?.[configFlag] ?? null)
      ) {
        throw new Error('Config file already exists');
      }

      const logger = theme?.getLogger();

      const keys = [...this.getKeys(), ...globalKeysToUse];

      const clean = Object.entries(params as any).reduce(
        (acc, [key, value]) => {
          if (keys.includes(key as string)) {
            acc[key] = value;
          }

          return acc;
        },
        defaults as any
      );

      const transformed = transformer(clean);
      logger?.success('Saving config file');
      await config.save(transformed);

      if (callback) {
        await callback(params);
      }
    };

    super(name, handler, commandOptions);
  }
}
