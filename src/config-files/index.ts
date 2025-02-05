/** @packageDocumentation Easily manage configuration files for CLI applications, supports recursion, different root paths and transformation. */

import path from 'path';
import os from 'os';
import appRootPath from 'app-root-path';
import fs, { mkdirSync } from 'fs';

/**
 * The valid file extensions for configuration files.
 *
 * Supports JSON, JavaScript, and TypeScript files.
 *
 * TODO: Add support for YAML files.
 *
 * @typedef {'json' | 'js' | 'ts'} ValidExtensions
 */
export type ValidExtensions = 'json' | 'js' | 'ts'; // | 'yaml' | 'yml';

/**
 * The behaviour to use when handling recursive configuration files.
 *
 * @typedef {'no_recursion' | 'prefer_highest' | 'prefer_lowest' | 'merge_highest_first' | 'merge_lowest_first'} ConfigFileRecursionBehaviour
 *
 * @example
 * no_recursion - Only look in the current directory for the configuration file.
 * prefer_highest - Look in the current directory and all parent directories, and use the configuration file found in the highest directory.
 * prefer_lowest - Look in the current directory and all parent directories, and use the configuration file found in the lowest directory.
 * merge_highest_first - Look in the current directory and all parent directories, and merge the configuration files found in the highest directories first.
 * merge_lowest_first - Look in the current directory and all parent directories, and merge the configuration files found in the lowest directories first.
 */
export type ConfigFileRecursionBehaviour =
  | 'no_recursion'
  | 'prefer_highest'
  | 'prefer_lowest'
  | 'merge_highest_first'
  | 'merge_lowest_first';

/**
 * The root to use when looking for configuration files.
 * @typedef {'cwd' | 'home' | 'app-root'} ConfigFileRoot
 *
 * @example
 * cwd - Look in the current working directory for the configuration file.
 * home - Look in the user's home directory for the configuration file.
 * app-root - Look in the root directory of the application for the configuration file.
 *
 */
export type ConfigFileRoot = 'cwd' | 'home' | 'app-root';

/**
 * The parameters to use when loading a configuration file.
 *
 * @interface {Object} ConfigFileParams
 *
 * @property {string} filename The base filename to look for, without the extension.
 * @property {ValidExtensions[]} extensions What file extensions to look for, in order of preference
 * @property {ConfigFileRecursionBehaviour} [recursion] How to handle recursive config files
 * @property {ConfigFileRoot} [root] Where to start looking for the config file
 * @property {string} [path] The path to search for the config file
 * @property {boolean} [failOnMissing] Whether or not to fail if the file is missing
 *
 * @example
 * ```typescript
 * {
 *  filename: 'config',
 *  extensions: ['json', 'js', 'ts'],
 *  recursion: 'prefer_highest',
 *  root: 'cwd',
 *  path: '',
 *  failOnMissing: false,
 * }
 * ```
 */
export type ConfigFileParams = {
  filename: string; // THe base filename to look for, without the extension.
  extensions: ValidExtensions[]; // What file extensions to look for, in order of preference (Default: ['ts', 'js', 'json'])
  recursion?: ConfigFileRecursionBehaviour; // How to handle recursive config files (Default: 'no_recursion')
  root?: ConfigFileRoot; // Where to start looking for the config file (Default: 'cwd')
  path?: string; // The path to search for the config file from the basepath (Default: '')
  failOnMissing?: boolean; // Whether or not to fail if the file is missing
  // validator?: any; // TODO: ADD ZOD VALIDATOR
};

/**
 * @class EasyCLIConfigFile
 *
 * A class to make it easier to load configuration files in a consistent way, with support for different file extensions, recursion, and root directories.
 *
 * @template TConfig A type representing the configuration object that will be managed by the configuration file.
 *
 * @example
 * ```typescript
 * const config = new EasyCLIConfigFile({
 *   filename: 'config',
 *   extensions: ['json', 'js', 'ts'],
 *   recursion: 'prefer_highest',
 *   root: 'cwd',
 * });
 *
 * const configuration = config.load();
 * ```
 */
export class EasyCLIConfigFile<
  TConfig extends Record<string, any> = Record<string, any>
