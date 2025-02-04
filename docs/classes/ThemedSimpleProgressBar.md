[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedSimpleProgressBar

# Class: ThemedSimpleProgressBar

Defined in: [themes/progress/simple-progress.ts:22](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L22)

## Extends

- [`ThemedProgressBar`](ThemedProgressBar.md)\<[`ThemedSimpleProgressBarOptions`](../type-aliases/ThemedSimpleProgressBarOptions.md)\>

## Constructors

### new ThemedSimpleProgressBar()

> **new ThemedSimpleProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

Defined in: [themes/progress/simple-progress.ts:23](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L23)

#### Parameters

##### theme

[`EasyCLITheme`](EasyCLITheme.md)

##### name

`string`

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

##### progressBarOptions

[`ThemedSimpleProgressBarOptions`](../type-aliases/ThemedSimpleProgressBarOptions.md) = `DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS`

#### Returns

[`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

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

> `protected` **progressBarOptions**: [`ThemedSimpleProgressBarOptions`](../type-aliases/ThemedSimpleProgressBarOptions.md)

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

Defined in: [themes/progress/simple-progress.ts:35](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L35)

#### Returns

`Options`

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`getOptions`](ThemedProgressBar.md#getoptions)

***

### increment()

> **increment**(`current`): `void`

Defined in: [themes/progress/simple-progress.ts:60](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L60)

#### Parameters

##### current

`string` = `''`

#### Returns

`void`

***

### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/simple-progress.ts:50](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L50)

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

> **update**(`progress`, `current`): `void`

Defined in: [themes/progress/simple-progress.ts:54](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/progress/simple-progress.ts#L54)

#### Parameters

##### progress

`number`

##### current

`string` = `''`

#### Returns

`void`
