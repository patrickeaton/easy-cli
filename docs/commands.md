[easy-cli](README.md) / commands

# commands

This module contains the code for commands for the easy CLI Library

## Classes

### EasyCLIConfigureCommand\<TParams, TGloablParams\>

Defined in: [commands/configure.ts:46](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/configure.ts#L46)

A command to add a configure command to the CLI that will save the configuration

#### Example

```typescript
new EasyCLIConfigureCommand(config, 'configure', {
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

#### Extends

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGloablParams`\>

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGloablParams` | The global params for the CLI |

#### Constructors

##### new EasyCLIConfigureCommand()

> **new EasyCLIConfigureCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`?, `options`?): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/configure.ts:57](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/configure.ts#L57)

Creates a new configure command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config.md#easycliconfigfile) | `undefined` | The configuration file to use |
| `name`? | `string` | `'configure'` | The name of the command |
| `options`? | [`ConfigureCommandOptions`](commands.md#configurecommandoptionstglobalparams-tparams)\<`TGloablParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors-1)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:148](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L148)

###### Returns

`string`[]

The names of the command and its aliases.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames-1)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:155](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L155)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys-1)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:166](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L166)

###### Returns

`boolean`

Whether the command should skip loading the configuration file.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload-1)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:178](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L178)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addFlag`](commands.md#addflag-1)

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:191](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L191)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addPrompt`](commands.md#addprompt-1)

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:204](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L204)

Adds an argument to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. s |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addArgument`](commands.md#addargument-1)

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:261](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L261)

Returns the default values for the command arguments and flags.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv-1)

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/index.ts:371](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L371)

Converts the command to a yargs command.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`convertToYargsCommand`](commands.md#converttoyargscommand-1)

##### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:411](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L411)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGloablParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run-1)

***

### EasyCLICommand\<TParams, TGlobalParams\>

Defined in: [commands/index.ts:98](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L98)

A class that represents a command that can be run in the CLI.
This class is a wrapper around yargs commands that allows for prompts and flags to be added to the command.

#### Example

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

#### Extended by

- [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)
- [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `Record`\<`string`, `any`\> |
| `TGlobalParams` | `Record`\<`string`, `any`\> |

#### Constructors

##### new EasyCLICommand()

> **new EasyCLICommand**\<`TParams`, `TGlobalParams`\>(`name`, `handler`, `options`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:120](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L120)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the command. |
| `handler` | (`params`, `theme`) => `void` | The handler function that will be called when the command is run. |
| `options` | [`CommandSetupOptions`](commands.md#commandsetupoptionstglobalparams-tparams)\<`TGlobalParams`, `TParams`\> | Optional arguments for setting up the command. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:148](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L148)

###### Returns

`string`[]

The names of the command and its aliases.

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:155](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L155)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts.

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:166](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L166)

###### Returns

`boolean`

Whether the command should skip loading the configuration file.

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:178](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L178)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:191](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L191)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:204](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L204)

Adds an argument to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. s |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:261](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L261)

Returns the default values for the command arguments and flags.

###### Returns

`TParams`

The default values for the command arguments and flags

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/index.ts:371](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L371)

Converts the command to a yargs command.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

##### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:411](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L411)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGlobalParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

***

### EasyCLIInitCommand\<TParams, TGloablParams\>

Defined in: [commands/init.ts:55](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L55)

A command to add an init command to the CLI that will save the configuration

#### Example

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

#### Extends

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGloablParams`\>

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGloablParams` | The global params for the CLI |

#### Constructors

##### new EasyCLIInitCommand()

> **new EasyCLIInitCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`?, `options`?): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/init.ts:66](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L66)

Creates a new init command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config.md#easycliconfigfile) | `undefined` | The configuration file to use to save the config |
| `name`? | `string` | `'init'` | The name of the command |
| `options`? | [`InitCommandOptions`](commands.md#initcommandoptionstglobalparams-tparams)\<`TGloablParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors-1)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:148](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L148)

###### Returns

`string`[]

The names of the command and its aliases.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames-1)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:155](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L155)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys-1)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:166](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L166)

###### Returns

`boolean`

Whether the command should skip loading the configuration file.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload-1)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:178](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L178)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addFlag`](commands.md#addflag-1)

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:191](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L191)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addPrompt`](commands.md#addprompt-1)

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:204](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L204)

Adds an argument to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. s |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

