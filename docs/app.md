[easy-cli](README.md) / app

# app

This module contains the EasyCLI class which is the main class for the EasyCLI library.

## Classes

### EasyCLI\<TGlobalParams\>

Defined in: [app.ts:45](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L45)

The EasyCLI class

 EasyCLI

#### Example

```typescript
const cli = new EasyCLI({
  executionName: 'my-cli',
});

const command = new EasyCLICommand(...);
cli.addCommand(command);

cli.execute();
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |

#### Constructors

##### new EasyCLI()

> **new EasyCLI**\<`TGlobalParams`\>(`config`?): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:61](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L61)

Creates a new EasyCLI instance

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`EasyCLIConfig`](app.md#easycliconfigtgloablparams)\<`TGlobalParams`\> | The configuration for the CLI |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

#### Methods

##### addCommand()

> **addCommand**\<`TParams`\>(`command`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:114](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L114)

Adds a command to the CLI

###### Type Parameters

| Type Parameter |
| ------ |
| `TParams` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | `EasyCLICommand`\<\{\}, `TGlobalParams`\> | The command to add |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### execute()

> **execute**(`callback`?): `Promise`\<`void`\>

Defined in: [app.ts:245](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L245)

Run the CLI with the provided arguments.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback`? | `null` \| (`app`) => `Argv` | `null` | A callback to add additional configuration to the CLI via yargs |

###### Returns

`Promise`\<`void`\>

##### handleConfigFileFlag()

> **handleConfigFileFlag**(`overrides`?): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:155](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L155)

Manage the configuration file flag for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | Any overrides for the configuration file flag |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### handleVerboseFlag()

> **handleVerboseFlag**(`defaultVerbosirty`?, `overrides`?): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:129](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L129)

Manage the verbose flag for the CLI

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `defaultVerbosirty`? | `number` | `0` | The default verbosity level |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | `...` | Any overrides for the verbose flag |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setCommands()

> **setCommands**(`commands`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:100](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L100)

Sets all the commands for the CLI, will overwrite any existing commands

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commands` | `EasyCLICommand`\<\{\}, `TGlobalParams`\>[] | The commands to add to the CLI |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setConfigFile()

> **setConfigFile**(`config`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:87](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L87)

Set the configuration file for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config.md#easycliconfigfile) | The configuration file to use |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setTheme()

> **setTheme**(`theme`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:75](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L75)

Set the theme for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

## Interfaces

### EasyCLIConfig\<TGloablParams\>

Defined in: [app.ts:20](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/app.ts#L20)

The configuration for the EasyCLI

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGloablParams` | The global params for the CLI EasyCLIConfig |

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="commands"></a> `commands?` | `EasyCLICommand`\<`any`, `TGloablParams`\>[] | The commands to add to the CLI |
| <a id="defaultcommand"></a> `defaultCommand?` | `string` | The default command to run if no command is provided (defaults to 'help') |
| <a id="executionname"></a> `executionName?` | `string` | The name to display in the help menu and error messages for the CLI |
| <a id="globalflags"></a> `globalFlags?` | `CommandOptionObject`\<\{\}, `TGloablParams`\> | The global flags to add to the CLI |
