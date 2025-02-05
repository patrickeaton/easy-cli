[**easy-cli**](README.md)

***

[easy-cli](README.md) / class

# class

## Classes

### EasyCLI\<TGlobalParams\>

Defined in: class.ts:43

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

```ts
new EasyCLI<TGlobalParams>(config?: EasyCLIConfig<TGlobalParams>): EasyCLI<TGlobalParams>
```

Defined in: class.ts:59

Creates a new EasyCLI instance

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | [`EasyCLIConfig`](class.md#easycliconfigtgloablparams)\<`TGlobalParams`\> | The configuration for the CLI |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

#### Methods

##### addCommand()

```ts
addCommand<TParams>(command: EasyCLICommand<{}, TGlobalParams>): EasyCLI<TGlobalParams>
```

Defined in: class.ts:112

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

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### execute()

```ts
execute(callback?: null | (app: Argv) => Argv): Promise<void>
```

Defined in: class.ts:243

Run the CLI with the provided arguments.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `callback`? | `null` \| (`app`: `Argv`) => `Argv` | `null` | A callback to add additional configuration to the CLI via yargs |

###### Returns

`Promise`\<`void`\>

##### handleConfigFileFlag()

```ts
handleConfigFileFlag(overrides?: Partial<Options & object & object>): EasyCLI<TGlobalParams>
```

Defined in: class.ts:153

Manage the configuration file flag for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | Any overrides for the configuration file flag |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### handleVerboseFlag()

```ts
handleVerboseFlag(defaultVerbosirty?: number, overrides?: Partial<Options & object & object>): EasyCLI<TGlobalParams>
```

Defined in: class.ts:127

Manage the verbose flag for the CLI

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `defaultVerbosirty`? | `number` | `0` | The default verbosity level |
| `overrides`? | `Partial`\<`Options` & `object` & `object`\> | `...` | Any overrides for the verbose flag |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setCommands()

```ts
setCommands(commands: EasyCLICommand<{}, TGlobalParams>[]): EasyCLI<TGlobalParams>
```

Defined in: class.ts:98

Sets all the commands for the CLI, will overwrite any existing commands

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commands` | `EasyCLICommand`\<\{\}, `TGlobalParams`\>[] | The commands to add to the CLI |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setConfigFile()

```ts
setConfigFile(config: EasyCLIConfigFile): EasyCLI<TGlobalParams>
```

Defined in: class.ts:85

Set the configuration file for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config.md#easycliconfigfile) | The configuration file to use |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

##### setTheme()

```ts
setTheme(theme: null | EasyCLITheme): EasyCLI<TGlobalParams>
```

Defined in: class.ts:73

Set the theme for the CLI

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |

###### Returns

[`EasyCLI`](class.md#easyclitglobalparams)\<`TGlobalParams`\>

The EasyCLI instance

## Interfaces

### EasyCLIConfig\<TGloablParams\>

Defined in: class.ts:18

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
