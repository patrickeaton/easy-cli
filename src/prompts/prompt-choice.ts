// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

/**
 * Options for the promptChoice function
 *
 * @interface PromptChoiceOptions
 * @type {object}
 *
 * @property {string | null} [defaultOption=null] The default option to use ()
 * @property {(input: string) => boolean} [validator=() => true] A function to validate the input
 * @property {string} [validationErrorMessage='Invalid input'] The error message to display if the input is invalid
 * @property {EasyCLITheme} [theme=null] The theme to use
 * @property {DisplayOptions} [promptTheme='default'] The theme to use for the prompt
 */
export type PromptChoiceOptions = {
  defaultOption?: string | null;
  validator?: (input: string) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

/**
 * Prompts the user to select a choice from a list of choices, if the input is invalid, it will prompt the user again for a valid input
 *
 * @param {string} prompt The prompt to display to the user
 * @param {string[]} choices The choices to display to the user
 * @param {PromptChoiceOptions} options The options for the prompt
 *
 * @returns {Promise<string>} The choice the user selected
 *
 * @example
 * ```typescript
 * // Prompt the user to select a choice
 * const choice = await promptChoice('Select a choice', ['A', 'B', 'C']);
 * console.log(choice);
 *
 * // Prompt the user to select a choice with a default option
 * const choice = await promptChoice('Select a choice', ['A', 'B', 'C'], { defaultOption: 'A' });
 *  console.log(choice);
 *
 * // Prompt the user to select a choice using a custom theme
 * const choice = await promptChoice('Select a choice', ['A', 'B', 'C'], {
 * theme: new EasyCLITheme(),
 * promptTheme: 'info',
 * });
 * console.log(choice);
 * 
 * // Prompt the user to select a choice using a custom displaying the choices with a theme
 * const theme = new EasyCLITheme();
 * const choice = await promptChoice('Select a choice', [
 *  theme.formattedString('A', 'info'),
 *  theme.formattedString('B', 'warn'),
 *  theme.formattedString('C', 'error'),
 * ]);
 * console.log(choice);
 * ```
 *
 */
export const promptChoice = async (
  prompt: string,
  choices: string[],
  {
    defaultOption = null,
    validator = () => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: PromptChoiceOptions = {}
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
