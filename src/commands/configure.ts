import { command } from 'yargs';
import { CommandSetupOptions, EasyCLICommand } from '.';
import { EasyCLIConfigFile } from '../config';
import { EasyCLITheme } from '../themes';

export type ConfigureCommandOptions<TGlobalParams, TParams> =
  CommandSetupOptions<TGlobalParams, TParams> & {
    globalKeysToUse?: string[]; // What key(s) are you setting?
    transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
  };

export class EasyCLIConfigureCommand<
  TParams,
  TGloablParams
> extends EasyCLICommand<TParams, TGloablParams> {
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
