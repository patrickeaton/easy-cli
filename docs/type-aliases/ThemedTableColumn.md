[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedTableColumn

# Type Alias: ThemedTableColumn\<TItem\>

> **ThemedTableColumn**\<`TItem`\>: `object`

Defined in: [themes/themed-table.ts:4](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/themed-table.ts#L4)

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
