// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';
import sripeAnsi from 'strip-ansi';

type Options = {
  defaultSelected?: string[];
  validator?: (input: string[]) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

export const promptMultipleChoice = async (
  prompt: string,
  choices: string[],
  {
    defaultSelected = [],
    validator = () => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: Options = {}
) => {

  // If the options include ansii characters, we need to strip them out when comparing the defaultSelected
  const ansiStrippedDefaults = choices.reduce((acc: string[], opt: string) => {
    if (defaultSelected.includes(sripeAnsi(opt))) {
      acc.push(opt);
    }
    return acc;
  }, [] as string[]);

  while (true) {
    const { choice } = await yargsInteractive()
      .usage('$0 <command> [args]')
      .interactive({
        interactive: { default: true },
        choice: {
          type: 'checkbox',
          describe: theme?.formattedString(prompt, promptTheme) ?? prompt,
          choices,
          default: ansiStrippedDefaults,
          prompt: 'always',
        },
      });

    const clean = choice.map((opt: string) => sripeAnsi(opt));

    if (validator(clean)) {
      return clean;
    }

    console.log(validationErrorMessage);
  }
};
