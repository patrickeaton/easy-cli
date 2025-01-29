// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes/model';

type Options = {
  defaultOption?: boolean;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

export const promptConfirm = async (
  prompt: string,
  { defaultOption = false, theme = null, promptTheme = 'default' }: Options = {}
) =>
  yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive({
      interactive: { default: true },
      confirm: {
        type: 'confirm',
        describe: theme?.formattedString(prompt, promptTheme) ?? prompt,
        prompt: 'always',
        default: defaultOption,
      },
    })
    .then(({ confirm }: any) => confirm);
