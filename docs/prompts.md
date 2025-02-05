[easy-cli](README.md) / prompts

This module contains prompts for the EasyCLI library.

## promptChoice()

```ts
function promptChoice(
   prompt: string, 
   choices: string[], 
options: PromptChoiceOptions): Promise<any>
```

Defined in: [prompts/prompt-choice.ts:62](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-choice.ts#L62)

Prompts the user to select a choice from a list of choices, if the input is invalid, it will prompt the user again for a valid input

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | The prompt to display to the user |
| `choices` | `string`[] | The choices to display to the user |
| `options` | [`PromptChoiceOptions`](prompts.md#promptchoiceoptions) | The options for the prompt |

### Returns

`Promise`\<`any`\>

The choice the user selected

### Example

```typescript
// Prompt the user to select a choice
const choice = await promptChoice('Select a choice', ['A', 'B', 'C']);
console.log(choice);

// Prompt the user to select a choice with a default option
const choice = await promptChoice('Select a choice', ['A', 'B', 'C'], { defaultOption: 'A' });
 console.log(choice);

// Prompt the user to select a choice using a custom theme
const choice = await promptChoice('Select a choice', ['A', 'B', 'C'], {
theme: new EasyCLITheme(),
promptTheme: 'info',
});
console.log(choice);

// Prompt the user to select a choice using a custom displaying the choices with a theme
const theme = new EasyCLITheme();
const choice = await promptChoice('Select a choice', [
 theme.formattedString('A', 'info'),
 theme.formattedString('B', 'warn'),
 theme.formattedString('C', 'error'),
]);
console.log(choice);
```

***

## promptConfirm()

```ts
function promptConfirm(prompt: string, options: PromptConfirmOptions): Promise<any>
```

Defined in: [prompts/prompt-confirm.ts:46](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-confirm.ts#L46)

Prompts the user to confirm a prompt.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | The prompt to display to the user |
| `options` | [`PromptConfirmOptions`](prompts.md#promptconfirmoptions) | The options for the prompt |

### Returns

`Promise`\<`any`\>

The choice the user selected

### Example

```typescript
// Prompt the user to confirm a prompt
const choice = await promptConfirm('Are you sure?');
console.log(choice);

// Prompt the user to confirm a prompt with a default option
const choice = await promptConfirm('Are you sure?', { defaultOption: true });
console.log(choice);

// Prompt the user to confirm a prompt using a custom theme
const choice = await promptConfirm('Are you sure?', {
 theme: new EasyCLITheme(),
 promptTheme: 'info',
});
```

***

## promptMultipleChoice()

```ts
function promptMultipleChoice(
   prompt: string, 
   choices: string[], 
options: PromptMultipleChoiceOptions): Promise<any>
```

Defined in: [prompts/prompt-multiple-choice.ts:67](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-multiple-choice.ts#L67)

Prompts the user to select multiple choices from a list of choices, if the input is invalid, it will prompt the user again for a valid input

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | The prompt to display to the user |
| `choices` | `string`[] | The choices to display to the user |
| `options` | [`PromptMultipleChoiceOptions`](prompts.md#promptmultiplechoiceoptions) | The options for the prompt |

### Returns

`Promise`\<`any`\>

The validated choices the user selected

### Example

```typescript
// Prompt the user to select a choice
const choices = await promptMultipleChoice('Select a choice', ['A', 'B', 'C']);
console.log(choices);

// Prompt the user to select multiple choices with a default selection
const choices = await promptMultipleChoice('Select a choice', ['A', 'B', 'C'], {
 defaultSelected: ['A', 'B'],
validator: (input) => input.length > 0,
validationErrorMessage: 'You must select at least one choice',
});
console.log(choices);

// Prompt the user to select a choice using a custom theme
const choices = await promptMultipleChoice('Select a choice', ['A', 'B', 'C'], {
theme: new EasyCLITheme(),
promptTheme: 'info',
});
console.log(choices);

// Prompt the user to select a choice using a custom displaying the choices with a theme
const theme = new EasyCLITheme();
const choices = await promptMultipleChoice('Select a choice', [
  theme.formattedString('A', 'info'),
  theme.formattedString('B', 'warn'),
  theme.formattedString('C', 'error')
]);
console.log(choices);
```

***

## promptNumber()

```ts
function promptNumber(prompt: string, options: PromptNumberOptions): Promise<any>
```

Defined in: [prompts/prompt-number.ts:55](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-number.ts#L55)

Prompts the user to enter a number.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | The prompt to display to the user |
| `options` | [`PromptNumberOptions`](prompts.md#promptnumberoptions) | The options for the prompt |

### Returns

`Promise`\<`any`\>

The number the user entered

### Example

```typescript
// Prompt the user to enter a number
const number = await promptNumber('Enter a number');
console.log(number);

// Prompt the user to enter a number between 1 and 10
const number = await promptNumber('Enter a number between 1 and 10', {
  validator: (input) => input >= 1 && input <= 10,
  validationErrorMessage: 'Number must be between 1 and 10',
});
console.log(number);

// Prompt the user to enter a number using a custom theme
const number = await promptNumber('Enter a number', {
  theme: new EasyCLITheme(),
  promptTheme: 'info',
});
console.log(number);
```

***

## promptTextInput()

```ts
function promptTextInput(prompt: string, options: PromptTextOptions): Promise<any>
```

Defined in: [prompts/prompt-text.ts:65](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-text.ts#L65)

Prompts the user to enter text.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | The prompt to display to the user |
| `options` | [`PromptTextOptions`](prompts.md#prompttextoptions) | The options for the prompt |

### Returns

`Promise`\<`any`\>

The validated text the user entered

### Example

```typescript
// Prompt the user to enter some text
const text = await promptTextInput('Enter some text');
console.log(text);

// Prompt the user to enter a password
const password = await promptTextInput('Enter a password', { type: 'password' });
console.log(password);

// Prompt the user to enter some text using an editor
const editor = await promptTextInput('Enter some text', { type: 'editor' });
console.log(editor);

// Prompt the user to enter some text longer than 5 characters
const text = await promptTextInput('Enter some text', {
 validator: (input) => input.length > 5,
 validationErrorMessage: 'Text must be longer than 5 characters',
});
console.log(text);

// Prompt the user to enter some text using a custom theme
const text = await promptTextInput('Enter some text', {
theme: new EasyCLITheme(),
  promptTheme: 'info',
});
console.log(text);
```

***

## PromptChoiceOptions

Defined in: [prompts/prompt-choice.ts:17](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-choice.ts#L17)

Options for the promptChoice function

 PromptChoiceOptions

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultoption"></a> `defaultOption?` | `null` \| `string` | The default option to use () |
| <a id="prompttheme"></a> `promptTheme?` | [`DisplayOptions`](themes.md#displayoptions-3) | The theme to use for the prompt |
| <a id="theme"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| <a id="validationerrormessage"></a> `validationErrorMessage?` | `string` | The error message to display if the input is invalid |
| <a id="validator"></a> `validator?` | (`input`: `string`) => `boolean` | A function to validate the input |

***

## PromptConfirmOptions

Defined in: [prompts/prompt-confirm.ts:15](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-confirm.ts#L15)

Options for the promptConfirm function

 PromptConfirmOptions

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultoption-1"></a> `defaultOption?` | `boolean` | The default option to use |
| <a id="prompttheme-1"></a> `promptTheme?` | [`DisplayOptions`](themes.md#displayoptions-3) | The theme to use for the prompt |
| <a id="theme-1"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |

***

## PromptMultipleChoiceOptions

Defined in: [prompts/prompt-multiple-choice.ts:18](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-multiple-choice.ts#L18)

Options for the promptMultipleChoice function

 PromptMultipleChoiceOptions

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultselected"></a> `defaultSelected?` | `string`[] | The default selected options |
| <a id="prompttheme-2"></a> `promptTheme?` | [`DisplayOptions`](themes.md#displayoptions-3) | The theme to use for the prompt |
| <a id="theme-2"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| <a id="validationerrormessage-1"></a> `validationErrorMessage?` | `string` | The error message to display if the input is invalid |
| <a id="validator-1"></a> `validator?` | (`input`: `string`[]) => `boolean` | A function to validate the input |

***

## PromptNumberOptions

Defined in: [prompts/prompt-number.ts:17](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-number.ts#L17)

Options for the promptNumber function

 PromptNumberOptions

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="prompttheme-3"></a> `promptTheme?` | [`DisplayOptions`](themes.md#displayoptions-3) | The theme to use for the prompt |
| <a id="theme-3"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| <a id="validationerrormessage-2"></a> `validationErrorMessage?` | `string` | The error message to display if the input is invalid |
| <a id="validator-2"></a> `validator?` | (`input`: `number`) => `boolean` | A function to validate the input |
| <a id="value"></a> `value?` | `null` \| `number` | The default value to use |

***

## PromptTextOptions

Defined in: [prompts/prompt-text.ts:18](https://github.com/patrickeaton/easy-cli/blob/dbfc4c7269c8cf3d4229dd8dabebbf5a35f3e0b6/src/prompts/prompt-text.ts#L18)

Options for the promptTextInput function

 PromptTextOptions

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaulttext"></a> `defaultText?` | `string` | The default text to use |
| <a id="prompttheme-4"></a> `promptTheme?` | [`DisplayOptions`](themes.md#displayoptions-3) | The theme to use for the prompt |
| <a id="theme-4"></a> `theme?` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| <a id="type"></a> `type?` | `"input"` \| `"password"` \| `"editor"` | The type of input to use. 'input' is a normal text input, 'password' is hidden whilst typing, 'editor' opens up an editor |
| <a id="validationerrormessage-3"></a> `validationErrorMessage?` | `string` | The error message to display if the input is invalid |
| <a id="validator-3"></a> `validator?` | (`input`: `string`) => `boolean` | A function to validate the input |
