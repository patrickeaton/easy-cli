// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

/**
 * Options for the promptTextInput function
 *
 * @interface PromptTextOptions
 * @type {object}
 *
 * @property {'input' | 'password' | 'editor'} [type='input'] The type of input to use. 'input' is a normal text input, 'password' is hidden whilst typing, 'editor' opens up an editor
 * @property {string} [defaultText=''] The default text to use
 * @property {(input: string) => boolean} [validator=() => true] A function to validate the input
 * @property {string} [validationErrorMessage='Invalid input'] The error message to display if the input is invalid
 * @property {EasyCLITheme} [theme=null] The theme to use
 * @property {DisplayOptions} [promptTheme='default'] The theme to use for the prompt
 *
 * @example
 * ```typescript
 * {
 * type: 'input',
 * defaultText: '',
 * validator: (input: string) => true,
 * validationErrorMessage: 'Invalid input',
 * theme: null,
 * promptTheme: 'default',
 * }
 * ```
 */
export type PromptTextOptions = {
  type?: 'input' | 'password' | 'editor';
  defaultText?: string;
  validator?: (input: string) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

/**
 * Prompts the user to enter text.
 *
 * @param {string} prompt The prompt to display to the user
 * @param {PromptTextOptions} options The options for the prompt
 *
 * @returns {Promise<string>} The validated text the user entered
 *
 * @example
 * ```typescript
 * // Prompt the user to enter some text
 * const text = await promptTextInput('Enter some text');
 * console.log(text);
 *
 * // Prompt the user to enter a password
 * const password = await promptTextInput('Enter a password', { type: 'password' });
 * console.log(password);
 *
 * // Prompt the user to enter some text using an editor
 * const editor = await promptTextInput('Enter some text', { type: 'editor' });
 * console.log(editor);
 *
 * // Prompt the user to enter some text longer than 5 characters
 * const text = await promptTextInput('Enter some text', {
 *  validator: (input) => input.length > 5,
 *  validationErrorMessage: 'Text must be longer than 5 characters',
 * });
 * console.log(text);
 *
 * // Prompt the user to enter some text using a custom theme
 * const text = await promptTextInput('Enter some text', {
 * theme: new EasyCLITheme(),
 *   promptTheme: 'info',
 * });
 * console.log(text);
 * ```
 *
 */
export const promptTextInput = async (
  prompt: string,
  {
    type = 'input',
    defaultText = '',
    validator = (input: string) => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: PromptTextOptions = {}
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
