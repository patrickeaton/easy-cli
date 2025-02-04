[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedStatusProgressBar

# Class: ThemedStatusProgressBar

Defined in: [themes/progress/progress-with-status.ts:44](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L44)

## Extends

- [`ThemedProgressBar`](ThemedProgressBar.md)\<[`ThemedStatusProgressBarOptions`](../type-aliases/ThemedStatusProgressBarOptions.md)\>

## Constructors

### new ThemedStatusProgressBar()

> **new ThemedStatusProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

Defined in: [themes/progress/progress-with-status.ts:45](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L45)

#### Parameters

##### theme

[`EasyCLITheme`](EasyCLITheme.md)

##### name

`string`

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

##### progressBarOptions

[`ThemedStatusProgressBarOptions`](../type-aliases/ThemedStatusProgressBarOptions.md) = `DEFAULT_STATUS_PROGRESS_BAR_OPTIONS`

#### Returns

[`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`constructor`](ThemedProgressBar.md#constructors)

## Properties

### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](../type-aliases/DisplayOptions.md)

Defined in: [themes/progress/base.ts:42](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L42)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`displayOptions`](ThemedProgressBar.md#displayoptions-1)

***

### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:40](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L40)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`name`](ThemedProgressBar.md#name-1)

***

### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:43](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L43)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBar`](ThemedProgressBar.md#progressbar)

***

### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedStatusProgressBarOptions`](../type-aliases/ThemedStatusProgressBarOptions.md)

Defined in: [themes/progress/base.ts:44](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L44)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBarOptions`](ThemedProgressBar.md#progressbaroptions-1)

***

### theme

> `protected` **theme**: [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/progress/base.ts:41](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L41)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`theme`](ThemedProgressBar.md#theme-1)

## Methods

### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/progress-with-status.ts:57](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L57)

#### Returns

`Options`

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`getOptions`](ThemedProgressBar.md#getoptions)

***

### increment()

> **increment**(`payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:101](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L101)

#### Parameters

##### payload

[`StatusPayload`](../type-aliases/StatusPayload.md)

#### Returns

`void`

***

### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/progress-with-status.ts:93](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L93)

#### Parameters

##### initial

`number`

##### total

`number`

#### Returns

`SingleBar`

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`start`](ThemedProgressBar.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:138](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/base.ts#L138)

#### Returns

`void`

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`stop`](ThemedProgressBar.md#stop)

***

### update()

> **update**(`progress`, `payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:97](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/progress-with-status.ts#L97)

#### Parameters

##### progress

`number`

##### payload

[`StatusPayload`](../type-aliases/StatusPayload.md)

#### Returns

`void`
