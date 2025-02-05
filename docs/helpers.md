[easy-cli](README.md) / helpers

# helpers

This module contains helpers for the EasyCLI library.

## Classes

### CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:133](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L133)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `TFileObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Constructors

##### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-helper.ts:183](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L183)

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

Defined in: [helpers/csv-file-helper.ts:258](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L258)

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

Defined in: [helpers/csv-file-helper.ts:18](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L18)

A mapping for a CSV field to a field in an object.

 CsvFieldMapping

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TType` | `any` |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="aliases"></a> `aliases` | `string`[] | The aliases for the field in the CSV. | [helpers/csv-file-helper.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L19) |
| <a id="required"></a> `required` | `boolean` | If the field is required or not. | [helpers/csv-file-helper.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L20) |
| <a id="transform"></a> `transform?` | (`value`: `string`) => `any` | The function to transform the value from the CSV. (Default: value => value) | [helpers/csv-file-helper.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L21) |
| <a id="allowempty"></a> `allowEmpty?` | `boolean` | If the field can be empty or not. (Default: false) | [helpers/csv-file-helper.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L22) |
| <a id="defaultvalue"></a> `defaultValue?` | `TType` | The default value for the field. (Default: undefined) | [helpers/csv-file-helper.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L23) |

***

### CsvFieldMappings\<TObject\>

Defined in: [helpers/csv-file-helper.ts:37](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L37)

A mapping of fields in an object to their CSV field mappings.

 CsvFieldMappings

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TObject` | The object type to map to. |

***

### ObjectDataMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-helper.ts:62](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L62)

A mapping of CSV columns to their object fields that they map to.

 ObjectDataMapper

#### Example

```typescript
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

***

### CsvMapperOptions\<TObject\>

Defined in: [helpers/csv-file-helper.ts:78](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L78)

The settings for the CSV Mapper instance.

 CsvMapperOptions

#### Type Parameters

| Type Parameter |
| ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="interactive"></a> `interactive?` | `boolean` | If it should interactively ask for other field mappings. (Default: false) | [helpers/csv-file-helper.ts:80](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L80) |
| <a id="discardoriginalfields"></a> `discardOriginalFields?` | `boolean` | If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true) | [helpers/csv-file-helper.ts:82](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L82) |
| <a id="mappings"></a> `mappings` | [`CsvFieldMappings`](helpers.md#csvfieldmappingstobject)\<`TObject`\> | The field mappings for the CSV file. | [helpers/csv-file-helper.ts:84](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L84) |
| <a id="theme"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for the prompts. | [helpers/csv-file-helper.ts:85](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L85) |
| <a id="validate"></a> `validate?` | `boolean` | If it should validate the data against the mappings. (Default: true) | [helpers/csv-file-helper.ts:86](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-helper.ts#L86) |
