[Easy CLI](README.md) / helpers

# helpers

Helper functions that are useful for CLI's. ie. Managing CSVs

## Classes

### CSVMapper\<TObject, TFileObject\>

Defined in: helpers/csv-file-mapper.ts:151

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `TFileObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Constructors

##### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

Defined in: helpers/csv-file-mapper.ts:199

Create a new CSV Mapper instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CsvMapperOptions`](helpers.md#csvmapperoptionstobject)\<`TObject`\> | The options for the CSV Mapper. |

###### Returns

[`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

A new CSV Mapper instance.

###### Example

```ts
const csvMapper = new CSVMapper({
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

const parsed = await csvMapper.processFile('./example.csv');
```

#### Methods

##### processFile()

> **processFile**(`path`): `Promise`\<`TObject`[]\>

Defined in: helpers/csv-file-mapper.ts:280

Process a CSV file and return the data as an array of transformed objects.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path to the CSV file to process |

###### Returns

`Promise`\<`TObject`[]\>

The data from the CSV file as an array of transformed objects

###### Throws

If there are validation errors in the CSV file and the validate option is set to true.

## Interfaces

### CsvFieldMapping\<TType\>

Defined in: helpers/csv-file-mapper.ts:19

A mapping for a CSV field to a field in an object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TType` | `any` | The type of the field after transformation. CsvFieldMapping |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="aliases"></a> `aliases` | `string`[] | The aliases for the field in the CSV. | helpers/csv-file-mapper.ts:20 |
| <a id="required"></a> `required` | `boolean` | If the field is required or not. | helpers/csv-file-mapper.ts:21 |
| <a id="transform"></a> `transform?` | (`value`: `string`) => `any` | The function to transform the value from the CSV. (Default: value => value) | helpers/csv-file-mapper.ts:22 |
| <a id="allowempty"></a> `allowEmpty?` | `boolean` | If the field can be empty or not. (Default: false) | helpers/csv-file-mapper.ts:23 |
| <a id="defaultvalue"></a> `defaultValue?` | `TType` | The default value for the field. (Default: undefined) | helpers/csv-file-mapper.ts:24 |

***

### CsvFieldMappings\<TObject\>

Defined in: helpers/csv-file-mapper.ts:38

A mapping of fields in an object to their CSV field mappings.

 CsvFieldMappings

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TObject` | The object type to map to. |

***

### ObjectDataMapper\<TObject, TFileObject\>

Defined in: helpers/csv-file-mapper.ts:63

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

Defined in: helpers/csv-file-mapper.ts:97

The settings for the CSV Mapper instance.

 CsvMapperOptions

#### Example

```typescript
{
  mappings: {
    username: {
      aliases: ['Username'],
      required: true,
      transform: value => value,
    },
    ...
  },
  interactive?: true, // If it should interactively ask for other field mappings. (Default: false)
  discardOriginalFields?: true, // If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV along with the mapped fields (Default: true)
  theme?: EasyCLITheme | null, // The theme to use for the prompts.
  validate?: true, // If it should validate the data against the mapping rules, if errors are detected it will throw an error (Default: true)
}
```

#### Type Parameters

| Type Parameter |
| ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="interactive"></a> `interactive?` | `boolean` | If it should interactively ask for other field mappings. (Default: false) | helpers/csv-file-mapper.ts:99 |
| <a id="discardoriginalfields"></a> `discardOriginalFields?` | `boolean` | If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true) | helpers/csv-file-mapper.ts:101 |
| <a id="mappings"></a> `mappings` | [`CsvFieldMappings`](helpers.md#csvfieldmappingstobject)\<`TObject`\> | The field mappings for the CSV file. | helpers/csv-file-mapper.ts:103 |
| <a id="theme"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for the prompts. | helpers/csv-file-mapper.ts:104 |
| <a id="validate"></a> `validate?` | `boolean` | If it should validate the data against the mappings. (Default: true) | helpers/csv-file-mapper.ts:105 |