> {
  private filename: string;
  private extensions: ValidExtensions[];
  private recursion: ConfigFileRecursionBehaviour;
  private root: ConfigFileRoot;
  private path: string;
  private failOnMissing: boolean;

  /**
   * Create a new configuration file handler instance.
   *
   * @param {ConfigFileParams} params The parameters to use when loading the configuration file
   *
   * @returns {EasyCLIConfigFile} The EasyCLIConfigFile instance
   */
  constructor({
    filename,
    extensions = ['ts', 'js', 'json'],
    recursion = 'no_recursion',
    root = 'cwd',
    path = '',
    failOnMissing = false,
  }: ConfigFileParams) {
    this.filename = filename;
    this.extensions = extensions;
    this.recursion = recursion;
    this.root = root;
    this.path = path;
    this.failOnMissing = failOnMissing;
  }

  /**
   * Merge a list of configuration objects into a single object.
   *
   * @param {TConfig[]} configs A sorted list of configuration objects to merge
   * 
   * @returns {TConfig} The merged configuration object
   */
  private mergeConfigurationSets<TConfig extends Record<string, any>>(
    configs: TConfig[]
  ): TConfig {
    return configs.reduce((acc, config) => {
      return {
        ...acc,
        ...config,
      };
    }, {} as TConfig);
  }

  /**
   * Check the current directory for a configuration file with the given filename and extensions.
   *
   * @param dir The directory to check for the configuration file
   *
   * @returns {TConfig | null} The configuration object if found, or null if not found
   */
  private processConfigurationFileInDir(dir: string): TConfig | null {
    for (const extension of this.extensions) {
      try {
        const resolvedPath = path.resolve(
          dir,
          this.path ?? '',
          `${this.filename}.${extension}`
        );

        if (!fs.existsSync(resolvedPath)) continue;

        switch (extension) {
          case 'json':
          case 'js':
          case 'ts':
            return require(resolvedPath);
          // TODO: Add support for yaml and yml
          default:
            throw new Error('Unsupported file extension');
        }
      } catch (e) {
        continue;
      }
    }

    return null;
  }

  /**
   * Loads all configuration objects found in the given directory and all parent directories depending on the recursion behaviour.
   *
   * @param {string} dir The directory to start looking in
   * @param {boolean} abortOnFirst Only return the first configuration found
   *
   * @returns {TConfig[]} A list of configuration objects found in the directories
   */
  private loadConfigurationTree(
    dir: string,
    abortOnFirst: boolean = false
  ): TConfig[] {
    const configs: TConfig[] = [];
    let currentDir = dir;

    while (true) {
      const config = this.processConfigurationFileInDir(currentDir);

      if (config) {
        configs.push(config as TConfig);
      }

      // If we are aborting on the first config, once we've found one, we can stop.
      if (abortOnFirst && configs.length) {
        break;
      }

      if (currentDir === appRootPath.toString()) {
        break;
      }

      currentDir = path.resolve(currentDir, '..');
    }

    return configs;
  }

  /**
   * Load a configuration object from the given path.
   *
   * @param path The path to load the configuration from
   * 
   * @returns {TConfig} The loaded configuration object
   */
  private loadConfigurationFromPath(path: string): TConfig {
    const { filename, recursion = 'prefer_lowest' } = this;

    if (!filename)
      throw new Error('No filename provided in config file params');

    // When there is no recursion, we only need to look in the current directory.
    if (recursion === 'no_recursion') {
      return (this.processConfigurationFileInDir(path) ?? {}) as TConfig;
    }

    // If we are recursing, we need to look in the current directory and all parent directories.
    const configs = this.loadConfigurationTree(
      path,
      recursion === 'prefer_lowest'
    );

    if (!configs.length) {
      if (this.failOnMissing) throw new Error('No configuration file found');
      return {} as TConfig;
    }

    switch (recursion) {
      case 'prefer_lowest':
        return configs.shift() as TConfig;
      case 'prefer_highest':
        return configs.pop() as TConfig;
      case 'merge_highest_first':
        return this.mergeConfigurationSets(configs) as TConfig;
      case 'merge_lowest_first':
        return this.mergeConfigurationSets(configs.reverse()) as TConfig;
    }

    return {} as TConfig;
  }

  /**
   * Generate the base path to use when looking for configuration files.
   *
   * @returns {string} The base path to use when looking for configuration files
   */
  private getBasePath(): string {
    switch (this.root) {
      case 'home':
        return os.homedir();
      case 'app-root':
        return appRootPath.toString();
      case 'cwd':
      default:
        return process.cwd();
    }
  }

  /**
   * Find the configuration file to use.
   *
   * @param {string} filePath An optional file path to use instead of the default otherwise it will scan using the given rules.
   *
   * @returns {string} The path to the configuration file
   */
  private findConfigurationFile(filePath?: string): string {
    if (filePath) {
      return filePath;
    }

    return path.resolve(
      this.getBasePath(),
      this.path ?? '',
      `${this.filename}.${this.extensions[0]}`
    );
  }

  /**
   * Load a configuration file from a specific path instead of using the default path.
   *
   * @param {string} path A specific path to load the configuration from
   * @returns {TConfig} The configuration object loaded from the path
   */
  private loadSpecificConfiguration(path: string): TConfig {
    if (fs.existsSync(path)) {
      return require(path);
    }

    if (this.failOnMissing) {
      throw new Error(`Configuration file not found at ${path}`);
    }

    return {} as TConfig;
  }

  /**
   * Load a configuration file from the given rules. Can be overridden by providing a path.
   *
   * @param {string} path An optional path override to use when loading the configuration file, otherwise it will use the default path.
   * @returns {TConfig} The loaded configuration object
   *
   * @example
   * ```typescript
   * const config = new EasyCLIConfigFile({
   *  filename: 'config',
   *  extensions: ['json', 'js', 'ts'],
   *  recursion: 'prefer_highest',
   *  root: 'cwd',
   * });
   *
   * // Loads the configuration file from the default path, finding the highest configuration file.
   * const configuration = config.load();
   *
   * // Loads the configuration file from the given path. Does not use the default path.
   * const configuration = config.load('path/to/config.json');
   * ```
   */
  public load(path?: string): TConfig {
    if (path) return this.loadSpecificConfiguration(path);

    return this.loadConfigurationFromPath(this.getBasePath());
  }

  /**
   * Check if a configuration file exists.
   *
   * @param {string} filePath An optional file path to use instead of the default otherwise it will scan using the given rules.
   * @returns {boolean} Whether or not the configuration file exists
   *
   * @example
   * ```typescript
   * const config = new EasyCLIConfigFile({
   *  filename: 'config',
   *  extensions: ['json', 'js', 'ts'],
   *  recursion: 'prefer_highest',
   * root: 'cwd',
   * });
   *
   * // Check if the configuration file exists
   * const exists = config.fileExists();
   * console.log(exists);
   *
   * // Check if a specific configuration file exists
   * const exists = config.fileExists('path/to/config.json');
   * console.log(exists);
   * ```
   */
  public fileExists(filePath?: string): boolean {
    const resolvedPath = this.findConfigurationFile(filePath);

    return fs.existsSync(resolvedPath);
  }

  /**
   * Save a configuration object to a file, using the given rules or an optional file path.
   *
   * @param {TConfig} config The configuration object to save
   * @param {string} filePath The file path to save the configuration to
   *
   * @returns {Promise<void>}
   */
  public async save(
    config: TConfig,
    filePath?: string
  ): Promise<void> {
    if (!this.filename)
      throw new Error('No filename provided in config file params');

    const extension = this.extensions[0];

    if (this.path) {
      // Ensure the directory exists
      await mkdirSync(path.resolve(this.getBasePath(), this.path), {
        recursive: true,
      });
    }

    const resolvedPath = this.findConfigurationFile(filePath);

    switch (extension) {
      case 'json':
        await fs.writeFileSync(resolvedPath, JSON.stringify(config, null, 2));
        break;
      case 'js':
      case 'ts':
        await fs.writeFileSync(
          resolvedPath,
          `module.exports = ${JSON.stringify(config, null, 2)};`
        );
        break;
    }
  }
}
