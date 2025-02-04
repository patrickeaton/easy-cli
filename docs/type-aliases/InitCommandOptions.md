[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / InitCommandOptions

# Type Alias: InitCommandOptions\<TGlobalParams, TParams\>

> **InitCommandOptions**\<`TGlobalParams`, `TParams`\>: [`CommandSetupOptions`](CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\> & `object`

Defined in: [commands/init.ts:6](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/commands/init.ts#L6)

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

• **TParams**
