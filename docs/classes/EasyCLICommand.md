[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLICommand

# Class: EasyCLICommand\<TParams, TGlobalParams\>

Defined in: [commands/index.ts:29](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L29)

## Extended by

- [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)
- [`EasyCLIInitCommand`](EasyCLIInitCommand.md)

## Type Parameters

• **TParams** = `Record`\<`string`, `any`\>

• **TGlobalParams** = `Record`\<`string`, `any`\>

## Constructors

### new EasyCLICommand()

> **new EasyCLICommand**\<`TParams`, `TGlobalParams`\>(`name`, `handler`, `__namedParameters`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:45](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L45)

#### Parameters

##### name

`string`

##### handler

(`params`, `theme`) => `void`

##### \_\_namedParameters

[`CommandSetupOptions`](../type-aliases/CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\>

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

## Methods

### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:96](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L96)

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

##### config

[`CommandArgument`](../type-aliases/CommandArgument.md)

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

***

### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:86](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L86)

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

***

### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/index.ts:91](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L91)

#### Parameters

##### key

keyof `TParams` & `TGlobalParams`

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

#### Returns

[`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGlobalParams`\>

***

### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/index.ts:242](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L242)

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

Defined in: [commands/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L138)

#### Returns

`TParams`

***

### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:74](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L74)

#### Returns

`string`[]

***

### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:70](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L70)

#### Returns

`string`[]

***

### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:277](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L277)

#### Parameters

##### params

`TParams` & `TGlobalParams`

##### theme

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

`Promise`\<`void`\>

***

### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:82](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L82)

#### Returns

`boolean`
