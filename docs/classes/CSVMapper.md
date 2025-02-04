[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CSVMapper

# Class: CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:62](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/helpers/csv-file-helper.ts#L62)

## Type Parameters

• **TObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

• **TFileObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

## Constructors

### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](CSVMapper.md)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-helper.ts:112](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/helpers/csv-file-helper.ts#L112)

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

Defined in: [helpers/csv-file-helper.ts:187](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/helpers/csv-file-helper.ts#L187)

Process a CSV file and return the data as an array of transformed objects.

#### Parameters

##### path

`string`

The path to the CSV file to process

#### Returns

`Promise`\<\[`string`, `any`\][]\>

The data from the CSV file as an array of transformed objects
