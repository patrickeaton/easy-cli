[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CsvFieldMapping

# Type Alias: CsvFieldMapping\<TType\>

> **CsvFieldMapping**\<`TType`\>: `object`

Defined in: [helpers/csv-file-helper.ts:15](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/helpers/csv-file-helper.ts#L15)

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
