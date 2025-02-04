[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIConfigFile

# Class: EasyCLIConfigFile

Defined in: [config/index.ts:26](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/config/index.ts#L26)

## Constructors

### new EasyCLIConfigFile()

> **new EasyCLIConfigFile**(`__namedParameters`): [`EasyCLIConfigFile`](EasyCLIConfigFile.md)

Defined in: [config/index.ts:34](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/config/index.ts#L34)

#### Parameters

##### \_\_namedParameters

[`ConfigFileParams`](../type-aliases/ConfigFileParams.md)

#### Returns

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

## Methods

### fileExists()

> **fileExists**(`filePath`): `boolean`

Defined in: [config/index.ts:227](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/config/index.ts#L227)

#### Parameters

##### filePath

`null` | `string`

#### Returns

`boolean`

***

### load()

> **load**\<`TConfig`\>(`path`): `TConfig`

Defined in: [config/index.ts:205](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/config/index.ts#L205)

#### Type Parameters

• **TConfig** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### path

`null` | `string`

#### Returns

`TConfig`

***

### save()

> **save**\<`TConfig`\>(`config`, `filePath`): `Promise`\<`void`\>

Defined in: [config/index.ts:233](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/config/index.ts#L233)

#### Type Parameters

• **TConfig** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### config

`TConfig`

##### filePath

`null` | `string`

#### Returns

`Promise`\<`void`\>
