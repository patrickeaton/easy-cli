// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';
import sripeAnsi from 'strip-ansi';

/**
 * Options for the promptMultipleChoice function
 *
 * @typedef PromptMultipleChoiceOptions
 * @type {object}
 *
 * @property {string[]} [defaultSelected=[]] The default selected options
 * @property {(input: string[]) => boolean} [validator=() => true] A function to validate the input
 * @property {string} [validationErrorMessage='Invalid input'] The error message to display if the input is invalid
 * @property {EasyCLITheme} [theme=null] The theme to use
 * @property {DisplayOptions} [promptTheme='default'] The theme to use for the prompt
 */
export type PromptMultipleChoiceOptions = {
  defaultSelected?: string[];
  validator?: (input: string[]) => boolean;
  validationErrorMessage?: string;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

/**
 * Prompts the user to select multiple choices from a list of choices, if the input is invalid, it will prompt the user again for a valid input
 *
 * @param {string} prompt The prompt to display to the user
 * @param {string[]} choices The choices to display to the user
 * @param {PromptMultipleChoiceOptions} options  The options for the prompt
 *
 * @returns {Promise<string[]>} The validated choices the user selected
 */
export const promptMultipleChoice = async (
  prompt: string,
  choices: string[],
  {
    defaultSelected = [],
    validator = () => true,
    validationErrorMessage = 'Invalid input',
    theme = null,
    promptTheme = 'default',
  }: PromptMultipleChoiceOptions = {}
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
