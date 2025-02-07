# Easy CLI

_A complete framework for building awesome CLI applications in Javascript/Typescript without reinventing the wheel._

EasyCLI is designed to make building powerful CLI tools as easy as possible, whilst removing a lot of the legwork that comes with setting them up!

## Mission

There are a lot of powerful tools for building CLIs, but most applications need the same packages and boilerplate to set up.

This lib combines the power of yargs, with interactive prompts, themes, managing configuration files and various helpers.

It is designed to be used as a whole, but each component can be included independently if you just need one part of it for your tool!

# Components

[Read the complete documentation](https://github.com/patrickeaton/easy-cli/blob/main/docs/README.md) |
[See Examples](https://github.com/patrickeaton/easy-cli/blob/main/examples/README.md)

## EasyCLI

EasyCLI is designed as a total framework for building awesome command-line applications. This is the core class that can help manage a lot of common use-cases with minimal configuration! Handle interactive prompts, theming, saving configuration files, interacting with csv's and more with only a few lines of code.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/easy-cli.md)

#### Examples

[Basic](https://github.com/patrickeaton/easy-cli/blob/main/examples/basic-cli-with-config/index.ts) |
[Advanced](https://github.com/patrickeaton/easy-cli/blob/main/examples/advanced-cli/index.ts)

```typescript
import { EasyCLI, EasyCLICommand, EasyCLITheme } from 'easy-cli';

const theme = new EasyCLITheme();
const app = new EasyCLI('easy-cli', {
  // ...
});

const myCommand = new EasyCLICommand('do', ...);

app
.setTheme(theme)
.handleVerbosityFlag()
.addCommand(myCommand)
.execute();
```

## Themes

Themes are designed to provide, a way to make your app feel distinct and handle common use cases, like variable verbosity, ways to show loading states to your users (spinners and progress bars) and tables to render more data in a clean way.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/themes.md)

#### Examples

[Logger](https://github.com/patrickeaton/easy-cli/blob/main/examples/themes/logger.ts) |
[Spinner](https://github.com/patrickeaton/easy-cli/blob/main/examples/themes/spinner.ts) |
[Progress (Simple)](https://github.com/patrickeaton/easy-cli/blob/main/examples/themes/progress-simple.ts) |
[Progress (Status)](https://github.com/patrickeaton/easy-cli/blob/main/examples/themes/progress-status.ts) |
[Table](https://github.com/patrickeaton/easy-cli/blob/main/examples/themes/table.ts)

```typescript
import { EasyCLITheme } from 'easy-cli-framework';

const theme = new EasyCLITheme(
  0, // Set the verbosity level to 0
  {
    log: { color: '#F5F5F5' }, // Update the log color
    error: { color: '#FF5555', bold: true }, // Update the error color and make it bold
    custom: { color: '#55FF55' }, // Add a custom named display option
  }
);
const logger = theme.getLogger();
logger.log('Hello, world!'); // Won't display due to verbosity 0
logger.error('Hello, world!'); // Will display with verbosity 0
logger.log('Hello, world!').force(); // Will display due to force;
```

## Config Files

Easily manage configuration files for CLI applications. It supports globally storing config in your home directory, storing project level config in the project root or looking in the current path with recursion to find the nearest configuration file.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/config-files.md)

#### Examples

[Basic Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/basic.ts) |
[Usage With EasyCLI](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/easy-cli.ts) |
[Global Config (home dir)](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/home-dir.ts) |
[Project Config (project root)](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/project-root.ts) |
[Recursive Config Files](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/recursive.ts)

```typescript
import { EasyCLIConfigFile } from 'easy-cli/config';

const config = new EasyCLIConfigFile({
  filename: 'my-app.config',
  extensions: ['json', 'js', 'ts'],
  recursion: 'prefer_highest',
  root: 'cwd',
});

const configuration = config.load();
```

## Commands

Easy CLI Commands are built on top of `yargs` and `yargs-interactive` to be able to manage flags, args and add prompts! Prompts are interactive elements that request input from the user and can make the app easier to use! Prompts can also interact with existing flags, so you're only prompting inputs when the user hasn't already provided it.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/commands.md)

#### Examples

[Command (EasyCLI)](https://github.com/patrickeaton/easy-cli/blob/main/examples/commands/command-easy-cli.ts) |
[Command (Yargs)](https://github.com/patrickeaton/easy-cli/blob/main/examples/commands/command-yargs.ts) |
[Init Command](https://github.com/patrickeaton/easy-cli/blob/main/examples/commands/init.ts) |
[Configure Command](https://github.com/patrickeaton/easy-cli/blob/main/examples/commands/configure.ts)

Easily create managed commands that can handle interactive prompts. Can be used with EasyCLI or directly with yargs

```typescript
import { EasyCLICommand, EasyCLI } from 'easy-cli';
import yargs from 'yargs';

const command = new EasyCLICommand(
  'do',
  (params, theme) => {
    theme?.getLogger().log(params); // Log the values of the command
  },
  { description: 'Do something' }
);

// Register the command with EasyCLI to leverage other options
const easyCLI = new EasyCLI();
easyCLI.addCommand(command);

// Register the command with yargs directly if you don't need the other helpers.
yargs.command(command.convertToYargsCommand());
```

## Prompts

These are standalone Prompt functions that allow you to request input from a user, without needing it to be set in the command! They are great if you need the user to confirm something, add some additional data, or if there was invalid information passed in via the command, you can prompt the user to re-enter without ending the runtime.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/prompts.md)

#### Examples

[Text](https://github.com/patrickeaton/easy-cli/blob/main/examples/prompts/prompt-text.ts) |
[Number](https://github.com/patrickeaton/easy-cli/blob/main/examples/prompts/prompt-number.ts) |
[Choice](https://github.com/patrickeaton/easy-cli/blob/main/examples/prompts/prompt-choice.ts) |
[Multiple Choice](https://github.com/patrickeaton/easy-cli/blob/main/examples/prompts/prompt-multiple-choice.ts)

Some simple helper functions to prompt users for a input and validate the response.

```typescript
import {
  promptConfirm,
  promptChoice,
  promptMultipleChoice,
  promptNumber,
  promptText,
} from 'easy-cli/prompts';

// Prompt the user to select a choice
const choice = await promptChoice('Select a choice', ['A', 'B', 'C']);
console.log(choice);

// Prompt the user for confirmation.
const confirm = await promptConfirm('Are you sure?');
console.log(confirm);

// Prompt the user for multiple choices, with validation.
const choices = await promptMultipleChoice('Select a choice', ['A', 'B', 'C'], {
  defaultSelected: ['A', 'B'],
  validator: input => input.length > 0,
  validationErrorMessage: 'You must select at least one choice',
});

// Prompt the user to enter a number between 1 and 10
const number = await promptNumber('Enter a number between 1 and 10', {
  validator: input => input >= 1 && input <= 10,
  validationErrorMessage: 'Number must be between 1 and 10',
});
console.log(number);

// Prompt the user to enter some text
const text = await promptTextInput('Enter some text');
console.log(text);

// Prompt the user to enter a password
const password = await promptTextInput('Enter a password', {
  type: 'password',
});
console.log(password);

// Prompt the user to enter some text using an editor
const editor = await promptTextInput('Enter some text', { type: 'editor' });
console.log(editor);
```

## Helpers

These helper functions are designed to make life easiser when interacting with CSVs, these are a common format to use with a CLI to pass in bulk amounts of data but can be difficult to manage and transform to get the most out of them.

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/helpers.md)

#### Examples

[CSV File](https://github.com/patrickeaton/easy-cli/blob/main/examples/csv/csv-file.ts) |
[CSV Mapper](https://github.com/patrickeaton/easy-cli/blob/main/examples/csv/csv-mapper.ts)

```typescript
import { CSVMapper } from 'easy-cli/helpers';

const csvMapper = new CSVMapper({
  mappings: {
    username: {
      aliases: ['Username'],
      required: true,
      transform: value => value,
    },
    id: {
      aliases: ['Identifier'],
      required: true,
      transform: value => parseInt(value),
    },
    lastName: {
      aliases: [],
      required: true,
      transform: value => value,
    },
    firstName: {
      aliases: ['First name', 'First Name'],
      required: true,
      transform: value => value,
    },
    firstInital: {
      aliases: ['First name', 'First Name'],
      required: true,
      transform: value => value[0],
    },
  },
  interactive: true,
});

const parsed = await csvMapper.processFile('./example.csv');
```

## Awesome Packages You Should Support

This library wouldn't be possible without the awesome packages that already exist and are leveraged by EasyCLI

| Package                                                              |                                                   |
| -------------------------------------------------------------------- | ------------------------------------------------- |
| [yargs](https://www.npmjs.com/package/yargs)                         | The best tool for building CLIs                   |
| [yargs-interactive](https://www.npmjs.com/package/yargs-interactive) | Interactive Prompts for yarg CLIs                 |
| [cli-progress](https://www.npmjs.com/package/cli-progress)           | Displaying progress bars for feedback to the user |
| [ora](https://www.npmjs.com/package/ora)                             | Useful spinners for CLIs                          |
| [cli-table](https://www.npmjs.com/package/cli-table)                 | Display tables for a CLI                          |
| [chalk](https://www.npmjs.com/package/chalk)                         | themes and colourful text                         |
| [csv-parser](https://www.npmjs.com/package/csv-parser)               | Parsing CSV Files into JS Objects                 |
| [objects-to-csv](https://www.npmjs.com/package/objects-to-csv)       | Parsing JS Objects into CSV Files                 |
