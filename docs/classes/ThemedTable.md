[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedTable

# Class: ThemedTable\<TItem\>

Defined in: [themes/themed-table.ts:67](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/themed-table.ts#L67)

A themed table that extends a cli-table

## Param

The options for the themed table

## Example

```typescript
const theme = new EasyCLITheme();
const table = new ThemedTable({
  theme,
  columns: [
    { name: 'Name', data: item => item.name },
    { name: 'Age', data: item => item.age },
  ],
});

table.render([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
]);

## Type Parameters

• **TItem** *extends* `Record`\<`string`, `any`\>

ThemedTable

## Constructors

### new ThemedTable()

> **new ThemedTable**\<`TItem`\>(`__namedParameters`): [`ThemedTable`](ThemedTable.md)\<`TItem`\>

Defined in: [themes/themed-table.ts:72](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/themed-table.ts#L72)

#### Parameters

##### \_\_namedParameters

[`ThemedTableOptions`](../type-aliases/ThemedTableOptions.md)\<`TItem`\>

#### Returns

[`ThemedTable`](ThemedTable.md)\<`TItem`\>

## Methods

### render()

> **render**(`items`): `void`

Defined in: [themes/themed-table.ts:104](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/themed-table.ts#L104)

Render the table

#### Parameters

##### items

`TItem`[]

The items to render

#### Returns

`void`
