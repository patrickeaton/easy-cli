[Easy CLI](README.md) / easy-cli

# easy-cli

A framework for building CLI applications that are robust and easy to maintain. Supports theming, configuration files, interactive prompts, and more.

## Classes

### EasyCLI\<TGlobalParams\>

Defined in: [app.ts:55](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L55)

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

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TGlobalParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The global params for the CLI |

#### Constructors

##### new EasyCLI()

> **new EasyCLI**\<`TGlobalParams`\>(`config`?): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:73](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L73)

Creates a new EasyCLI instance

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`EasyCLIConfig`](easy-cli.md#easycliconfigtglobalparams)\<`TGlobalParams`\> | The configuration for the CLI |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

#### Methods

##### setTheme()

> **setTheme**(`theme`): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L96)

Set the theme for the CLI, will overwrite any existing theme, and this theme will be passed to all commands unless overridden.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const theme = new EasyCLITheme();

const cli = new EasyCLI();
cli.setTheme(theme);
```

##### setConfigFile()

> **setConfigFile**(`config`): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:118](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L118)

Set the configuration file for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletconfig) | The configuration file to use |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

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

> **setCommands**(`commands`): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:137](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L137)

Dangerously sets all the commands for the CLI, overwriting any existing commands.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commands` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<\{\}, `TGlobalParams`\>[] | The commands to add to the CLI |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const command = new EasyCLICommand(...);
const cli = new EasyCLI();
cli.setCommands([command]);
```

##### addCommand()

> **addCommand**\<`TParams`\>(`command`): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:160](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L160)

Adds a command to the CLI

###### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The params that this command accepts. |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `command` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\> | The command to add |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const command = new EasyCLICommand(...);
const cli = new EasyCLI();
cli.addCommand(command);
```

##### handleVerboseFlag()

> **handleVerboseFlag**(`defaultVerbosity`?, `overrides`?): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:181](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L181)

Manage the verbose flag for the CLI

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `defaultVerbosity`? | `number` | `0` | The default verbosity level |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | `...` | Any overrides for the verbose flag |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

###### Example

```typescript
const cli = new EasyCLI();
cli.handleVerboseFlag(0, { ... });
```

##### handleConfigFileFlag()

> **handleConfigFileFlag**(`overrides`?): [`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

Defined in: [app.ts:219](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L219)

Manage the configuration file flag for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | Any overrides for the configuration file flag |

###### Returns

[`EasyCLI`](easy-cli.md#easyclitglobalparams)\<`TGlobalParams`\>

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

Defined in: [app.ts:317](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L317)

Run the CLI with the provided arguments.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback`? | `null` \| (`app`) => `Argv` | `null` | A callback to add additional configuration to the CLI via yargs |

###### Returns

`Promise`\<`void`\>

A promise that resolves when the CLI has finished executing

###### Example

```typescript
const cli = new EasyCLI(...);
cli.execute();
```

## Interfaces

### EasyCLIConfig\<TGlobalParams\>

Defined in: [app.ts:26](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L26)

EasyCLIConfig
The configuration for the EasyCLI

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TGlobalParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | An object representing the global params for the CLI |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="executionname"></a> `executionName?` | `string` | The name to display in the help menu and error messages for the CLI | [app.ts:29](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L29) |
| <a id="defaultcommand"></a> `defaultCommand?` | `string` | The default command to run if no command is provided (defaults to 'help') | [app.ts:30](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L30) |
| <a id="commands"></a> `commands?` | [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`any`, `TGlobalParams`\>[] | The commands to add to the CLI | [app.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L31) |
| <a id="globalflags"></a> `globalFlags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<\{\}, `TGlobalParams`\> | The global flags to add to the CLI | [app.ts:32](https://github.com/patrickeaton/easy-cli/blob/master/src/app.ts#L32) |
