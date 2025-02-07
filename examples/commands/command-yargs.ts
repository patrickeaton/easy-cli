import { EasyCLICommand, EasyCLITheme } from 'easy-cli-framework';
import yargs from 'yargs';

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

// Run the command using yargs as the CLI instead of EasyCLI.
yargs
  .command(
    command.convertToYargsCommand(
      true, // Is this the default command?
      theme // The theme to use
    )
  )
  .parse();
