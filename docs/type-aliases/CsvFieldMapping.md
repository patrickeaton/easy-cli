[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CsvFieldMapping

# Type Alias: CsvFieldMapping\<TType\>

> **CsvFieldMapping**\<`TType`\>: `object`

Defined in: [helpers/csv-file-helper.ts:15](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/helpers/csv-file-helper.ts#L15)

A mapping for a CSV field to a field in an object.

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

### transform()?

> `optional` **transform**: (`value`) => `any` \| `Promise`\<`any`\>

#### Parameters

##### value

`string`

#### Returns

`any` \| `Promise`\<`any`\>
