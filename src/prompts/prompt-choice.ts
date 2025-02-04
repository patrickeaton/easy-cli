// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

type Options = {
  defaultOption?: string | null;
  validator?: (input: string) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

export const promptChoice = async (
  prompt: string,
  choices: string[],
  {
    defaultOption = null,
    validator = () => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: Options = {}
) => {
  while (true) {
    const { choice } = await yargsInteractive()
      .usage('$0 <command> [args]')
      .interactive({
        interactive: { default: true },
        choice: {
          type: 'list',
          describe: theme?.formattedString(prompt, promptTheme) ?? prompt,
          choices,
          default: defaultOption,
          prompt: 'always',
        },
      });

    if (validator(choice)) {
      return choice;
    }

    console.log(validationErrorMessage);
  }
};
