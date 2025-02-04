[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLI

# Class: EasyCLI\<TGlobalParams\>

Defined in: [index.ts:13](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L13)

## Type Parameters

• **TGlobalParams**

## Constructors

### new EasyCLI()

> **new EasyCLI**\<`TGlobalParams`\>(`config`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:24](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L24)

#### Parameters

##### config

[`EasyCLIConfig`](../type-aliases/EasyCLIConfig.md)\<`TGlobalParams`\> = `{}`

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

## Methods

### addCommand()

> **addCommand**\<`TParams`\>(`command`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:48](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L48)

#### Type Parameters

• **TParams**

#### Parameters

##### command

[`EasyCLICommand`](EasyCLICommand.md)\<\{\}, `TGlobalParams`\>

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

***

### execute()

> **execute**(`callback`): `Promise`\<`void`\>

Defined in: [index.ts:151](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L151)

Run the CLI with the provided arguments.

#### Parameters

##### callback

`null` | (`app`) => `Argv`

#### Returns

`Promise`\<`void`\>

***

### handleConfigFileFlag()

> **handleConfigFileFlag**(`overrides`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:74](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L74)

#### Parameters

##### overrides

`Partial`\<`Options` & `object` & `object`\> = `...`

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

***

### handleVerboseFlag()

> **handleVerboseFlag**(`defaultVerbosirty`, `overrides`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:55](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L55)

#### Parameters

##### defaultVerbosirty

`number` = `0`

##### overrides

`Partial`\<`Options` & `object` & `object`\> = `...`

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

***

### setCommands()

> **setCommands**(`commands`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:41](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L41)

#### Parameters

##### commands

[`EasyCLICommand`](EasyCLICommand.md)\<\{\}, `TGlobalParams`\>[]

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

***

### setConfig()

> **setConfig**(`config`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:36](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L36)

#### Parameters

##### config

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

***

### setTheme()

> **setTheme**(`theme`): [`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>

Defined in: [index.ts:31](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/index.ts#L31)

#### Parameters

##### theme

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

[`EasyCLI`](EasyCLI.md)\<`TGlobalParams`\>
