[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CsvMapperOptions

# Type Alias: CsvMapperOptions\<TObject\>

> **CsvMapperOptions**\<`TObject`\>: `object`

Defined in: [helpers/csv-file-helper.ts:48](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/helpers/csv-file-helper.ts#L48)

Options for the CSV Mapper.

## Type Parameters

• **TObject** *extends* `Record`\<`string`, `any`\>

## Type declaration

### discardOriginalFields?

> `optional` **discardOriginalFields**: `boolean`

### interactive?

> `optional` **interactive**: `boolean`

### mappings

> **mappings**: [`CsvFieldMappings`](CsvFieldMappings.md)\<`TObject`\>

### theme?

> `optional` **theme**: [`EasyCLITheme`](../classes/EasyCLITheme.md) \| `null`

### validate?

> `optional` **validate**: `boolean`
