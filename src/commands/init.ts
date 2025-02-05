import { command } from 'yargs';
import { CommandSetupOptions, EasyCLICommand } from '.';
import { EasyCLIConfigFile } from '../config';
import { EasyCLITheme } from '../themes';

/**
 * Options for the init command
 * @interface InitCommandOptions
 *
 * @template TGlobalParams The global params for the CLI
 * @template TParams The params for the command
 *
 * @property {boolean} failOnExists Should the command fail if the config file already exists?
 * @property {string[]} globalKeysToUse What key(s) are you setting?
 * @property {Partial<TGlobalParams & TParams>} defaults The default values to use
 * @property {(params: TGlobalParams & TParams) => any} transformer How to transform the params before saving
 * @property {string} configFlag The name of the variable to use for the config file
 *
 * @extends CommandSetupOptions
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
};

/**
 * A command to add an init command to the CLI that will save the configuration
 *
 * @template TParams The params for the command
 * @template TGloablParams The global params for the CLI
 * 
 * @extends EasyCLICommand
 *
 * @example
 * ```typescript
 * new EasyCLIInitCommand(config, 'init', {
 *   globalKeysToUse: ['verbose'],
 *   prompts: {
 *     env: {
 *       describe: 'What environeent are you setting?',
 *       type: 'string',
 *       prompt: 'always',
 *       demandOption: true,
 *     },
 *   },
 * });
 * ```
 */
export class EasyCLIInitCommand<TParams, TGloablParams> extends EasyCLICommand<
  TParams,
  TGloablParams
> {

  /**
   * Creates a new init command
   * @param {EasyCLIConfigFile} config The configuration file to use to save the config
   * @param {string} [name='init'] The name of the command
   * @param {InitCommandOptions<TGloablParams, TParams>} [options={}] The options for the command
   */
  constructor(
    config: EasyCLIConfigFile,
    name: string = 'init',
    options: InitCommandOptions<TGloablParams, TParams> = {}
  ) {
    if (!config) {
      throw new Error('EasyCLIConfigFile is required for init command');
    }

    const {
      globalKeysToUse = [],
      transformer = (params: TGloablParams & TParams) => params,
      defaults = {},
      configFlag = 'config',
      ...commandOptions
    } = options;

    const handler = async (
      params: TGloablParams & TParams,
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
    };

    super(name, handler, commandOptions);
  }
}
