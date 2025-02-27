# Examples

## EasyCLI

[Basic Implementation](./basic-cli-with-config/index.ts):
A basic implementation that utilizes EasyCLI to build a simple CLI tool with configuration and verbosity.

[Profiles Implementation](./cli-with-config-and-profiles):
A implementation that uses profiles inside the config file, so you can store the config for multiple profiles simultaneously.

[Complex Implementation (golf game)](./advanced-cli/index.ts):
A more complex implementation that runs a command line golf game and stores scores in a CSV file.

### Configuration Files

[Basic](./configuration/basic.ts):
An example for how to use the EasyCLIConfigFile with a basic configuration.

[EasyCLI](./configuration/easy-cli.ts):
An example for how to use the EasyCLIConfigFile with an EasyCLI app.

[Project Root](./configuration/project-root.ts):
An example for how to use the EasyCLIConfigFile with the project root.

[Home Root](./configuration/home-dir.ts):
An example for how to use the EasyCLIConfigFile with a file in the home directory.

[Recursive](./configuration/recursive.ts):
An example for how to use the EasyCLIConfigFile with recursive file loading.


## Themes

[Logger](./themes/logger.ts):
An example for how to use the EasyCLILogger component to write formatted text and utilize verbosity.

[Spinner](./themes/spinner.ts):
An example for using the ThemedSpinner component

[Progress (Simple)](./themes/progress-simple.ts):
An example for using the ThemedSimpleProgressBar component

[Progress (Status)](./themes/progress-status.ts):
An example for using the ThemedStatusProgressBar component. 

[Table](./themes/table.ts):
An example for using the ThemedTable component.


## Commands

[Command (EasyCLI)](./commands/command-easy-cli.ts):
An example for using a custom EasyCLICommand with EasyCLI

[Command (Yargs)](./commands/command-yargs.ts):
An example for using a custom EasyCLICommand with yargs directly

[Init Command](./commands/init.ts):
An example for using the EasyCLIInitCommand component

[Configure Command](./commands/configure.ts):
An example for using the EasyCLIConfigure Command component


## Prompts

[Text](./prompts/prompt-text.ts):
An example for using the promptTextInput helper function.

[Number](./prompts/prompt-number.ts):
An example for using the promptNumber helper function.

[Choice](./prompts/prompt-choice.ts):
An example for using the promptChoice helper function.

[Multiple Choice](./prompts/prompt-multiple-choice.ts):
An example for using the promptMultipleChoice helper function.

## Helpers

[CSV File](./csv/csv-file.ts):
An example for using the CsvFile class to interact with a CSV file.

[CSV Mapper](./csv/csv-mapper.ts):
An example for using the CSVFileMapper class to parse a CSV file into a custom format.
