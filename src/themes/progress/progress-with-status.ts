import { DisplayOptions, EasyCLITheme } from '..';
import { Options, SingleBar } from 'cli-progress';
import {
  DEFAULT_PROGRESS_BAR_OPTIONS,
  ThemedProgressBar,
  ThemedProgressBarOptions,
} from './base';

/**
 * Options for a ThemedStatusProgressBar that extends a ThemedProgressBar
 *
 * @interface ThemedStatusProgressBarOptions
 * @extends {ThemedProgressBarOptions}
 * @property {boolean} [showCurrentRecord] Whether to show the current record
 * @property {DisplayOptions} [currentRecordDisplayOptions] Display options for the current record
 * @property {boolean} [showSuccess] Whether to show the success count
 * @property {DisplayOptions} [successDisplayOptions] Display options for the success count
 * @property {boolean} [showWarn] Whether to show the warn count
 * @property {DisplayOptions} [warnDisplayOptions] Display options for the warn count
 * @property {boolean} [showError] Whether to show the error count
 * @property {DisplayOptions} [errorDisplayOptions] Display options for the error count
 */
export type ThemedStatusProgressBarOptions = ThemedProgressBarOptions & {
  showCurrentRecord?: boolean;
  currentRecordDisplayOptions?: DisplayOptions;
  showSuccess?: boolean;
  successDisplayOptions?: DisplayOptions;
  showWarn?: boolean;
  warnDisplayOptions?: DisplayOptions;
  showError?: boolean;
  errorDisplayOptions?: DisplayOptions;
};

/**
 * Default options for the ThemedStatusProgressBar
 * @hidden
 */
const DEFAULT_STATUS_PROGRESS_BAR_OPTIONS: ThemedStatusProgressBarOptions = {
  ...DEFAULT_PROGRESS_BAR_OPTIONS,
  showCompleted: false,
  showPercentage: false,
  showTimeElapsed: false,
  // Whether to show the current record
  showCurrentRecord: false,
  // Display options for the current record
  currentRecordDisplayOptions: {},
  showSuccess: true,
  successDisplayOptions: 'success',
  showWarn: true,
  warnDisplayOptions: 'warn',
  showError: true,
  errorDisplayOptions: 'error',
};

/**
 * Payload for the status bar
 *
 * @interface StatusPayload
 * @property {string} current The current status
 * @property {number} [success] The success count
 * @property {number} [warn] The warn count
 * @property {number} [error] The error count
 */
export type StatusPayload = {
  current: string;
  success?: number;
  warn?: number;
  error?: number;
};

/**
 * A themed status progress bar that shows the progress of a task while also showing the current status of the task
 *
 * @class ThemedStatusProgressBar
 * @extends {ThemedProgressBar<ThemedStatusProgressBarOptions>}
 * @param {EasyCLITheme} theme The theme to use
 * @param {string} name The name of the progress bar
 * @param {DisplayOptions} displayOptions The display options for the progress bar
 * @param {ThemedStatusProgressBarOptions} [progressBarOptions=DEFAULT_STATUS_PROGRESS_BAR_OPTIONS] The options for the progress bar
 * @example
 * ```typescript
 * const theme = new EasyCLITheme();
 * const progressBar = new ThemedStatusProgressBar(theme, 'Task', 'Task in progress', {
 *  showCurrentRecord: true,
 * });
 *
 * const bar = progressBar.start(0, 100);
 *
 * // Update the progress bar
 * progressBar.update(50, { current: 'Processing record XXX', success: 10, warn: 5, error: 0 });
 *
 * // Stop the progress bar
 * bar.stop();
 * ```
 */
export class ThemedStatusProgressBar extends ThemedProgressBar<ThemedStatusProgressBarOptions> {
  constructor(
    theme: EasyCLITheme,
    name: string,
    displayOptions: DisplayOptions,
    progressBarOptions: ThemedStatusProgressBarOptions = DEFAULT_STATUS_PROGRESS_BAR_OPTIONS
  ) {
    super(theme, name, displayOptions, {
      ...DEFAULT_STATUS_PROGRESS_BAR_OPTIONS,
      ...progressBarOptions,
    });
  }

  protected getOptions(): Options {
    const options = super.getOptions();
    const { showCurrentRecord, currentRecordDisplayOptions } =
      this.progressBarOptions;

    if (showCurrentRecord) {
      options.format += ` | ${this.theme.formattedString(
        '{current}',
        currentRecordDisplayOptions ?? {}
      )}`;
    }

    if (this.progressBarOptions.showSuccess) {
      options.format += ` | ${this.theme.formattedString(
        'success: {success}',
        this.progressBarOptions.successDisplayOptions ?? {}
      )}`;
    }

    if (this.progressBarOptions.showWarn) {
      options.format += ` | ${this.theme.formattedString(
        'warn: {warn}',
        this.progressBarOptions.warnDisplayOptions ?? {}
      )}`;
    }

    if (this.progressBarOptions.showError) {
      options.format += ` | ${this.theme.formattedString(
        'error: {error}',
        this.progressBarOptions.errorDisplayOptions ?? {}
      )}`;
    }

    return options;
  }

  /**
   * Starts the progress bar
   *
   * @param initial The initial value for the progress bar
   * @param total The total value for the progress bar
   *
   * @returns an instance of the progress bar
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
   * @param {number} progress The current progress value
   * @param {StatusPayload} payload The payload for the status bar
   *
   * @example
   * ```typescript
   * progressBar.update(50, { current: 'Processing record XXX', success: 10, warn: 5, error: 0 });
   * ```
   */
  public update(progress: number, payload: StatusPayload) {
    this.progressBar?.update(progress, payload);
  }

  /**
   * Increments the progress bar
   *
   * @param {StatusPayload} payload The payload for the status bar
   *
   * @example
   * ```typescript
   * progressBar.increment({ current: 'Processing record XXX', success: 10, warn: 5, error: 0 });
   * ```
   */
  public increment(payload: StatusPayload) {
    this.progressBar?.increment(payload);
  }
}
