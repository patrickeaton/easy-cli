# Easy CLI

_A complete framework for building awesome CLI applications in Javascript/Typescript without reinventing the wheel._

EasyCLI is designed to make building powerful CLI tools as easy as possible, whilst removing a lot of the legwork that comes with setting them up!

## Mission

There are a lot of powerful tools for building CLIs, but I often found that I was consistently reusing the same packages and writing the same code multiple times.

This combines the power of yargs, with interactive prompts, theming, managing configuration files and various helpers.

## Components

[Read the complete documentation](https://github.com/patrickeaton/easy-cli/blob/main/docs/README.md) |
[See Examples](https://github.com/patrickeaton/easy-cli/blob/main/examples/README.md)

### EasyCLI

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/easy-cli.md) |
[Basic Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/basic-cli-with-config/index.ts) |
[Advanced Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/golf/index.ts)

The core framework for building CLI applications that are robust and easy to maintain.

Supports theming, configuration files, interactive prompts, and more.

```typescript
import { EasyCLI, EasyCLITheme } from 'easy-cli';

const theme = new EasyCLITheme();
const app = new EasyCLI('easy-cli', {
  // ...
});

app.setTheme(theme).handleVerbosityFlag().addCommand(myCommand).execute();
```

---

### Theming

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/themes.md)

Support for theming for command line applications, it includes support for verbosity, themed text display, spinners, and progress bars.

```typescript
import { EasyCLITheme } from 'easy-cli';

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

---

### Config Files

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/config-files.md) |
[Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/basic.ts) |
[Usage With EasyCLI](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/advanced.ts)

Easily manage configuration files for CLI applications, supports recursion, different root paths and transformation.

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

---

### Prompts

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/prompts.md) |
[Basic Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/basic.ts) |
[Advanced Usage](https://github.com/patrickeaton/easy-cli/blob/main/examples/configuration/basic.ts)

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

---

### Helpers

Helper functions that are useful for CLI's. ie. Managing CSVs

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/helpers.md)

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

---

### Commands

[Docs](https://github.com/patrickeaton/easy-cli/blob/main/docs/commands.md)

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

## Packages And Shoutouts

This library wouldn't be possible without the awesome packages that already exist and are leveraged by EasyCLI

| package                                                              | usage                                             |
| -------------------------------------------------------------------- | ------------------------------------------------- |
| [yargs](https://www.npmjs.com/package/yargs)                         | The best tool for building CLIs                   |
| [yargs-interactive](https://www.npmjs.com/package/yargs-interactive) | Interactive Prompts for yarg CLIs                 |
| [cli-progress](https://www.npmjs.com/package/cli-progress)           | Displaying progress bars for feedback to the user |
| [ora](https://www.npmjs.com/package/ora)                             | Useful spinners for CLIs                          |
| [cli-table](https://www.npmjs.com/package/cli-table)                 | Display tables for a CLI                          |
| [chalk](https://www.npmjs.com/package/chalk)                         | Theming and colourful text                        |
| [csv-parser](https://www.npmjs.com/package/csv-parser)               | Parsing CSV Files into JS Objects                 |
