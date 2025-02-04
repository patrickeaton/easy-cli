[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / promptMultipleChoice

# Function: promptMultipleChoice()

> **promptMultipleChoice**(`prompt`, `choices`, `options`): `Promise`\<`any`\>

Defined in: [prompts/prompt-multiple-choice.ts:35](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/prompts/prompt-multiple-choice.ts#L35)

Prompts the user to select multiple choices from a list of choices, if the input is invalid, it will prompt the user again for a valid input

## Parameters

### prompt

`string`

The prompt to display to the user

### choices

`string`[]

The choices to display to the user

### options

[`PromptMultipleChoiceOptions`](../type-aliases/PromptMultipleChoiceOptions.md) = `{}`

The options for the prompt

## Returns

`Promise`\<`any`\>

The validated choices the user selected
