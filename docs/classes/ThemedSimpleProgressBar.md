[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedSimpleProgressBar

# Class: ThemedSimpleProgressBar

Defined in: [themes/progress/simple-progress.ts:53](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L53)

A themed simple progress bar that extends a ThemedProgressBar

## Template

ThemedSimpleProgressBar

## Param

The theme to use

## Param

The name of the progress bar

## Param

The display options for the progress bar

## Param

The options for the progress bar

## Example

```typescript
const progressBar = new ThemedSimpleProgressBar(theme, 'progress', displayOptions, {
 showCurrentRecord: true,
 currentRecordDisplayOptions: 'info',
});

## Extends

- [`ThemedProgressBar`](ThemedProgressBar.md)\<[`ThemedSimpleProgressBarOptions`](../interfaces/ThemedSimpleProgressBarOptions.md)\>

## Constructors

### new ThemedSimpleProgressBar()

> **new ThemedSimpleProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

Defined in: [themes/progress/simple-progress.ts:54](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L54)

#### Parameters

##### theme

[`EasyCLITheme`](EasyCLITheme.md)

##### name

`string`

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

##### progressBarOptions

[`ThemedSimpleProgressBarOptions`](../interfaces/ThemedSimpleProgressBarOptions.md) = `DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS`

#### Returns

[`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`constructor`](ThemedProgressBar.md#constructors)

## Properties

### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](../type-aliases/DisplayOptions.md)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L70)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`displayOptions`](ThemedProgressBar.md#displayoptions-1)

***

### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L68)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`name`](ThemedProgressBar.md#name-1)

***

### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L71)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBar`](ThemedProgressBar.md#progressbar)

***

### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedSimpleProgressBarOptions`](../interfaces/ThemedSimpleProgressBarOptions.md)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L72)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBarOptions`](ThemedProgressBar.md#progressbaroptions-1)

***

### theme

> `protected` **theme**: [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L69)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`theme`](ThemedProgressBar.md#theme-1)

## Methods

### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/simple-progress.ts:69](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L69)

An internal method to get the options for the progress bar

#### Returns

`Options`

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`getOptions`](ThemedProgressBar.md#getoptions)

***

### increment()

> **increment**(`current`?): `void`

Defined in: [themes/progress/simple-progress.ts:112](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L112)

Increments the progress bar by one.

#### Parameters

##### current?

`string` = `''`

The current record

#### Returns

`void`

***

### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/simple-progress.ts:91](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L91)

Starts the progress bar

#### Parameters

##### initial

`number`

The initial value

##### total

`number`

The total value

#### Returns

`SingleBar`

The progress bar

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`start`](ThemedProgressBar.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/base.ts#L183)

Stops the progress bar

#### Returns

`void`

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`stop`](ThemedProgressBar.md#stop)

***

### update()

> **update**(`progress`, `current`?): `void`

Defined in: [themes/progress/simple-progress.ts:101](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/themes/progress/simple-progress.ts#L101)

Updates the progress bar

#### Parameters

##### progress

`number`

The current progress

##### current?

`string` = `''`

The current record

#### Returns

`void`
