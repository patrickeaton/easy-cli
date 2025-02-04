[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CsvFieldMapping

# Type Alias: CsvFieldMapping\<TType\>

> **CsvFieldMapping**\<`TType`\>: `object`

Defined in: [helpers/csv-file-helper.ts:7](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/helpers/csv-file-helper.ts#L7)

## Type Parameters

• **TType** = `any`

## Type declaration

### aliases

> **aliases**: `string`[]

### allowEmpty?

> `optional` **allowEmpty**: `boolean`

### defaultValue?

> `optional` **defaultValue**: `TType`

### required

> **required**: `boolean`

### transform()

> **transform**: (`value`) => `any` \| `Promise`\<`any`\>

#### Parameters

##### value

`string`

#### Returns

`any` \| `Promise`\<`any`\>
