[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIInitCommand

# Class: EasyCLIInitCommand\<TParams, TGloablParams\>

Defined in: [commands/init.ts:50](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/init.ts#L50)

A command to add an init command to the CLI that will save the configuration

## Example

```typescript
new EasyCLIInitCommand(config, 'init', {
  globalKeysToUse: ['verbose'],
  prompts: {
    env: {
      describe: 'What environeent are you setting?',
      type: 'string',
      prompt: 'always',
      demandOption: true,
    },
  },
});
```

## Extends

- [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGloablParams`\>

## Type Parameters

• **TParams**

The params for the command

• **TGloablParams**

The global params for the CLI

## Constructors

### new EasyCLIInitCommand()

> **new EasyCLIInitCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`, `options`): [`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/init.ts:54](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/init.ts#L54)

#### Parameters

##### config

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

##### name

`string` = `'init'`

##### options

[`InitCommandOptions`](../type-aliases/InitCommandOptions.md)\<`TGloablParams`, `TParams`\> = `{}`

#### Returns

[`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

#### Overrides

[`EasyCLICommand`](EasyCLICommand.md).[`constructor`](EasyCLICommand.md#constructors)

## Methods

### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:187](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L187)

Adds an argument to the command.

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

The key of the argument to add.

##### config

[`CommandArgument`](../type-aliases/CommandArgument.md)

Configuration for the argument.
s

#### Returns

[`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addArgument`](EasyCLICommand.md#addargument)

***

### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:161](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L161)

Adds a flag to the command.

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

The key of the flag to add.

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

Configuration for the flag.

#### Returns

[`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addFlag`](EasyCLICommand.md#addflag)

***

### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:174](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L174)

Adds a prompt to the command.

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

The key of the prompt to add.

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

Configuration for the prompt.
s

#### Returns

[`EasyCLIInitCommand`](EasyCLIInitCommand.md)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addPrompt`](EasyCLICommand.md#addprompt)

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

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`convertToYargsCommand`](EasyCLICommand.md#converttoyargscommand)

***

### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:244](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L244)

Returns the default values for the command arguments and flags.

#### Returns

`TParams`

The default values for the command arguments and flags

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getDefaultArgv`](EasyCLICommand.md#getdefaultargv)

***

### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L138)

#### Returns

`string`[]

The keys for all command arguments, flags and prompts.

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getKeys`](EasyCLICommand.md#getkeys)

***

### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:131](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L131)

#### Returns

`string`[]

The names of the command and its aliases.

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getNames`](EasyCLICommand.md#getnames)

***

### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:394](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L394)

Runs the command with the provided arguments.

#### Parameters

##### params

`TParams` & `TGloablParams`

The parameters to run the command with.

##### theme

The theme to use for formatting strings.

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`run`](EasyCLICommand.md#run)

***

### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:149](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L149)

#### Returns

`boolean`

Whether the command should skip loading the configuration file.

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`skipConfigLoad`](EasyCLICommand.md#skipconfigload)
