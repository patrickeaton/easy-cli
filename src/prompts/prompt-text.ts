// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

type Options = {
  type?: 'input' | 'password' | 'editor';
  defaultText?: string | number;
  validator?: (input: string) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

export const promptTextInput = async (
  prompt: string,
  {
    type = 'input',
    defaultText = '',
    validator = (input: string) => true,
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
          type,
          describe: theme?.formattedString(prompt, promptTheme) ?? prompt,
          default: defaultText,
          prompt: 'always',
        },
      });

    if (!validator || validator(choice)) {
      return choice;
    }

    console.log(validationErrorMessage);
  }
};
