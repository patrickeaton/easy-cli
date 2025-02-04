// @ts-ignore Untyped Module
import yargsInteractive from 'yargs-interactive';
import { DisplayOptions, EasyCLITheme } from '../themes';

/**
 * Options for the promptConfirm function
 * 
 * @typedef PromptConfirmOptions
 * @type {object}
 * 
 * @property {boolean} [defaultOption=false] The default option to use
 * @property {EasyCLITheme} [theme=null] The theme to use
 * @property {DisplayOptions} [promptTheme='default'] The theme to use for the prompt
 */
export type PromptConfirmOptions = {
  defaultOption?: boolean;
  theme?: null | EasyCLITheme;
  promptTheme?: DisplayOptions;
};

/**
 * Prompts the user to confirm a prompt.
 * 
 * @param {string} prompt The prompt to display to the user
 * @param {PromptConfirmOptions} options The options for the prompt
 * 
 * @returns {Promise<boolean>} The choice the user selected
 */
export const promptConfirm = async (
  prompt: string,
  { defaultOption = false, theme = null, promptTheme = 'default' }: PromptConfirmOptions = {}
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
