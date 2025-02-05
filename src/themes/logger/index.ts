import { DisplayOptions, EasyCLITheme } from '..';

/**
 * Supported log types
 * @typedef {'log' | 'info' | 'warn' | 'error' | 'success'} SupportedLogType
 *
 * @type {string}
 */
export type SupportedLogType = 'log' | 'info' | 'warn' | 'error' | 'success';

/**
 * Removes circular references from an object recursively
 *
 * @param {Object} obj - The object to remove circular references from
 * @returns {Object} - The object with circular references removed
 */
const removeCircularReferences = (obj: Object) => {
  const seen = new Map();

  const recurse = (obj: any) => {
    seen.set(obj, true);

    if (Array.isArray(obj)) {
      return obj.map((v: any): any => {
        if (typeof v !== 'object') {
          return v;
        }
        if (seen.has(v)) {
          return '[Circular Reference]';
        } else {
          return recurse(v);
        }
      }) as any[];
    }

    return Object.entries(obj).reduce((acc, [k, v]) => {
      if (typeof v !== 'object') {
        acc[k] = v;
        return acc;
      }
      if (seen.has(v)) {
        acc[k] = '[Circular Reference]';
        return acc;
      } else {
        acc[k] = recurse(v);
        return acc;
      }
    }, {} as any);
  };

  return recurse(obj);
};

/**
 * Outputs a log to the console
 *
 * @param {SupportedLogType} type - The type of log to output
 * @param {string} log - The log to output
 */
const outputLog = (type: SupportedLogType, log: string) => {
  if (type === 'success') {
    console.log(log);
    return;
  }

  console[type](log);
};

/**
 * A response from a logger
 * This is used to allow for forcing a log to be output using the `force` method
 *
 * @class EasyCLILoggerResponses
 * @property {string} log - The log that was output
 * @property {SupportedLogType} type - The type of log that was output
 * @property {boolean} logged - Whether the log was output
 * @property {function} force - Forces the log to be output
 *
 * @example
 * ```typescript
 * const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0 });
 * logger.log('Hello, world!'); // Won't be logged because verbosity is 0
 * logger.log('Hello, world!').force(); // Will be logged
 * ```
 */
export class EasyCLILoggerResponse {
  constructor(
    private log: string,
    private type: SupportedLogType,
    private logged: boolean = false
  ) {}

  /**
   * Forces the log to be output
   * This is useful if you want to output a log even if the verbosity is too low
   */
  public force = () => {
    if (this.logged) return; // Already logged
    outputLog(this.type, this.log);
  };
}

/**
 * The properties for the logger
 * @param {EasyCLITheme} options.theme - The theme to use for the logger
 * @param {number} [options.verbosity=0] - The verbosity level to use (Default: 0)
 * @param {Record<SupportedLogType, number>} [options.verbosityThresholds] - The verbosity thresholds to use
 * @param {boolean} [options.timestamp=true] - Whether to include a timestamp in the execution logs (Default: true)
 *
 * @example
 * ```typescript
 * {
 *  theme: new EasyCLITheme(),
 *  verbosity?: 0,
 *  verbosityThresholds?: {
 *    error: 0,
 *    success: 0,
 *    warn: 1,
 *    log: 2,
 *    info: 3,
 *  },
 *  timestamp?: true,
 * }
 * ```
 */
export type EasyCLILoggerProps = {
  theme: EasyCLITheme;
  verbosity?: number;
  verbosityThresholds?: Record<SupportedLogType, number>;
  timestamp?: boolean;
};

/**
 * A logger for use with CLI applicatiions. This logger allows for logging with different verbosity levels and themes
 *
 * @class EasyCLILogger
 *
 * @example
 * ```typescript
 * const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0, timestamp: false });
 * logger.log('Hello, world!'); // Won't be logged because verbosity is 0
 * logger.log('Hello, world!').force(); // Will be logged due to force
 * logger.warn('This is a warning!'); // Won't be logged because verbosity is 0
 * logger.error('This is an error!') // Will be logged
 *
 * const logs = logger.getExecutionLogs();
 *
 * ```
 */
export class EasyCLILogger {
  private logs: string[] = [];
  private verbosity: number;
  private verbosityThresholds: Record<SupportedLogType, number>;
  private theme: EasyCLITheme;
  private timestamp: boolean;

  /**
   * Instantiates a new logger with the given theme and verbosity level.
   *
   * @param {EasyCLILoggerProps} options - The configuration props for the logger
   *
   * @example
   * ```typescript
   * {
   *  theme: new EasyCLITheme(),
   *  verbosity?: 0,
   *  verbosityThresholds?: {
   *    error: 0, // Always log errors
   *    success: 0, // Always log success
   *    warn: 1, // Log warnings when verbosity is 1 or higher
   *    log: 2, // Log logs when verbosity is 2 or higher
   *    info: 3, // Log info when verbosity is 3 or higher
   *   },
   * }
   * ```
   */
  constructor({
    theme,
    verbosity = 0,
    verbosityThresholds = {
      error: 0,
      success: 0,
      warn: 1,
      log: 2,
      info: 3,
    },
    timestamp = true,
  }: EasyCLILoggerProps) {
    this.theme = theme;
    this.verbosity = verbosity;
    this.verbosityThresholds = verbosityThresholds;
    this.timestamp = timestamp;
  }

