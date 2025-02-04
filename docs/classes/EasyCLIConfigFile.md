[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIConfigFile

# Class: EasyCLIConfigFile

Defined in: [config/index.ts:62](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L62)

A class to handle loading and saving configuration files.

## Constructors

### new EasyCLIConfigFile()

> **new EasyCLIConfigFile**(`params`): [`EasyCLIConfigFile`](EasyCLIConfigFile.md)

Defined in: [config/index.ts:75](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L75)

Create a new configuration file handler.

#### Parameters

##### params

[`ConfigFileParams`](../type-aliases/ConfigFileParams.md)

The parameters to use when loading the configuration file

#### Returns

[`EasyCLIConfigFile`](EasyCLIConfigFile.md)

## Methods

### fileExists()

> **fileExists**(`filePath`): `boolean`

Defined in: [config/index.ts:303](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L303)

Check if a configuration file exists.

#### Parameters

##### filePath

An optional file path to use instead of the default otherwise it will scan using the given rules.

`null` | `string`

#### Returns

`boolean`

boolean Whether or not the configuration file exists

***

### load()

> **load**\<`TConfig`\>(`path`): `TConfig`

Defined in: [config/index.ts:269](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L269)

Load a configuration file for the given path.

#### Type Parameters

• **TConfig** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### path

An optional path override to use when loading the configuration file, otherwise it will use the default path.

`null` | `string`

#### Returns

`TConfig`

***

### save()

> **save**\<`TConfig`\>(`config`, `filePath`): `Promise`\<`void`\>

Defined in: [config/index.ts:315](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L315)

Save a configuration object to a file.

#### Type Parameters

• **TConfig** *extends* `Record`\<`string`, `any`\>

#### Parameters

##### config

`TConfig`

The configuration object to save

##### filePath

The file path to save the configuration to

`null` | `string`

#### Returns

`Promise`\<`void`\>
