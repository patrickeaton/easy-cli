import {
  CommandOptionObject,
  CommandSetupOptions,
  EasyCLICommand,
} from './command';
import { EasyCLIConfigFile } from '../config-files';
import { EasyCLITheme } from '../themes';
import { access } from 'fs';

/**
 * Options for the configure command
 * @interface ConfigureCommandOptions
 *
 * @template TGlobalParams The global params for the CLI
 * @template TParams The params for the command
 *
 * @property {string[]} globalKeysToUse What key(s) are you setting?
 *
 * @extends CommandSetupOptions
 *
 * @example
 * ```typescript
 * {
 *  globalKeysToUse?: string[]; // What key(s) are you setting?
 *  transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
 *  alias?: string; // The alias for the command
 *  prompts?: {
 *   // Prompts to ask the user for an input for the env key
 *   env: {
 *    describe: 'What environent are you setting?',
 *    type: 'string',
 *    prompt: 'always',
 *    demandOption: true,
 *   },
 *   ...
 *  },
 * }
 * ```
 */
export type ConfigureCommandOptions<TGlobalParams, TParams> =
  CommandSetupOptions<TGlobalParams, TParams> & {
    globalKeysToUse?: (keyof TGlobalParams)[]; // What key(s) are you setting?
    callback?: (params: TGlobalParams & TParams) => void; // The callback to run after the command is executed, this is useful if you want to add additional functionality to the command ie. Copying a file
  };

/**
 * A command to add a configure command to the CLI that will save the configuration
 *
 * @template TParams The params for the command
 * @template TGlobalParams The global params for the CLI
 * @extends EasyCLICommand
 *
 * @example
 * ```typescript
 * new EasyCLIConfigureCommand(config, 'configure', {
 *  globalKeysToUse: ['verbose'], // Use the verbose key
 *  aliases: ['config', 'cfg', 'setup'] // Alias the command to 'config', 'cfg', and 'setup'
 *  prompts: {
 *    // Prompts to ask the user for an input for the env key
 *    env: {
 *     describe: 'What environent are you setting?',
 *     type: 'string',
 *     prompt: 'always',
 *     demandOption: true,
 *   },
 *  ...
 *  },
 *  flags: {
 *  // Add a flag to the command
 *   profile: {
 *     type: 'string',
 *     describe: 'The profile to use',
 *     demandOption: false, // Make the flag optional
 *     default: 'my-profile', // Set a default value
 *   }
 *  },
 * });
 * ```
 */
export class EasyCLIConfigureCommand<
  TParams extends Record<string, any> = Record<string, any>,
  TGlobalParams extends Record<string, any> = Record<string, any>
> extends EasyCLICommand<TParams, TGlobalParams> {
  /**
   * Creates a new configure command
   * @param {EasyCLIConfigFile} config The configuration file to use
   * @param {string} [name='configure'] The name of the command
   * @param {ConfigureCommandOptions<TGlobalParams, TParams>} [options={}] The options for the command
   */
  constructor(
    config: EasyCLIConfigFile,
    name: string = 'configure',
    options: ConfigureCommandOptions<TGlobalParams, TParams> = {}
  ) {
    const {
      globalKeysToUse = [],
      callback,
      ...commandOptions
    } = options;

    const handler = async (
      params: TGlobalParams & TParams,
      theme?: EasyCLITheme
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

      logger?.success('Saving configuration');
      await config.save(clean);

      if (callback) {
        await callback(params);
      }
    };

    super(name, handler, commandOptions);
  }
}
