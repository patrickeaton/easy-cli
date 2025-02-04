[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedProgressBar

# Class: ThemedProgressBar\<T\>

Defined in: [themes/progress/base.ts:37](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L37)

## Extended by

- [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)
- [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

## Type Parameters

• **T** *extends* [`ThemedProgressBarOptions`](../type-aliases/ThemedProgressBarOptions.md) = [`ThemedProgressBarOptions`](../type-aliases/ThemedProgressBarOptions.md)

## Constructors

### new ThemedProgressBar()

> **new ThemedProgressBar**\<`T`\>(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedProgressBar`](ThemedProgressBar.md)\<`T`\>

Defined in: [themes/progress/base.ts:46](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L46)

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

Defined in: [themes/progress/base.ts:42](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L42)

***

### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:40](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L40)

***

### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:43](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L43)

***

### progressBarOptions

> `protected` **progressBarOptions**: `T`

Defined in: [themes/progress/base.ts:44](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L44)

***

### theme

> `protected` **theme**: [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/progress/base.ts:41](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L41)

## Methods

### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/base.ts:61](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L61)

#### Returns

`Options`

***

### start()

> **start**(`initial`, `total`, `payload`, `options`): `SingleBar`

Defined in: [themes/progress/base.ts:124](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L124)

#### Parameters

##### initial

`number`

##### total

`number`

##### payload

`Record`\<`string`, `any`\> = `{}`

##### options

`Options` = `{}`

#### Returns

`SingleBar`

***

### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:138](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L138)

#### Returns

`void`
