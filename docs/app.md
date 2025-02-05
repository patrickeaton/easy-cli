[easy-cli](README.md) / app

# app

This module contains the EasyCLI class which is the main class for the EasyCLI library.

## Classes

### EasyCLI\<TGlobalParams\>

Defined in: [app.ts:45](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L45)

EasyCLI
The primary class for composing and running an EasyCLI application.
This class is responsible for managing the commands, global flags, and themes for the CLI.
It also handles the parsing of the arguments and executing the commands.

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

Defined in: [app.ts:61](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L61)

Creates a new EasyCLI instance

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`EasyCLIConfig`](app.md#easycliconfigtgloablparams)\<`TGlobalParams`\> | The configuration for the CLI |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

#### Methods

##### setTheme()

> **setTheme**(`theme`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:83](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L83)

Set the theme for the CLI, will overwrite any existing theme, and this theme will be passed to all commands unless overridden.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const theme = new EasyCLITheme();

const cli = new EasyCLI();
cli.setTheme(theme);
```

##### setConfigFile()

> **setConfigFile**(`config`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:105](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L105)

Set the configuration file for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config.md#easycliconfigfile) | The configuration file to use |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const configFile = new EasyCLIConfigFile({
 ...
});

const cli = new EasyCLI();
cli.setConfigFile(configFile);
```

##### setCommands()

> **setCommands**(`commands`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:124](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L124)

Dangerously sets all the commands for the CLI, overwriting any existing commands.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commands` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<\{\}, `TGlobalParams`\>[] | The commands to add to the CLI |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const command = new EasyCLICommand(...);
const cli = new EasyCLI();
cli.setCommands([command]);
```

##### addCommand()

> **addCommand**\<`TParams`\>(`command`): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:145](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L145)

Adds a command to the CLI

###### Type Parameters

| Type Parameter |
| ------ |
| `TParams` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<\{\}, `TGlobalParams`\> | The command to add |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const command = new EasyCLICommand(...);
const cli = new EasyCLI();
cli.addCommand(command);
```

##### handleVerboseFlag()

> **handleVerboseFlag**(`defaultVerbosity`?, `overrides`?): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:166](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L166)

Manage the verbose flag for the CLI

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `defaultVerbosity`? | `number` | `0` | The default verbosity level |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | `...` | Any overrides for the verbose flag |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const cli = new EasyCLI();
cli.handleVerboseFlag(0, { ... });
```

##### handleConfigFileFlag()

> **handleConfigFileFlag**(`overrides`?): [`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:204](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L204)

Manage the configuration file flag for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | Any overrides for the configuration file flag |

###### Returns

[`EasyCLI`](app.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const cli = new EasyCLI();

// This will add a `--config` flag to the CLI
cli.handleConfigFileFlag();

// This will add a `--my-config` flag to the CLI
cli.handleConfigFileFlag({ name: 'my-config' });
```

##### execute()

> **execute**(`callback`?): `Promise`\<`void`\>

Defined in: [app.ts:294](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L294)

Run the CLI with the provided arguments.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback`? | `null` \| (`app`) => `Argv` | `null` | A callback to add additional configuration to the CLI via yargs |

###### Returns

`Promise`\<`void`\>

## Interfaces

### EasyCLIConfig\<TGloablParams\>

Defined in: [app.ts:18](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L18)

EasyCLIConfig
The configuration for the EasyCLI

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGloablParams` | The global params for the CLI |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="executionname"></a> `executionName?` | `string` | The name to display in the help menu and error messages for the CLI | [app.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L19) |
| <a id="defaultcommand"></a> `defaultCommand?` | `string` | The default command to run if no command is provided (defaults to 'help') | [app.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L20) |
| <a id="commands"></a> `commands?` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`any`, `TGloablParams`\>[] | The commands to add to the CLI | [app.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L21) |
| <a id="globalflags"></a> `globalFlags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<\{\}, `TGloablParams`\> | The global flags to add to the CLI | [app.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L22) |
