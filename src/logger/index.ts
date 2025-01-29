import { DisplayOptions, EasyCLITheme } from '../themes/model';
import util from 'util';

export type SupportedLogType = 'log' | 'info' | 'warn' | 'error' | 'success';

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

const outputLog = (type: SupportedLogType, log: string) => {
  if (type === 'success') {
    console.log(log);
    return;
  }

  console[type](log);
};

// This is for optional chaining to force the log to be printed.
export class EasyCLILoggerResponse {
  constructor(
    private log: string,
    private type: SupportedLogType,
    private logged: boolean = false
  ) {}

  public force = () => {
    if (this.logged) return; // Already logged
    outputLog(this.type, this.log);
  };
}

export class EasyCLILogger {
  private logs: string[] = [];
  private verbosity: number;
  private verbosityThresholds: Record<SupportedLogType, number>;
  private theme: EasyCLITheme;
  private timestamp: boolean;

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
  }: {
    theme: EasyCLITheme;
    verbosity?: number;
    verbosityThresholds?: Record<SupportedLogType, number>;
    timestamp?: boolean;
  }) {
    this.theme = theme;
    this.verbosity = verbosity;
    this.verbosityThresholds = verbosityThresholds;
    this.timestamp = timestamp;
  }

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

  private saveLog(type: SupportedLogType, message: string) {
    const timestamp = this.timestamp ? ` ${new Date().toISOString()}:` : '';
    this.logs.push(`[${type.toLocaleUpperCase()}]${timestamp} ${message}`);
  }

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

  log(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('log', ...args);
  }

  warn(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('warn', ...args);
  }

  info(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('info', ...args);
  }

  error(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('error', ...args);
  }

  success(...args: unknown[]): EasyCLILoggerResponse {
    return this.processLog('success', ...args);
  }

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

  getExecutionLogs(): string[] {
    return this.logs;
  }
}
