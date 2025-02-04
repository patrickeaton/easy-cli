import chalk, { Chalk } from 'chalk';
import { EasyCLILogger } from '../logger';
import { ThemedTable, ThemedTableColumn } from './themed-table';
import { ThemedSpinner } from './themed-spinner';
import {
  ThemedSimpleProgressBar,
  ThemedSimpleProgressBarOptions,
} from './progress/simple-progress';
import {
  ThemedStatusProgressBar,
  ThemedStatusProgressBarOptions,
} from './progress';

type StringDisplayOptions = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;

  // TODO: Support different color formats
  color?: string;
  bgColor?: string;
};

export type DisplayOptions =
  | string
  | StringDisplayOptions
  | (string | StringDisplayOptions)[];

export type NamedDisplayOptions =
  | 'log'
  | 'error'
  | 'warn'
  | 'info'
  | 'success'
  | 'default'
  | string;

export class EasyCLITheme {
  private verbosity: number = 0;
  private namedDisplayOptions: Record<
    NamedDisplayOptions,
    StringDisplayOptions
  > = {
    log: {},
    error: { color: '#FF5555', bold: true },
    warn: { color: '#FFFF55' },
    info: { color: '#F5F5F5' },
    success: { color: '#55FF55' },
    default: {},
  };

  constructor(
    verbosity: number = 0,
    namedDisplayOptions?: Record<NamedDisplayOptions, StringDisplayOptions>
  ) {
    this.verbosity = verbosity;
    if (namedDisplayOptions) {
      this.namedDisplayOptions = {
        ...this.namedDisplayOptions,
        ...namedDisplayOptions,
      };
    }
  }

  private mergeDisplayOptions(options: DisplayOptions): StringDisplayOptions {
    // If it's a string, we can just return the named display options
    if (typeof options === 'string') {
      return {
        ...this.namedDisplayOptions.default,
        ...(this.namedDisplayOptions?.[options] ?? {}),
      };
    }

    // If it's an object, we can just return the object
    if (!Array.isArray(options)) {
      return {
        ...this.namedDisplayOptions.default,
        ...options,
      };
    }

    // Otherwise combine them in reverse order
    return [this.namedDisplayOptions.default ?? {}, ...options.reverse()]
      .map(option =>
        typeof option === 'string'
          ? this.namedDisplayOptions?.[option] ?? {}
          : option
      )
      .reduce(
        (acc, option) => ({ ...acc, ...option }),
        {} as StringDisplayOptions
      );
  }

  formattedString(string: string, options: DisplayOptions): string {
    let formatter: Chalk = chalk;
    let formatOptions = this.mergeDisplayOptions(options);

    if (formatOptions.bold) formatter = formatter.bold;
    if (formatOptions.italic) formatter = formatter.italic;
    if (formatOptions.underline) formatter = formatter.underline;
    if (formatOptions.strikethrough) formatter = formatter.strikethrough;
    if (formatOptions.color) formatter = formatter.hex(formatOptions.color);
    if (formatOptions.bgColor)
      formatter = formatter.bgHex(formatOptions.bgColor);

    return formatter(string);
  }

  setVerbosity(verbosity: number): EasyCLITheme {
    this.verbosity = verbosity;
    return this;
  }

  setNamedDisplayOption(
    name: NamedDisplayOptions,
    options: StringDisplayOptions
  ): EasyCLITheme {
    this.namedDisplayOptions[name] = options;
    return this;
  }

  getLogger() {
    return new EasyCLILogger({ theme: this, verbosity: this.verbosity }); // TODO: Add verbosity and other options
  }

  getTable(columns: ThemedTableColumn<any>[] = [], totalWidth: number = 120) {
    return new ThemedTable({ theme: this, columns, totalWidth }); // TODO: Add verbosity and other options
  }

  getSpinner(format: DisplayOptions = 'default') {
    return new ThemedSpinner(this, format); // TODO: Add other options
  }

  getSimpleProgressBar(
    name: string,
    format: DisplayOptions = 'default',
    options: ThemedSimpleProgressBarOptions = {}
  ) {
    return new ThemedSimpleProgressBar(this, name, format, options); // TODO: Add Other Options
  }

  getStatusProgressBar(
    name: string,
    format: DisplayOptions = 'default',
    options: ThemedStatusProgressBarOptions = {}
  ) {
    return new ThemedStatusProgressBar(this, name, format, options); // TODO: Add Other Options
  }
}

export * from './themed-table';
export * from './themed-spinner';
export * from './progress';
