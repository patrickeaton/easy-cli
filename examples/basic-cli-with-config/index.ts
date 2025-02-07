import {
  EasyCLI,
  EasyCLICommand,
  EasyCLITheme,
  EasyCLIConfigFile,
  EasyCLIConfigureCommand,
  EasyCLIInitCommand,
} from 'easy-cli-framework';

// Create a new EasyCLI instance
const app = new EasyCLI({
  executionName: 'easy-cli-framework',
});

// Create a new theme and config file instance
const theme = new EasyCLITheme();
const config = new EasyCLIConfigFile({
  filename: 'easy-cli-framework.config',
  extensions: ['json'],
});

app.setTheme(theme);
app.setConfigFile(config);

/**
 * This command will configure the configuration file.
 * It will prompt the user for the env
 */
const configCommand = new EasyCLIConfigureCommand(config, 'configure', {
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

/**
 * This command will initialize the configuration file.
 * It will prompt the user for the env and use the defaults for the region and name.
 */
const initCommand = new EasyCLIInitCommand(config, 'init', {
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

// An example command that will log the value of the `do` command, depending on the verbose flag.
const command = new EasyCLICommand(
  'do',
  (params, theme) => theme?.getLogger().log(params),
  {
    description: 'Set a config variable',
    // Args are the positional arguments that the command accepts.
    args: {
      key: {
        describe: 'What key(s) are you setting?',
        type: 'string',
      },
    },
    // Prompts are shown displayed to the user when the command is run.
    prompts: {
      value: {
        describe: 'the value to set',
        type: 'string',
        prompt: 'missing',
        demandOption: true,
      },
    },
  }
);

// Add the verbose flag to the global flags.
app.handleVerboseFlag();

// Register the commands
app.addCommand<{ key: string; value: string }>(command as any);
app.addCommand<{ env: string; verbose: number }>(configCommand as any);
app.addCommand<{ env: string; verbose: number; region: string; name: string }>(
  initCommand as any
);

// Override yargs wrap to null with a callback function.
app.execute((yargs: any) => yargs.wrap(null));
