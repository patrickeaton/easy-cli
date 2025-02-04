[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIConfigureCommand

# Class: EasyCLIConfigureCommand\<TParams, TGloablParams\>

Defined in: [commands/configure.ts:12](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/configure.ts#L12)

## Extends

- [`EasyCLICommand`](EasyCLICommand.md)\<`TParams`, `TGloablParams`\>

## Type Parameters

• **TParams**

• **TGloablParams**

## Constructors

### new EasyCLIConfigureCommand()

> **new EasyCLIConfigureCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`, `options`): [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/configure.ts:16](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/configure.ts#L16)

#### Parameters

##### config

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

##### name

`string` = `'configure'`

##### options

[`ConfigureCommandOptions`](../type-aliases/ConfigureCommandOptions.md)\<`TGloablParams`, `TParams`\> = `{}`

#### Returns

[`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

#### Overrides

[`EasyCLICommand`](EasyCLICommand.md).[`constructor`](EasyCLICommand.md#constructors)

## Methods

### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:96](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L96)

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

##### config

[`CommandArgument`](../type-aliases/CommandArgument.md)

#### Returns

[`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addArgument`](EasyCLICommand.md#addargument)

***

### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:86](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L86)

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

#### Returns

[`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addFlag`](EasyCLICommand.md#addflag)

***

### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

Defined in: [commands/index.ts:91](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L91)

#### Parameters

##### key

keyof `TParams` & `TGloablParams`

##### config

[`CommandOption`](../type-aliases/CommandOption.md)

#### Returns

[`EasyCLIConfigureCommand`](EasyCLIConfigureCommand.md)\<`TParams`, `TGloablParams`\>

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`addPrompt`](EasyCLICommand.md#addprompt)

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

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`convertToYargsCommand`](EasyCLICommand.md#converttoyargscommand)

***

### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L138)

#### Returns

`TParams`

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getDefaultArgv`](EasyCLICommand.md#getdefaultargv)

***

### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/index.ts:74](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L74)

#### Returns

`string`[]

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getKeys`](EasyCLICommand.md#getkeys)

***

### getNames()

> **getNames**(): `string`[]

Defined in: [commands/index.ts:70](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L70)

#### Returns

`string`[]

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`getNames`](EasyCLICommand.md#getnames)

***

### run()

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/index.ts:277](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L277)

#### Parameters

##### params

`TParams` & `TGloablParams`

##### theme

`null` | [`EasyCLITheme`](EasyCLITheme.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`run`](EasyCLICommand.md#run)

***

### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/index.ts:82](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/index.ts#L82)

#### Returns

`boolean`

#### Inherited from

[`EasyCLICommand`](EasyCLICommand.md).[`skipConfigLoad`](EasyCLICommand.md#skipconfigload)
