import { DisplayOptions, EasyCLITheme } from '../model';
import { Options, SingleBar } from 'cli-progress';

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

  public stop() {
    this.progressBar?.stop();
    this.progressBar = null;
  }
}
