[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CSVMapper

# Class: CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:36](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/helpers/csv-file-helper.ts#L36)

## Type Parameters

• **TObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

• **TFileObject** *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

## Constructors

### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](CSVMapper.md)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-helper.ts:46](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/helpers/csv-file-helper.ts#L46)

#### Parameters

##### options

[`CsvMapperOptions`](../type-aliases/CsvMapperOptions.md)\<`TObject`\>

#### Returns

[`CSVMapper`](CSVMapper.md)\<`TObject`, `TFileObject`\>

## Methods

### processFile()

> **processFile**(`path`): `Promise`\<\[`string`, `any`\][]\>

Defined in: [helpers/csv-file-helper.ts:102](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/helpers/csv-file-helper.ts#L102)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<\[`string`, `any`\][]\>
