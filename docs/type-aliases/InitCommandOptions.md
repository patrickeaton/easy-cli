[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / InitCommandOptions

# Type Alias: InitCommandOptions\<TGlobalParams, TParams\>

> **InitCommandOptions**\<`TGlobalParams`, `TParams`\>: [`CommandSetupOptions`](CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\> & `object`

Defined in: [commands/init.ts:17](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/init.ts#L17)

Options for the init command

## Type declaration

### configFlag?

> `optional` **configFlag**: `string`

### defaults?

> `optional` **defaults**: `Partial`\<`TGlobalParams` & `TParams`\>

### failOnExists?

> `optional` **failOnExists**: `boolean`

### globalKeysToUse?

> `optional` **globalKeysToUse**: `string`[]

### transformer()?

> `optional` **transformer**: (`params`) => `any`

#### Parameters

##### params

`TGlobalParams` & `TParams`

#### Returns

`any`

## Type Parameters

• **TGlobalParams**

The global params for the CLI

• **TParams**

The params for the command
