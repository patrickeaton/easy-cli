import { EasyCLI, EasyCLICommand, EasyCLITheme } from 'easy-cli-framework';

// Create a new theme
const theme = new EasyCLITheme();

// An example command that will log the value of the `do` command, depending on the verbose flag. log is only shown if verbose is greater than 1.s
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

// Create a new EasyCLI instance
new EasyCLI({
  executionName: 'easy-cli-framework',
})
  .setTheme(theme) // Set the theme
  .handleVerboseFlag() // Have EasyCLI handle the verbose flag as -v, -vv, -vvv OR --verbose 1, --verbose 2, --verbose 3
  .addCommand(command) // Add the custom command
  .execute((yargs: any) => yargs.wrap(null)); // Execute the app, with a callback to interact with yargs.