This command instance for optional chaining

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addArgument`](commands.md#addargument-1)

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:261](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L261)

Returns the default values for the command arguments and flags.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv-1)

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/index.ts:371](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L371)

Converts the command to a yargs command.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`convertToYargsCommand`](commands.md#converttoyargscommand-1)

##### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:411](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L411)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGloablParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run-1)

## Interfaces

### ConfigureCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/configure.ts:18](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/configure.ts#L18)

Options for the configure command
 ConfigureCommandOptions

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="globalkeystouse"></a> `globalKeysToUse?` | `string`[] | What key(s) are you setting? | [commands/configure.ts:20](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/configure.ts#L20) |
| <a id="transformer"></a> `transformer?` | (`params`: `TGlobalParams` & `TParams`) => `any` | How to transform the params before saving | [commands/configure.ts:21](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/configure.ts#L21) |
| <a id="description"></a> `description?` | `string` | - | [commands/index.ts:62](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L62) |
| <a id="aliases"></a> `aliases?` | `string`[] | - | [commands/index.ts:63](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L63) |
| <a id="flags"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:64](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L64) |
| <a id="prompts"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:65](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L65) |
| <a id="args"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:66](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L66) |
| <a id="skipconfig"></a> `skipConfig?` | `boolean` | - | [commands/index.ts:67](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L67) |

***

### CommandOption

Defined in: [commands/index.ts:15](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L15)

A command positional option that can be passed to a command with the option to prompt the user for the value.
 CommandOption

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prompt"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/index.ts:16](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L16) |

***

### CommandArgument

Defined in: [commands/index.ts:26](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L26)

A command argument (flag) that can be passed to a command with the option to prompt the user for the value.
 CommandArgument

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prompt-1"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/index.ts:27](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L27) |

***

### CommandOptionObject\<TParams, TGlobalParams\>

Defined in: [commands/index.ts:39](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L39)

A record of flags/postional options for a command.
 CommandOptionObject

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGlobalParams` | The global params for the CLI |

#### Indexable

\[`key`: `string`\]: [`CommandOption`](commands.md#commandoption) \| [`CommandArgument`](commands.md#commandargument)

***

### CommandSetupOptions\<TGlobalParams, TParams\>

Defined in: [commands/index.ts:61](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L61)

Optional Arguments for setting up a command.

 CommandSetupOptions

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description-1"></a> `description?` | `string` | The description of the command | [commands/index.ts:62](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L62) |
| <a id="aliases-1"></a> `aliases?` | `string`[] | The aliases for the command | [commands/index.ts:63](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L63) |
| <a id="flags-1"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The flags for the command | [commands/index.ts:64](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L64) |
| <a id="prompts-1"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The prompts for the command | [commands/index.ts:65](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L65) |
| <a id="args-1"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The positional arguments for the command | [commands/index.ts:66](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L66) |
| <a id="skipconfig-1"></a> `skipConfig?` | `boolean` | Should the command skip loading the configuration file | [commands/index.ts:67](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L67) |

***

### InitCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/init.ts:21](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L21)

Options for the init command
 InitCommandOptions

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description-2"></a> `description?` | `string` | - | [commands/index.ts:62](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L62) |
| <a id="aliases-2"></a> `aliases?` | `string`[] | - | [commands/index.ts:63](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L63) |
| <a id="flags-2"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:64](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L64) |
| <a id="prompts-2"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:65](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L65) |
| <a id="args-2"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/index.ts:66](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L66) |
| <a id="skipconfig-2"></a> `skipConfig?` | `boolean` | - | [commands/index.ts:67](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/index.ts#L67) |
| <a id="failonexists"></a> `failOnExists?` | `boolean` | Should the command fail if the config file already exists? | [commands/init.ts:25](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L25) |
| <a id="globalkeystouse-1"></a> `globalKeysToUse?` | `string`[] | What key(s) are you setting? | [commands/init.ts:26](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L26) |
| <a id="defaults"></a> `defaults?` | `Partial`\<`TGlobalParams` & `TParams`\> | The default values to use | [commands/init.ts:27](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L27) |
| <a id="transformer-1"></a> `transformer?` | (`params`: `TGlobalParams` & `TParams`) => `any` | How to transform the params before saving | [commands/init.ts:28](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L28) |
| <a id="configflag"></a> `configFlag?` | `string` | The name of the variable to use for the config file | [commands/init.ts:29](https://github.com/patrickeaton/easy-cli/blob/940567b21a2eafb91ed7a050d6cf45f5643ce4b0/src/commands/init.ts#L29) |
