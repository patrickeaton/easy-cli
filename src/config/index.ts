import path from 'path';
import os from 'os';
import appRootPath from 'app-root-path';
import fs, { mkdirSync } from 'fs';

type ValidExtensions = 'json' | 'js' | 'ts'; // | 'yaml' | 'yml';

type ConfigFileRecursionBehaviour =
  | 'no_recursion'
  | 'prefer_highest'
  | 'prefer_lowest'
  | 'merge_highest_first'
  | 'merge_lowest_first';

export type ConfigFileParams = {
  filename: string; // THe base filename to look for, without the extension.
  extensions: ValidExtensions[]; // What file extensions to look for, in order of preference
  recursion?: ConfigFileRecursionBehaviour; // How to handle recursive config files
  root?: 'cwd' | 'home' | 'app-root'; // Where to start looking for the config file
  path?: string; // The path to search for the config file
  requirePath?: boolean; // Whether or not to require the path to exist
  validator?: any; // TODO: ADD ZOD VALIDATOR
};

export class EasyCLIConfigFile {
  private filename: string;
  private extensions: ValidExtensions[];
  private recursion: ConfigFileRecursionBehaviour;
  private root: 'cwd' | 'home' | 'app-root';
  private path: string;

  constructor({
    filename,
    extensions = ['ts', 'js', 'json'],
    recursion = 'no_recursion',
    root = 'cwd',
    path = '',
  }: ConfigFileParams) {
    this.filename = filename;
    this.extensions = extensions;
    this.recursion = recursion;
    this.root = root;
    this.path = path;
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

    if (!configs.length) return {} as TConfig;

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

  public load<TConfig extends Record<string, any>>(): TConfig {
    return this.loadConfigurationFromPath<TConfig>(this.getBasePath());
  }

  public async save<TConfig extends Record<string, any>>(
    config: TConfig
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

    const resolvedPath = path.resolve(
      this.getBasePath(),
      this.path ?? '',
      `${this.filename}.${extension}`
    );

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
