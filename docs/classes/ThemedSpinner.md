[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedSpinner

# Class: ThemedSpinner

Defined in: [themes/themed-spinner.ts:18](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/themed-spinner.ts#L18)

A class to handle themed spinners
 ThemedSpinner

## Param

The theme to use

## Param

The display options for the spinner

## Example

```typescript
const theme = new EasyCLITheme();
const spinner = new ThemedSpinner(theme, 'default');
spinner.start('Loading...');
```

## Constructors

### new ThemedSpinner()

> **new ThemedSpinner**(`theme`, `displayOptions`): [`ThemedSpinner`](ThemedSpinner.md)

Defined in: [themes/themed-spinner.ts:28](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/themed-spinner.ts#L28)

Creates an instance of ThemedSpinner

#### Parameters

##### theme

The theme to use

`null` | [`EasyCLITheme`](EasyCLITheme.md)

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

The display options for the spinner

#### Returns

[`ThemedSpinner`](ThemedSpinner.md)

## Methods

### start()

> **start**(`text`, `options`?): `Ora`

Defined in: [themes/themed-spinner.ts:39](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/themed-spinner.ts#L39)

Starts the spinner

#### Parameters

##### text

`string`

The text to display

##### options?

`Partial`\<`Ora`\> = `{}`

The options for the spinner

#### Returns

`Ora`

The spinner instance

***

### stop()

> **stop**(): `void`

Defined in: [themes/themed-spinner.ts:51](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/themed-spinner.ts#L51)

Stops the spinner

#### Returns

`void`
