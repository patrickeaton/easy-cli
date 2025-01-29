import { DisplayOptions, EasyCLITheme } from './model';
import ora, { Ora } from 'ora';

export class ThemedSpinner {
  private theme: EasyCLITheme | null;
  private displayOptions: DisplayOptions;
  private spinner: Ora | null;

  constructor(theme: EasyCLITheme | null, displayOptions: DisplayOptions) {
    this.theme = theme;
    this.displayOptions = displayOptions;
  }

  public start(text: string, options: Partial<Ora> = {}): Ora {
    this.spinner = ora({
      ...options,
      text: this.theme?.formattedString(text, this.displayOptions),
    });

    return this.spinner.start();
  }

  public stop() {
    this.spinner?.stop();
    this.spinner = null;
  }
}
