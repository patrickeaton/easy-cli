[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / PromptTextOptions

# Type Alias: PromptTextOptions

> **PromptTextOptions**: `object`

Defined in: [prompts/prompt-text.ts:18](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/prompts/prompt-text.ts#L18)

Options for the promptTextInput function

## Type declaration

### defaultText?

> `optional` **defaultText**: `string`

### promptTheme?

> `optional` **promptTheme**: [`DisplayOptions`](DisplayOptions.md)

### theme?

> `optional` **theme**: `null` \| [`EasyCLITheme`](../classes/EasyCLITheme.md)

### type?

> `optional` **type**: `"input"` \| `"password"` \| `"editor"`

### validationErrorMessage?

> `optional` **validationErrorMessage**: `string`

### validator()?

> `optional` **validator**: (`input`) => `boolean`

#### Parameters

##### input

`string`

#### Returns

`boolean`
