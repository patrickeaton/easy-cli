import { DisplayOptions, EasyCLITheme } from '..';
import { Options, SingleBar } from 'cli-progress';
import {
  DEFAULT_PROGRESS_BAR_OPTIONS,
  ThemedProgressBar,
  ThemedProgressBarOptions,
} from './base';

export type ThemedSimpleProgressBarOptions = ThemedProgressBarOptions & {
  showCurrentRecord?: boolean;
  currentRecordDisplayOptions?: DisplayOptions;
};

const DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS: ThemedSimpleProgressBarOptions = {
  ...DEFAULT_PROGRESS_BAR_OPTIONS,
  // Whether to show the current record
  showCurrentRecord: true,
  // Display options for the current record
  currentRecordDisplayOptions: {},
};

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

  public start(initial: number, total: number): SingleBar {
    return super.start(initial, total, {}, this.getOptions());
  }

  public update(progress: number, current: string = '') {
    this.progressBar?.update(progress, {
      current,
    });
  }

  public increment(current: string = '') {
    this.progressBar?.increment({ current });
  }
}
