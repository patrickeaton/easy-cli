import { EasyCLIConfigFile } from 'easy-cli/config-files';

/**
 * How to use the EasyCLIConfigFile class
 *
 * This focuses on using the EasyCLIConfigFile class to save and load configuration files stored in the project root directory.
 * This is useful if you want to use the same configuration without worrying about the location of the configuration file.
 */
const main = async () => {
  const config = new EasyCLIConfigFile({
    filename: 'config', // Set the filename to 'config'
    root: 'project_root', // Use the project root as the root directory
    path: '.easy-cli/', // Store the configuration file in the .easy-cli directory
    extensions: ['json'], // Use the JSON extension
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
