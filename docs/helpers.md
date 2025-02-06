[Easy CLI](README.md) / helpers

# helpers

Helper functions that are useful for CLI's. ie. Managing CSVs

## Classes

### CSVMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-mapper.ts:151](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L151)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `TFileObject` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Constructors

##### new CSVMapper()

> **new CSVMapper**\<`TObject`, `TFileObject`\>(`options`): [`CSVMapper`](helpers.md#csvmappertobject-tfileobject)\<`TObject`, `TFileObject`\>

Defined in: [helpers/csv-file-mapper.ts:199](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L199)

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

> **processFile**(`path`): `Promise`\<`TObject`[]\>

Defined in: [helpers/csv-file-mapper.ts:280](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L280)

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

***

### CsvFile\<TFileObject\>

Defined in: [helpers/csv-file.ts:14](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file.ts#L14)

A class to read and write CSV files.

 CsvFile

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TFileObject` | The type of object that the CSV file contains. |

#### Constructors

##### new CsvFile()

> **new CsvFile**\<`TFileObject`\>(`path`): [`CsvFile`](helpers.md#csvfiletfileobject)\<`TFileObject`\>

Defined in: [helpers/csv-file.ts:17](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

###### Returns

[`CsvFile`](helpers.md#csvfiletfileobject)\<`TFileObject`\>

#### Methods

##### read()

> **read**(): `Promise`\<`TFileObject`[]\>

Defined in: [helpers/csv-file.ts:35](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file.ts#L35)

Read a CSV file and parse it into an array of objects.

###### Returns

`Promise`\<`TFileObject`[]\>

The parsed CSV file as an array of objects.

###### Throws

If the file is not found or there is an error reading the file.

###### Example

```typescript
const csvFile = new CsvFile('data.csv');
const data = await csvFile.read();
console.log(data);
```

##### write()

> **write**(`data`): `Promise`\<`void`\>

Defined in: [helpers/csv-file.ts:66](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file.ts#L66)

Write an array of objects to a CSV file overwriting the existing file.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `TFileObject`[] | The data to write to the CSV file. |

###### Returns

`Promise`\<`void`\>

A promise that resolves when the file is written.

###### Throws

If there is an error writing the file.

###### Example

```typescript
const csvFile = new CsvFile('data.csv');
await csvFile.write([
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
]);
```

##### append()

> **append**(`data`): `Promise`\<`void`\>

Defined in: [helpers/csv-file.ts:89](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file.ts#L89)

Append an array of objects to an existing CSV file.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `TFileObject`[] | The data to append to the CSV file. |

###### Returns

`Promise`\<`void`\>

A promise that resolves when the file is written.

###### Throws

If there is an error writing the file.

###### Example

```typescript
const csvFile = new CsvFile('data.csv');
await csvFile.append([
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
]);
```

## Interfaces

### CsvFieldMapping\<TType\>

Defined in: [helpers/csv-file-mapper.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L19)

A mapping for a CSV field to a field in an object.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TType` | `any` | The type of the field after transformation. CsvFieldMapping |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="aliases"></a> `aliases` | `string`[] | The aliases for the field in the CSV. | [helpers/csv-file-mapper.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L20) |
| <a id="required"></a> `required` | `boolean` | If the field is required or not. | [helpers/csv-file-mapper.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L21) |
| <a id="transform"></a> `transform?` | (`value`: `string`) => `any` | The function to transform the value from the CSV. (Default: value => value) | [helpers/csv-file-mapper.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L22) |
| <a id="allowempty"></a> `allowEmpty?` | `boolean` | If the field can be empty or not. (Default: false) | [helpers/csv-file-mapper.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L23) |
| <a id="defaultvalue"></a> `defaultValue?` | `TType` | The default value for the field. (Default: undefined) | [helpers/csv-file-mapper.ts:24](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L24) |

***

### CsvFieldMappings\<TObject\>

Defined in: [helpers/csv-file-mapper.ts:38](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L38)

A mapping of fields in an object to their CSV field mappings.

 CsvFieldMappings

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TObject` | The object type to map to. |

***

### ObjectDataMapper\<TObject, TFileObject\>

Defined in: [helpers/csv-file-mapper.ts:63](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L63)

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

Defined in: [helpers/csv-file-mapper.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L97)

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
| <a id="interactive"></a> `interactive?` | `boolean` | If it should interactively ask for other field mappings. (Default: false) | [helpers/csv-file-mapper.ts:99](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L99) |
| <a id="discardoriginalfields"></a> `discardOriginalFields?` | `boolean` | If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true) | [helpers/csv-file-mapper.ts:101](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L101) |
| <a id="mappings"></a> `mappings` | [`CsvFieldMappings`](helpers.md#csvfieldmappingstobject)\<`TObject`\> | The field mappings for the CSV file. | [helpers/csv-file-mapper.ts:103](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L103) |
| <a id="theme"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for the prompts. | [helpers/csv-file-mapper.ts:104](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L104) |
| <a id="validate"></a> `validate?` | `boolean` | If it should validate the data against the mappings. (Default: true) | [helpers/csv-file-mapper.ts:105](https://github.com/patrickeaton/easy-cli/blob/master/src/helpers/csv-file-mapper.ts#L105) |
