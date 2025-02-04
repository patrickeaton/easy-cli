[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedTableColumn

# Type Alias: ThemedTableColumn\<TItem\>

> **ThemedTableColumn**\<`TItem`\>: `object`

Defined in: [themes/themed-table.ts:17](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/themed-table.ts#L17)

A column in a themed table

## Type Parameters

• **TItem** = `Record`\<`string`, `any`\>

## Type declaration

### align?

> `optional` **align**: `"left"` \| `"middle"` \| `"right"`

### data()

> **data**: (`item`) => `string`

#### Parameters

##### item

`TItem`

#### Returns

`string`

### headerStyle?

> `optional` **headerStyle**: [`DisplayOptions`](DisplayOptions.md)

### name

> **name**: `string`

### style?

> `optional` **style**: [`DisplayOptions`](DisplayOptions.md) \| (`item`) => [`DisplayOptions`](DisplayOptions.md)

### width?

> `optional` **width**: `number`
