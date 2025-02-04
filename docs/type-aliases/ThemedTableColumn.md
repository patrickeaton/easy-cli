[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedTableColumn

# Type Alias: ThemedTableColumn\<TItem\>

> **ThemedTableColumn**\<`TItem`\>: `object`

Defined in: [themes/themed-table.ts:17](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/themed-table.ts#L17)

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
