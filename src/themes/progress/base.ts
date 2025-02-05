import { DisplayOptions, EasyCLITheme } from '..';
import { Options, SingleBar } from 'cli-progress';

/**
 * Options for the progress bar
 * @interface ThemedProgressBarOptions
 * @type {object}
 *
 * @property {DisplayOptions} [barDisplayOptions] The display options for the progress bar
 * @property {boolean} [showPercentage=true] Whether to show the percentage complete
 * @property {DisplayOptions} [percentageDisplayOptions] The display options for the percentage complete
 * @property {boolean} [showTimeElapsed=false] Whether to show the time elapsed
 * @property {DisplayOptions} [timeElapsedDisplayOptions] The display options for the time elapsed
 * @property {boolean} [showTimeLeft=true] Whether to show the time left
 * @property {DisplayOptions} [timeLeftDisplayOptions] The display options for the time left
 * @property {boolean} [showCompleted=true] Whether to show the completed count
 * @property {DisplayOptions} [completedDisplayOptions] The display options for the completed count
 */
export type ThemedProgressBarOptions = {
  barDisplayOptions?: DisplayOptions;
  showPercentage?: boolean;
  percentageDisplayOptions?: DisplayOptions;
  showTimeLeft?: boolean;
  timeLeftDisplayOptions?: DisplayOptions;
  showTimeElapsed?: boolean;
  timeElapsedDisplayOptions?: DisplayOptions;
  showCompleted?: boolean;
  completedDisplayOptions?: DisplayOptions;
};

/**
 * Default options for the progress bar
 * @hidden
 */
export const DEFAULT_PROGRESS_BAR_OPTIONS: ThemedProgressBarOptions = {
  // Default options for the progress bar
  barDisplayOptions: {},
  // Whether to show the percentage complete
  showPercentage: true,
  // Display options for the percentage complete
  percentageDisplayOptions: {},
  // Whether to show the time elapsed
  showTimeElapsed: false,
  // Display options for the time elapsed
  timeElapsedDisplayOptions: {},
  // Whether to show the time left
  showTimeLeft: true,
  // Display options for the time left
  timeLeftDisplayOptions: {},
  // Whether to show the completed count
  showCompleted: true,
  // Display options for the completed count
  completedDisplayOptions: {},
};

/**
 * A themed progress bar, can be overridden to add additional functionality
 * @template T
 * @class ThemedProgressBar
 * @param {EasyCLITheme} theme The theme to use
 * @param {string} name The name of the progress bar
 * @param {DisplayOptions} displayOptions The display options for the progress bar
 * @param {ThemedProgressBarOptions} [progressBarOptions=DEFAULT_PROGRESS_BAR_OPTIONS] The options for the progress bar
 */
export class ThemedProgressBar<
  T extends ThemedProgressBarOptions = ThemedProgressBarOptions
> {
  protected name: string;
  protected theme: EasyCLITheme;
  protected displayOptions: DisplayOptions;
  protected progressBar: SingleBar | null;
  protected progressBarOptions: T;

  constructor(
    theme: EasyCLITheme,
    name: string,
    displayOptions: DisplayOptions,
    progressBarOptions: ThemedProgressBarOptions = DEFAULT_PROGRESS_BAR_OPTIONS
  ) {
    this.theme = theme;
    this.name = name;
    this.displayOptions = displayOptions;
    this.progressBarOptions = {
      ...DEFAULT_PROGRESS_BAR_OPTIONS,
      ...progressBarOptions,
    } as T;
  }

  /**
   * An internal method to get the options for the progress bar
   *
   * @returns {Options} The options for the progress bar
   */
  protected getOptions(): Options {
    const {
      barDisplayOptions,
      showPercentage,
      percentageDisplayOptions,
      showTimeElapsed,
      timeElapsedDisplayOptions,
      showTimeLeft,
      timeLeftDisplayOptions,
      showCompleted,
      completedDisplayOptions,
    } = this.progressBarOptions;

    const format = `${this.name} ${this.theme.formattedString(
      '[{bar}]',
      barDisplayOptions ?? {}
    )}`;
    const additions = [];

    if (showPercentage)
      additions.push(
        this.theme.formattedString(
          '{percentage}%',
          percentageDisplayOptions ?? {}
        )
      );

    if (showTimeElapsed)
      additions.push(
        this.theme.formattedString(
          '{duration_formatted} elapsed',
          timeElapsedDisplayOptions ?? {}
        )
      );

    if (showTimeLeft)
      additions.push(
        this.theme.formattedString(
          'ETA: {eta_formatted}',
          timeLeftDisplayOptions ?? {}
        )
      );

    if (showCompleted)
      additions.push(
        this.theme.formattedString(
          '{value}/{total}',
          completedDisplayOptions ?? {}
        )
      );

    return {
      format: this.theme.formattedString(
        `${format} ${additions.join(' | ')}`,
        this.displayOptions
      ),
      hideCursor: true,
      fps: 60,
      stopOnComplete: true,
      clearOnComplete: true,
    };
  }

  /**
   * Starts the progress bar
   *
   * @param {number} initial The initial number of items processed
   * @param {number} total The total number of items to process
   * @param {Record<string, any>} payload The payload to pass to the progress bar
   * @param {Options} options A set of options for the progress bar
   * @returns
   */
  public start(
    initial: number,
    total: number,
    payload: Record<string, any> = {},
    options: Options = {}
  ): SingleBar {
    if (this.progressBar) return this.progressBar;

    this.progressBar = new SingleBar(options);
    this.progressBar.start(total, initial, payload);

    return this.progressBar;
  }

  /**
   * Stops the progress bar
   */
  public stop() {
    this.progressBar?.stop();
    this.progressBar = null;
  }
}
