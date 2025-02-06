import { DisplayOptions, EasyCLITheme } from '..';
import { Options, SingleBar } from 'cli-progress';
import {
  DEFAULT_PROGRESS_BAR_OPTIONS,
  ThemedProgressBar,
  ThemedProgressBarOptions,
} from './base';

/**
 * Options for a ThemedSimpleProgressBar that extends a ThemedProgressBar
 *
 * @interface ThemedSimpleProgressBarOptions
 * @extends {ThemedProgressBarOptions}
 *
 * @property {boolean} [showCurrentRecord] Whether to show the current record
 * @property {DisplayOptions} [currentRecordDisplayOptions] Display options for the current record
 */
export type ThemedSimpleProgressBarOptions = ThemedProgressBarOptions & {
  showCurrentRecord?: boolean;
  currentRecordDisplayOptions?: DisplayOptions;
};

/**
 * Default options for the ThemedSimpleProgressBar
 * @hidden
 */
const DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS: ThemedSimpleProgressBarOptions = {
  ...DEFAULT_PROGRESS_BAR_OPTIONS,
  // Whether to show the current record
  showCurrentRecord: true,
  // Display options for the current record
  currentRecordDisplayOptions: {},
};

/**
 * A themed simple progress bar that extends a ThemedProgressBar
 *
 * @template T
 * @class ThemedSimpleProgressBar
 * @extends {ThemedProgressBar<ThemedSimpleProgressBarOptions>}
 *
 * @param {EasyCLITheme} theme The theme to use
 * @param {string} name The name of the progress bar
 * @param {DisplayOptions} displayOptions The display options for the progress bar
 * @param {ThemedSimpleProgressBarOptions} [progressBarOptions=DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS] The options for the progress bar
 *
 * @example
 * ```typescript
 * const progressBar = new ThemedSimpleProgressBar(theme, 'progress', displayOptions, {
 *  showCurrentRecord: true,
 *  currentRecordDisplayOptions: 'info',
 * });
 * ```
 */
export class ThemedSimpleProgressBar extends ThemedProgressBar<ThemedSimpleProgressBarOptions> {
  constructor(
    theme: EasyCLITheme,
    name: string,
    displayOptions: DisplayOptions,
    progressBarOptions: ThemedSimpleProgressBarOptions = DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS
  ) {
    super(theme, name, displayOptions, {
      ...DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS,
      ...progressBarOptions,
    });
  }

  /**
   * An internal method to get the options for the progress bar
   */
  protected getOptions(): Options {
    const options = super.getOptions();
    const { showCurrentRecord, currentRecordDisplayOptions } =
      this.progressBarOptions;

    if (showCurrentRecord) {
      options.format += ` ${this.theme.formattedString(
        '{current}',
        currentRecordDisplayOptions ?? {}
      )}`;
    }

    return options;
  }

  /**
   * Starts the progress bar
   *
   * @param {number} initial The initial value
   * @param {number} total The total value
   * @returns {SingleBar} The progress bar
   * 
   * @example
   * ```typescript
   * progressBar.start(0, 100);
   * ```
   */
  public start(initial: number, total: number): SingleBar {
    return super.start(initial, total, {}, this.getOptions());
  }

  /**
   * Updates the progress bar
   *
   * @param {number} progress The current progress
   * @param {string} [current=''] The current record
   * 
   * @example
   * ```typescript
   * progressBar.update(50, 'Record 1');
   * ```
   */
  public update(progress: number, current: string = '') {
    this.progressBar?.update(progress, {
      current,
    });
  }

  /**
   * Increments the progress bar by one.
   *
   * @param {string} [current=''] The current record
   * 
   * @example
   * ```typescript
   * progressBar.increment('Record 1');
   * ```
   */
  public increment(current: string = '') {
    this.progressBar?.increment({ current });
  }
}
