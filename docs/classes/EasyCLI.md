[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLI

# Class: EasyCLI\<TGlobalParams\>

Defined in: [index.ts:41](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L41)

The EasyCLI class

## Example

```typescript
const cli = new EasyCLI({
  executionName: 'my-cli',
});

const command = new EasyCLICommand(...);
cli.addCommand(command);

cli.execute();
```

## Type Parameters

• **TGlobalParams**

The global params for the CLI

## Constructors

### new EasyCLI()

> **new EasyCLI**\<`TGlobalParams`\>(`config`?): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:57](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L57)

Creates a new EasyCLI instance

#### Parameters

##### config?

[`EasyCLIConfig`](../type-aliases/EasyCLIConfig.md)\<`TGlobalParams`\> = `{}`

The configuration for the CLI

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

## Methods

### addCommand()

> **addCommand**\<`TParams`\>(`command`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:110](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L110)

Adds a command to the CLI

#### Type Parameters

• **TParams**

#### Parameters

##### command

[`EasyCLICommand`](EasyCLICommand.md)\<\{\}, `TGlobalParams`\>

The command to add

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance

***

### execute()

> **execute**(`callback`?): `Promise`\<`void`\>

Defined in: [index.ts:241](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L241)

Run the CLI with the provided arguments.

#### Parameters

##### callback?

A callback to add additional configuration to the CLI via yargs

`null` | (`app`) => `Argv`

#### Returns

`Promise`\<`void`\>

***

### handleConfigFileFlag()

> **handleConfigFileFlag**(`overrides`?): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:151](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L151)

Manage the configuration file flag for the CLI

#### Parameters

##### overrides?

`Partial`\<`Options` & `object` & `object`\> = `...`

Any overrides for the configuration file flag

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance

***

### handleVerboseFlag()

> **handleVerboseFlag**(`defaultVerbosirty`?, `overrides`?): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:125](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L125)

Manage the verbose flag for the CLI

#### Parameters

##### defaultVerbosirty?

`number` = `0`

The default verbosity level

##### overrides?

`Partial`\<`Options` & `object` & `object`\> = `...`

Any overrides for the verbose flag

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance

***

### setCommands()

> **setCommands**(`commands`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:96](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L96)

Sets all the commands for the CLI, will overwrite any existing commands

#### Parameters

##### commands

[`EasyCLICommand`](EasyCLICommand.md)\<\{\}, `TGlobalParams`\>[]

The commands to add to the CLI

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance

***

### setConfigFile()

> **setConfigFile**(`config`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:83](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L83)

Set the configuration file for the CLI

#### Parameters

##### config

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

The configuration file to use

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance

***

### setTheme()

> **setTheme**(`theme`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:71](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L71)

Set the theme for the CLI

#### Parameters

##### theme

The theme to use

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

The EasyCLI instance
