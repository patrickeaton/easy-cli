[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLICommand

# Class: EasyCLICommand\<TParams, TGlobalParams\>

Defined in: [commands/index.ts:81](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L81)

A class that represents a command that can be run in the CLI.
This class is a wrapper around yargs commands that allows for prompts and flags to be added to the command.

## Example

```typescript
const command = new EasyCLICommand('do', (params, theme) => {
 theme?.getLogger().log(params);
}, {
  description: 'Set a config variable',
  aliases: [],
  args: {
    key: {
      describe: 'What key(s) are you setting?',
      type: 'string',
    },
  },
  prompts: {
    value: {
      describe: 'the value to set',
      type: 'string',
      prompt: 'missing',
      demandOption: true,
    },
  },
});
```

## Extended by

- [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)
- [`EasyCLIInitCommand`](EasyCLIInitCommand.md)

## Type Parameters

• **TParams** = `Record`\<`string`, `any`\>

• **TGlobalParams** = `Record`\<`string`, `any`\>

## Constructors

### new EasyCLICommand()

> **new EasyCLICommand**\<`TParams`, `TGlobalParams`\>(`name`, `handler`, `options`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:103](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L103)

#### Parameters

##### name

`string`

The name of the command.

##### handler

(`params`, `theme`) => `void`

The handler function that will be called when the command is run.

##### options

[`CommandSetupOptions`](../type-aliases/CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\>

Optional arguments for setting up the command.

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

## Methods

### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:187](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L187)

Adds an argument to the command.

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

The key of the argument to add.

##### config

[`CommandArgument`](../type-aliases/CommandArgument.md)

Configuration for the argument.
s

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

***

### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:161](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L161)

Adds a flag to the command.

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

The key of the flag to add.

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

Configuration for the flag.

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

***

### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:174](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L174)

Adds a prompt to the command.

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

The key of the prompt to add.

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

Configuration for the prompt.
s

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

***

### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/index.ts:354](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L354)

Converts the command to a yargs command.

#### Parameters

##### theme

The theme to use for formatting strings.

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

`CommandModule`

The yargs command.

***

### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:244](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L244)

Returns the default values for the command arguments and flags.

#### Returns

`TParams`

The default values for the command arguments and flags

***

### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L138)

#### Returns

`string`[]

The keys for all command arguments, flags and prompts.

***

### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:131](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L131)

#### Returns

`string`[]

The names of the command and its aliases.

***

### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:394](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L394)

Runs the command with the provided arguments.

#### Parameters

##### params

`TParams` & `TGlobalParams`

The parameters to run the command with.

##### theme

The theme to use for formatting strings.

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

`Promise`\<`void`\>

***

### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:149](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L149)

#### Returns

`boolean`

Whether the command should skip loading the configuration file.
