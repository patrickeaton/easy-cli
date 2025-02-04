[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedProgressBar

# Class: ThemedProgressBar\<T\>

Defined in: [themes/progress/base.ts:65](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L65)

A themed progress bar, can be overridden to add additional functionality

## Param

The theme to use

## Param

The name of the progress bar

## Param

The display options for the progress bar

## Param

The options for the progress bar

## Extended by

- [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)
- [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

## Type Parameters

• **T** *extends* [`ThemedProgressBarOptions`](../type-aliases/ThemedProgressBarOptions.md) = [`ThemedProgressBarOptions`](../type-aliases/ThemedProgressBarOptions.md)

ThemedProgressBar

## Constructors

### new ThemedProgressBar()

> **new ThemedProgressBar**\<`T`\>(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedProgressBar`](ThemedProgressBar.md)\<`T`\>

Defined in: [themes/progress/base.ts:74](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L74)

#### Parameters

##### theme

[`EasyCLITheme`](EasyCLITheme.md)

##### name

`string`

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

##### progressBarOptions

[`ThemedProgressBarOptions`](../type-aliases/ThemedProgressBarOptions.md) = `DEFAULT_PROGRESS_BAR_OPTIONS`

#### Returns

[`ThemedProgressBar`](ThemedProgressBar.md)\<`T`\>

## Properties

### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](../type-aliases/DisplayOptions.md)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L70)

***

### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L68)

***

### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L71)

***

### progressBarOptions

> `protected` **progressBarOptions**: `T`

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L72)

***

### theme

> `protected` **theme**: [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L69)

## Methods

### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/base.ts:94](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L94)

An internal method to get the options for the progress bar

#### Returns

`Options`

The options for the progress bar

***

### start()

> **start**(`initial`, `total`, `payload`, `options`): `SingleBar`

Defined in: [themes/progress/base.ts:166](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L166)

Starts the progress bar

#### Parameters

##### initial

`number`

The initial number of items processed

##### total

`number`

The total number of items to process

##### payload

`Record`\<`string`, `any`\> = `{}`

The payload to pass to the progress bar

##### options

`Options` = `{}`

A set of options for the progress bar

#### Returns

`SingleBar`

***

### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L183)

Stops the progress bar

#### Returns

`void`
