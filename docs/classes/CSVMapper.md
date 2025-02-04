[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CSVMapper

# Class: CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:63](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/helpers/csv-file-helper.ts#L63)

## Type Parameters

• **TObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

• **TFileObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

## Constructors

### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](CSVMapper.md)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-helper.ts:113](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/helpers/csv-file-helper.ts#L113)

Create a new CSV Mapper.

#### Parameters

##### options

[`CsvMapperOptions`](../type-aliases/CsvMapperOptions.md)\<`TObject`\>

The options for the CSV Mapper.

#### Returns

[`CSVMapper`](CSVMapper.md)\<`TObject`, `TFileObject`\>

#### Example

```ts
const csvProcessor = new CSVMapper({
mappings: {
 username: {
  aliases: ['Username'],
  required: true,
  transform: value => value,
 },
 id: {
  aliases: ['Identifier'],
  required: true,
  transform: value => parseInt(value),
 },
 lastName: {
  aliases: [],
  required: true,
  transform: value => value,
 },
 firstName: {
  aliases: ['First name', 'First Name'],
  required: true,
  transform: value => value,
 },
 firstInital: {
  aliases: ['First name', 'First Name'],
  required: true,
  transform: value => value[0],
 },
},
interactive: true,
});
```

## Methods

### processFile()

> **processFile**(`path`): `Promise`\<\[`string`, `any`\][]\>

Defined in: [helpers/csv-file-helper.ts:188](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/helpers/csv-file-helper.ts#L188)

Process a CSV file and return the data as an array of transformed objects.

#### Parameters

##### path

`string`

The path to the CSV file to process

#### Returns

`Promise`\<\[`string`, `any`\][]\>

The data from the CSV file as an array of transformed objects
