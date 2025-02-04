// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

/**
 * Options for the promptNumber function
 * 
 * @typedef PromptNumberOptions
 * @type {object}
 * 
 * @property {number | null} [value=null] The default value to use
 * @property {(input: number) => boolean} [validator=() => true] A function to validate the input
 * @property {string} [validationErrorMessage='Invalid input'] The error message to display if the input is invalid
 * @property {EasyCLITheme} [theme=null] The theme to use
 * @property {DisplayOptions} [promptTheme='default'] The theme to use for the prompt
 */
export type PromptNumberOptions = {
  value?: number | null;
  validator?: (input: number) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

/**
 * Prompts the user to enter a number.
 * 
 * @param {string} prompt The prompt to display to the user
 * @param {PromptNumberOptions} options The options for the prompt
 * 
 * @returns {Promise<number>} The number the user entered
 */
export const promptNumber = async (
  prompt: string,
  {
    value = null,
    validator = (input: number) => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: PromptNumberOptions = {}
) => {
  while (true) {
    const { choice } = await yargsInteractive()
      .usage('$0 <command> [args]')
      .interactive({
        interactive: { default: true },
        choice: {
          type: 'number',
          describe: theme?.formattedString(prompt, promptTheme) ?? prompt,
          default: value,
          prompt: 'always',
        },
      });

    if (!validator || validator(choice)) {
      return choice;
    }

    console.log(validationErrorMessage);
  }
};
