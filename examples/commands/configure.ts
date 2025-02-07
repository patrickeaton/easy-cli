import {
  EasyCLI,
  EasyCLITheme,
  EasyCLIConfigFile,
  EasyCLIConfigureCommand,
} from 'easy-cli-framework';

// Create a new theme and config file instance
const theme = new EasyCLITheme();
const config = new EasyCLIConfigFile({
  filename: 'easy-cli-framework.config',
  extensions: ['json'],
});

/**
 * This command will configure the configuration file.
 * It will prompt the user for the env
 */
const configCommand = new EasyCLIConfigureCommand<
  { env: string },
  { verbose: number }
>(config, 'configure', {
  globalKeysToUse: ['verbose'],
  prompts: {
    env: {
      describe: 'What environent are you setting?',
      type: 'string',
      prompt: 'always',
      demandOption: true,
    },
  },
});

// Create a new EasyCLI instance
new EasyCLI<{
  verbose: number;
}>({
  executionName: 'easy-cli-framework',
})
  .setTheme(theme) // Set the theme
  .setConfigFile(config) // Set the config file
  .handleConfigFileFlag() // Have EasyCLI handle the config file flag addding --config to provide a custom config file
  .handleVerboseFlag() // Have EasyCLI handle the verbose flag as -v, -vv, -vvv OR --verbose 1, --verbose 2, --verbose 3
  .addCommand<{ env: string }>(configCommand) // Add the init command
  .execute(); // Execute the command
