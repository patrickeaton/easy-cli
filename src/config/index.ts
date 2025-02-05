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
 * The parameters to use when loading a configuration file.
 *
 * @interface {Object} ConfigFileParams
 *
 * @property {string} filename The base filename to look for, without the extension.
 * @property {ValidExtensions[]} extensions What file extensions to look for, in order of preference
 * @property {ConfigFileRecursionBehaviour} [recursion] How to handle recursive config files
 * @property {'cwd' | 'home' | 'app-root'} [root] Where to start looking for the config file
 * @property {string} [path] The path to search for the config file
 * @property {boolean} [requirePath] Whether or not to require the path to exist
 * @property {boolean} [failOnMissing] Whether or not to fail if the file is missing
 */
export type ConfigFileParams = {
  filename: string; // THe base filename to look for, without the extension.
  extensions: ValidExtensions[]; // What file extensions to look for, in order of preference
  recursion?: ConfigFileRecursionBehaviour; // How to handle recursive config files
  root?: 'cwd' | 'home' | 'app-root'; // Where to start looking for the config file
  path?: string; // The path to search for the config file
  requirePath?: boolean; // Whether or not to require the path to exist
  failOnMissing?: boolean; // Whether or not to fail if the file is missing
  // validator?: any; // TODO: ADD ZOD VALIDATOR
};

/**
 * A class to handle loading and saving configuration files.
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
export class EasyCLIConfigFile {
  private filename: string;
  private extensions: ValidExtensions[];
  private recursion: ConfigFileRecursionBehaviour;
  private root: 'cwd' | 'home' | 'app-root';
  private path: string;
  private failOnMissing: boolean;

  /**
   * Create a new configuration file handler.
   *
   * @param {ConfigFileParams} params The parameters to use when loading the configuration file
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
   * @param configs A sorted list of configuration objects to merge
   * @returns The merged configuration object
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
   * @param cwd The current working directory
   * @param filename The base filename to look for, without the extension.
   * @param extensions The file extensions to look for, in order of preference
   * @returns The configuration object if found, or null if not found
   */
  private processConfigurationFileInDir<TConfig extends Record<string, any>>(
    dir: string
  ): TConfig | null {
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
   * Load a configuration file from the current directory and all parent directories up to the root.
   *
   * @param cwd The current working directory
   * @param filename The base filename to look for, without the extension.
   * @param extensions A list of file extensions to look for, in order of preference
   * @param abortOnFirst Only return the first configuration found
   * @returns A list of configuration objects found in the directories
   */
  private loadConfigurationTree<TConfig extends Record<string, any>>(
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
   * @returns The loaded configuration object
   */
  private loadConfigurationFromPath<TConfig extends Record<string, any>>(
    path: string
  ): TConfig {
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
   * @returns The base path to use when looking for configuration files
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
   * @param filePath An optional file path to use instead of the default otherwise it will scan using the given rules.s
   * @returns
   */
  private findConfigurationFile(filePath: string | null = null): string {
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
   * Load a configuration file for the given path.
   *
   * @param path An optional path override to use when loading the configuration file, otherwise it will use the default path.
   * @returns
   */
  public load<TConfig extends Record<string, any>>(
    path: string | null = null
  ): TConfig {
    if (path) return this.loadSpecificConfiguration<TConfig>(path);

    return this.loadConfigurationFromPath<TConfig>(this.getBasePath());
  }

  /**
   * Load a configuration file from a specific path instead of using the default path.s
   *
   * @param path A specific path to load the configuration from
   * @returns The configuration object loaded from the path
   */
  private loadSpecificConfiguration<TConfig extends Record<string, any>>(
    path: string
  ) {
    if (fs.existsSync(path)) {
      return require(path);
    }

    if (this.failOnMissing) {
      throw new Error(`Configuration file not found at ${path}`);
    }

    return {} as TConfig;
  }

  /**
   * Check if a configuration file exists.
   *
   * @param filePath An optional file path to use instead of the default otherwise it will scan using the given rules.
   * @returns boolean Whether or not the configuration file exists
   */
  public fileExists(filePath: string | null = null): boolean {
    const resolvedPath = this.findConfigurationFile(filePath);

    return fs.existsSync(resolvedPath);
  }

  /**
   * Save a configuration object to a file.
   *
   * @param config The configuration object to save
   * @param filePath The file path to save the configuration to
   */
  public async save<TConfig extends Record<string, any>>(
    config: TConfig,
    filePath: string | null = null
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
