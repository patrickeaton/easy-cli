import {
  EasyCLI,
  EasyCLITheme,
  EasyCLIConfigFile,
  EasyCLIInitCommand,
} from 'easy-cli';

// Create a new theme and config file instance
const theme = new EasyCLITheme();
const config = new EasyCLIConfigFile({
  filename: 'easy-cli.config',
  extensions: ['json'],
});

/**
 * This command will initialize the configuration file.
 * It will prompt the user for the env and use the defaults for the region and name.
 */
const initCommand = new EasyCLIInitCommand<
  { env: string; region: string; name: string },
  { verbose: number }
>(config, 'init', {
  globalKeysToUse: ['verbose'],
  failOnExists: true,
  defaults: {
    region: 'us-east-1',
    env: 'dev',
    name: 'my-app',
  },
  // Prompts are shown displayed to the user when the command is run.
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
  executionName: 'easy-cli',
})
  .setTheme(theme) // Set the theme
  .setConfigFile(config) // Set the config file
  .handleConfigFileFlag() // Have EasyCLI handle the config file flag addding --config to provide a custom config file
  .handleVerboseFlag() // Have EasyCLI handle the verbose flag as -v, -vv, -vvv OR --verbose 1, --verbose 2, --verbose 3
  .addCommand<{ env: string; region: string; name: string }>(initCommand) // Add the init command
  .execute(); // Execute the command