  /**
   * Converts the arguments to strings, to be able to handle similar to how console.log works.
   *
   * @param args Converts the arguments to a string, removing circular references.
   * @returns The arguments as a string.
   */
  private convertArgArrayToString(args: unknown[]): string {
    return args
      .map(arg => {
        if (typeof arg === 'object') {
          // Removes circular references so it's safe to log
          const cleanObj = removeCircularReferences(arg as Object);
          return JSON.stringify(cleanObj, null, 2); // Pretty print
        }

        return `${arg}`;
      })
      .join(', ');
  }

  /**
   * Saves a log to the internal log array for use with the `getExecutionLogs` method.
   *
   * @param {SupportedLogType} type - The type of log to save
   * @param {string} message - The message to save
   */
  private saveLog(type: SupportedLogType, message: string) {
    const timestamp = this.timestamp ? ` ${new Date().toISOString()}:` : '';
    this.logs.push(`[${type.toLocaleUpperCase()}]${timestamp} ${message}`);
  }

  /**
   * An internal method to process a log, saving it and outputting it to the console if the verbosity is high enough.
   *
   * @param {SupportedLogType} type - The type of log to process
   * @param {unknown[]} args - The arguments to process
   * @returns {EasyCLILoggerResponse} - The response from the logger
   */
  private processLog(type: SupportedLogType, ...args: unknown[]) {
    const clean = this.convertArgArrayToString(args);
    this.saveLog(type, clean);

    const formatted = this.theme.formattedString(clean, type);

    const shouldLog = this.verbosity >= this.verbosityThresholds[type];

    if (shouldLog) {
      outputLog(type, formatted);
    }

    return new EasyCLILoggerResponse(formatted, type, shouldLog);
  }

  /**
   * Writes a log to the console depending on the verbosity level, using the log display options.
   *
   * @param {unknown[]} args - The arguments to log
   * @returns {EasyCLILoggerResponse} - The response from the logger
   *
   * @example
   * ```typescript
   * logger.log('Hello, world!');
   * ```
   */
  log(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('log', ...args);
  }

  /**
   *Writes a warning to the console depending on the verbosity level, using the log display options.
   *
   * @param {unknown[]} args - The arguments to log
   * @returns {EasyCLILoggerResponse} - The response from the logger
   * @example
   * ```typescript
   * logger.warn('Hello, world!');
   * ```
   */
  warn(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('warn', ...args);
  }

  /**
   * Writes an info message to the console depending on the verbosity level, using the log display options.
   *
   * @param {unknown[]} args - The arguments to log
   * @returns {EasyCLILoggerResponse} - The response from the logger
   *
   * @example
   * ```typescript
   * logger.info('Hello, world!');
   * ```
   */
  info(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('info', ...args);
  }

  /**
   * Writes an error to the console depending on the verbosity level, using the log display options.
   *
   * @param {unknown[]} args - The arguments to log
   * @returns {EasyCLILoggerResponse} - The response from the logger
   *
   * @example
   * ```typescript
   * logger.error('Hello, world!');
   * ```
   */
  error(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('error', ...args);
  }

  /**
   * Writes a success to the console depending on the verbosity level, using the log display options.
   *
   * @param {unknown[]} args - The arguments to log
   * @returns {EasyCLILoggerResponse} - The response from the logger
   *
   * @example
   * ```typescript
   * logger.success('Hello, world!');
   * ```
   */
  success(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('success', ...args);
  }

  /**
   * Takes a list of arguments and prints them to the console in the format provided.
   *
   * @param {(string | { text: string; format: DisplayOptions })[]} args - The arguments to print
   *
   * @example
   * ```typescript
   * // Prints Hello World! in the default format and then in the info format
   * logger.printFormattedString('Hello, world!', { text: 'Hello, world!', format: 'info' });
   * ```
   */
  printFormattedString(
    ...args: (
      | string
      | {
          text: string;
          format: DisplayOptions;
        }
    )[]
  ) {
    console.log(
      args
        .map(arg =>
          typeof arg === 'string'
            ? this.theme.formattedString(arg, 'default')
            : this.theme.formattedString(arg.text, arg.format)
        )
        .join('')
    );
  }

  /**
   * Gets the execution logs, including logs that were not output due to verbosity.
   * This is useful for debugging and logging to a file after execution.
   *
   * @returns {string[]} - The execution logs
   *
   * @example
   * ```typescript
   * const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0 });
   * logger.log('Hello, world!'); // Won't be logged because verbosity is 0
   * logger.log('Hello, world!').force(); // Will be logged
   * logger.warn('This is a warning!'); // Won't be logged because verbosity is 0
   * logger.error('This is an error!') // Will be logged
   *
   * const logs = logger.getExecutionLogs();
   *
   * console.log(logs);
   * // Will display, all logs, including those that weren't output.
   * ```
   */
  getExecutionLogs(): string[] {
    return this.logs;
  }
}
