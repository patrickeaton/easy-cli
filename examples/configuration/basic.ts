import { EasyCLIConfigFile } from 'easy-cli-framework/config-files';

/**
 * How to use the EasyCLIConfigFile class
 * 
 * This focuses on using the EasyCLIConfigFile class to save and load configuration files without using EasyCLI.
 * This will search the cwd for the configuration file and by default uses a .js file and doesn't recurse.
 */
const main = async () => {
  const config = new EasyCLIConfigFile({
    filename: 'easy-cli-framework.config',
    path: 'config',
    extensions: [ 'js'],
  });

  // Save the configuration file
  await config.save({
    var1: 'value1',
    var2: 'value2',
  });

  // Load the configuration from the file
  const res = await config.load();
  console.log(res);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
