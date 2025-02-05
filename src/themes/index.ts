/** @packageDocumentation This module contains theming for the EasyCLI library. */

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

/**
 * Options for displaying a string
 * @interface StringDisplayOptions
 * @property {boolean} [bold] Whether to bold the string
 * @property {boolean} [italic] Whether to italicize the string
 * @property {boolean} [underline] Whether to underline the string
 * @property {boolean} [strikethrough] Whether to strikethrough the string
 * @property {string} [color] The color of the string (hex), support for other formats is planned
 * @property {string} [bgColor] The background color of the string (hex), support for other formats is planned
 */
export type StringDisplayOptions = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;

  // TODO: Support different color formats
  color?: string;
  bgColor?: string;
};

/**
 * Options for displaying a string. Can be a string, a StringDisplayOptions object, or an array of strings and StringDisplayOptions objects.
 * @typedef DisplayOptions
 *
 * @type {string | StringDisplayOptions | (string | StringDisplayOptions)[]}
 */
export type DisplayOptions =
  | string
  | StringDisplayOptions
  | (string | StringDisplayOptions)[];

/**
 * Named display options
 * @enum
 */
export type NamedDisplayOptions =
  | 'log'
  | 'error'
  | 'warn'
  | 'info'
  | 'success'
  | 'default'
  | string;

/**
 * A theme for the CLI, that allows for customizing the look and feel of the CLI, generating logs, tables, spinners, and progress bars.
 *
 * @class EasyCLITheme
 *
 * @property {number} verbosity The verbosity level of the theme
 * @property {Record<NamedDisplayOptions, StringDisplayOptions>} namedDisplayOptions The named display options for the theme
 * @property {EasyCLITheme} setVerbosity Sets the verbosity level of the theme
 * @property {EasyCLITheme} setNamedDisplayOption Sets the named display options for the theme
 * @property {EasyCLILogger} getLogger Gets a logger with the theme
 * @property {ThemedTable} getTable Gets a table with the theme
 * @property {ThemedSpinner} getSpinner Gets a spinner with the theme
 * @property {ThemedSimpleProgressBar} getSimpleProgressBar Gets a simple progress bar with the theme
 * @property {ThemedStatusProgressBar} getStatusProgressBar Gets a status progress bar with the theme
 *
 * @example
 * ```typescript
 * const theme = new EasyCLITheme();
 * const logger = theme.getLogger();
 * logger.log('Hello, world!');
 * ```
 */
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

  /**
   * Creates an instance of EasyCLITheme.
   *
   * @param {number} [verbosity=0] The verbosity level of the theme
   * @param {Record<NamedDisplayOptions, StringDisplayOptions>} [namedDisplayOptions] The named display options for the theme
   */
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

  /**
   * An internal method to merge display options
   * @param options The display options to merge
   * @returns A single display options object
   */
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

  /**
   * Formats a string with the display options
   *
   * @param {string} string The string to format
   * @param {DisplayOptions} options The display options to use
   * @returns {string} The formatted string
   *
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   * const formatted = theme.formattedString('Hello, world!', ['info', { bold: true }]);
   * console.log(formatted);
   * ```
   */
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

  /**
   * Sets the verbosity level of the theme
   *
   * @param {number} verbosity The verbosity level to set
   * @returns {EasyCLITheme} The theme with the verbosity level
   */
  setVerbosity(verbosity: number): EasyCLITheme {
    this.verbosity = verbosity;
    return this;
  }

  /**
   * Sets a named display options for the theme
   *
   * @param {NamedDisplayOptions} name The name of the display options
   * @param {StringDisplayOptions} options The display options to set
   *
   * @returns {EasyCLITheme} The theme with the named display options set for use with optional chaining.
   */
  setNamedDisplayOption(
    name: NamedDisplayOptions,
    options: StringDisplayOptions
  ): EasyCLITheme {
    this.namedDisplayOptions[name] = options;
    return this;
  }

  /**
   * Gets a logger instance with the theme.
   *
   * @returns {EasyCLILogger} The logger with the theme
   */
  getLogger() {
    return new EasyCLILogger({ theme: this, verbosity: this.verbosity }); // TODO: Add verbosity and other options
  }

  /**
   * Gets a themed table using this theme
   *
   * @param {ThemedTableColumn<TItem>[]} [columns=[]] The columns for the table
   * @param {number} [totalWidth=120] The total width of the table
   *
   * @returns {ThemedTable} The themed table instance
   *
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   * const table = theme.getTable([
   *  { name: 'Name', data: item => item.name },
   *  { name: 'Age', data: item => item.age },
   * ]);
   *
   * table.render([
   *  { name: 'Alice', age: 25 },
   *  { name: 'Bob', age: 30 },
   * ]);
   * ```
   */
  getTable<TItem extends Record<string, any> = any[]>(
    columns: ThemedTableColumn<TItem>[] = [],
    totalWidth: number = 120
  ) {
    return new ThemedTable<TItem>({ theme: this, columns, totalWidth }); // TODO: Add verbosity and other options
  }

  /**
   * Gets a spinner using this theme
   *
   * @param {DisplayOptions} [format='default'] The format for the spinner
   *
   * @returns {ThemedSpinner} The themed spinner instance
   *
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   * const spinner = theme.getSpinner('default');
   * spinner.start('Loading...');
   * ```
   */
  getSpinner(format: DisplayOptions = 'default') {
    return new ThemedSpinner(this, format); // TODO: Add other options
  }

  /**
   * Gets a simple progress bar using this theme
   *
   * @param {string} name The name of the progress bar
   * @param {DisplayOptions} [format='default'] The format for the progress bar
   * @param {ThemedSimpleProgressBarOptions} [options={}] The options for the progress bar
   *
   * @returns {ThemedSimpleProgressBar} The themed simple progress bar instance
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   * const progressBar = theme.getSimpleProgressBar('progress', 'default', {
   *   showCurrentRecord: true,
   *   currentRecordDisplayOptions: 'info',
   * });
   * ```
   */
  getSimpleProgressBar(
    name: string,
    format: DisplayOptions = 'default',
    options: ThemedSimpleProgressBarOptions = {}
  ) {
    return new ThemedSimpleProgressBar(this, name, format, options); // TODO: Add Other Options
  }

  /**
   * Gets a status progress bar using this theme
   *
   * @param {string} name The name of the progress bar
   * @param {DisplayOptions} [format='default'] The format for the progress bar
   * @param {ThemedStatusProgressBarOptions} [options={}] The options for the progress bar
   *
   * @returns {ThemedStatusProgressBar} The themed status progress bar instance
   * @example
   * ```typescript
   * const theme = new EasyCLITheme();
   * const progressBar = theme.getStatusProgressBar('Task', 'Task in progress', {
   *   showCurrentRecord: true,
   * });
   * ```
   */
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
