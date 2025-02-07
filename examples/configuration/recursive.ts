import { EasyCLIConfigFile } from 'easy-cli-framework/config-files';

/**
 * How to use the EasyCLIConfigFile class
 *
 * This focuses on using the EasyCLIConfigFile class to save and load configuration files without using EasyCLI.
 * This will search the cwd for the configuration file and by default uses a .js file and recursively merges the files up to the root directory.
 */
const main = async () => {
  const config = new EasyCLIConfigFile({
    filename: 'easy-cli-framework.config',
    recursion: 'merge_lowest_first', // This will merge the config files in the order they are found with the lowest priority first
    path: 'config',
    extensions: ['js'],
  });

  await config.save({
    var1: 'value1',
    var2: 'value2',
  });

  const res = await config.load();
  console.log(res);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
