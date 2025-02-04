import { DisplayOptions, EasyCLITheme } from '..';
import { Options, SingleBar } from 'cli-progress';
import {
  DEFAULT_PROGRESS_BAR_OPTIONS,
  ThemedProgressBar,
  ThemedProgressBarOptions,
} from './base';

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

export type StatusPayload = {
  current: string;
  success?: number;
  warn?: number;
  error?: number;
};

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

  public start(initial: number, total: number): SingleBar {
    return super.start(initial, total, {}, this.getOptions());
  }

  public update(progress: number, payload: StatusPayload) {
    this.progressBar?.update(progress, payload);
  }

  public increment(payload: StatusPayload) {
    this.progressBar?.increment(payload);
  }
}
