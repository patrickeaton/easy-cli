[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / promptChoice

# Function: promptChoice()

> **promptChoice**(`prompt`, `choices`, `options`): `Promise`\<`any`\>

Defined in: [prompts/prompt-choice.ts:34](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/prompts/prompt-choice.ts#L34)

Prompts the user to select a choice from a list of choices, if the input is invalid, it will prompt the user again for a valid input

## Parameters

### prompt

`string`

The prompt to display to the user

### choices

`string`[]

The choices to display to the user

### options

[`PromptChoiceOptions`](../type-aliases/PromptChoiceOptions.md) = `{}`

The options for the prompt

## Returns

`Promise`\<`any`\>

The choice the user selected
