[easy-cli](README.md) / helpers

# helpers

This module contains helpers for the EasyCLI library.

## Classes

### CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:133](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L133)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `TFileObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Constructors

##### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-helper.ts:183](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L183)

Create a new CSV Mapper.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CsvMapperOptions`](helpers.md#csvmapperoptionstobject)\<`TObject`\> | The options for the CSV Mapper. |

###### Returns

[`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

###### Example

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

#### Methods

##### processFile()

> **processFile**(`path`): `Promise`\<\[`string`, `any`\][]\>

Defined in: [helpers/csv-file-helper.ts:258](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L258)

Process a CSV file and return the data as an array of transformed objects.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the CSV file to process |

###### Returns

`Promise`\<\[`string`, `any`\][]\>

The data from the CSV file as an array of transformed objects

## Interfaces

### CsvFieldMapping\<TType\>

Defined in: [helpers/csv-file-helper.ts:18](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L18)

A mapping for a CSV field to a field in an object.

 CsvFieldMapping

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TType` | `any` |

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="aliases"></a> `aliases` | `string`[] | The aliases for the field in the CSV. |
| <a id="allowempty"></a> `allowEmpty?` | `boolean` | If the field can be empty or not. (Default: false) |
| <a id="defaultvalue"></a> `defaultValue?` | `TType` | The default value for the field. (Default: undefined) |
| <a id="required"></a> `required` | `boolean` | If the field is required or not. |
| <a id="transform"></a> `transform?` | (`value`: `string`) => `any` | The function to transform the value from the CSV. (Default: value => value) |

***

### CsvFieldMappings\<TObject\>

Defined in: [helpers/csv-file-helper.ts:37](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L37)

A mapping of fields in an object to their CSV field mappings.

 CsvFieldMappings

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TObject` | The object type to map to. |

***

### CsvMapperOptions\<TObject\>

Defined in: [helpers/csv-file-helper.ts:78](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L78)

The settings for the CSV Mapper instance.

 CsvMapperOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> |

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="discardoriginalfields"></a> `discardOriginalFields?` | `boolean` | If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true) |
| <a id="interactive"></a> `interactive?` | `boolean` | If it should interactively ask for other field mappings. (Default: false) |
| <a id="mappings"></a> `mappings` | [`CsvFieldMappings`](helpers.md#csvfieldmappingstobject)\<`TObject`\> | The field mappings for the CSV file. |
| <a id="theme"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for the prompts. |
| <a id="validate"></a> `validate?` | `boolean` | If it should validate the data against the mappings. (Default: true) |

***

### ObjectDataMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:62](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/helpers/csv-file-helper.ts#L62)

A mapping of CSV columns to their object fields that they map to.

 ObjectDataMapper

#### Example

```
{
'Username': ['username'],
'Identifier': ['id'],
'First name': ['firstName', 'firstInital'],
}
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TObject` | The output object type. |
| `TFileObject` | The CSV file object type. |
