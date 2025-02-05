import { DisplayOptions, EasyCLITheme } from '.';
import ora, { Ora } from 'ora';

/**
 * A class to handle themed spinners
 * 
 * @class ThemedSpinner
 *
 * @param {EasyCLITheme} theme The theme to use
 * @param {DisplayOptions} displayOptions The display options for the spinner
 *
 * @example
 * ```typescript
 * const theme = new EasyCLITheme();
 * const spinner = new ThemedSpinner(theme, 'default');
 * spinner.start('Loading...');
 * ```
 */
export class ThemedSpinner {
  private theme: EasyCLITheme | null;
  private displayOptions: DisplayOptions;
  private spinner: Ora | null;

  /**
   * Creates an instance of ThemedSpinner
   * @param {EasyCLITheme} theme The theme to use
   * @param {DisplayOptions} displayOptions The display options for the spinner
   */
  constructor(theme: EasyCLITheme | null, displayOptions: DisplayOptions) {
    this.theme = theme;
    this.displayOptions = displayOptions;
  }

  /**
   * Starts the spinner
   * 
   * @param {string} text The text to display
   * @param {Partial<Ora>} [options={}] The options for the spinner
   * 
   * @returns {Ora} The spinner instance
   */
  public start(text: string, options: Partial<Ora> = {}): Ora {
    this.spinner = ora({
      ...options,
      text: this.theme?.formattedString(text, this.displayOptions),
    });

    return this.spinner.start();
  }

  /**
   * Stops the spinner
   */
  public stop() {
    this.spinner?.stop();
    this.spinner = null;
  }
}
