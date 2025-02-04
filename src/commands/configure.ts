import { command } from 'yargs';
import { CommandSetupOptions, EasyCLICommand } from '.';
import { EasyCLIConfigFile } from '../config';
import { EasyCLITheme } from '../themes';

/**
 * Options for the configure command
 * @template TGlobalParams The global params for the CLI
 * @template TParams The params for the command
 * @property {string[]} globalKeysToUse What key(s) are you setting?
 * @property {(params: TGlobalParams & TParams) => any} transformer How to transform the params before saving
 * @extends CommandSetupOptions
 */
export type ConfigureCommandOptions<TGlobalParams, TParams> =
  CommandSetupOptions<TGlobalParams, TParams> & {
    globalKeysToUse?: string[]; // What key(s) are you setting?
    transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
  };

/**
 * A command to add a configure command to the CLI that will save the configuration
 * 
 * @template TParams The params for the command
 * @template TGloablParams The global params for the CLI
 * @extends EasyCLICommand
 * 
 * @example
 * ```typescript
 * new EasyCLIConfigureCommand(config, 'configure', {
 *  globalKeysToUse: ['verbose'],
 *  prompts: {
 *    env: {
 *     describe: 'What environeent are you setting?',
 *     type: 'string',
 *     prompt: 'always',
 *     demandOption: true,
 *   },
 *  },
 *  });
 * ```
 */
export class EasyCLIConfigureCommand<
  TParams,
  TGloablParams
> extends EasyCLICommand<TParams, TGloablParams> {

  /**
   * Creates a new configure command
   * @param {EasyCLIConfigFile} config The configuration file to use
   * @param {string} [name='configure'] The name of the command
   * @param {ConfigureCommandOptions<TGloablParams, TParams>} [options={}] The options for the command
   */
  constructor(
    config: EasyCLIConfigFile,
    name: string = 'configure',
    options: ConfigureCommandOptions<TGloablParams, TParams> = {}
  ) {
    const {
      globalKeysToUse = [],
      transformer = (params: TGloablParams & TParams) => params,
      ...commandOptions
    } = options;

    const handler = async (
      params: TGloablParams & TParams,
      theme: EasyCLITheme | null
    ) => {
      const logger = theme?.getLogger();
      const keys = [...this.getKeys(), ...globalKeysToUse];

      const clean = Object.entries(params as any).reduce(
        (acc, [key, value]) => {
          if (keys.includes(key as string)) {
            acc[key] = value;
          }

          return acc;
        },
        {} as any
      );

      const transformed = transformer(clean);
      logger?.success('Saving configuration');
      await config.save(transformed);
    };

    super(name, handler, commandOptions);
  }
}
