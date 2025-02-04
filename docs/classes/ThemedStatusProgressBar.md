[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ThemedStatusProgressBar

# Class: ThemedStatusProgressBar

Defined in: [themes/progress/progress-with-status.ts:95](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L95)

A themed status progress bar that shows the progress of a task while also showing the current status of the task

 *  ThemedStatusProgressBar

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
const theme = new EasyCLITheme();
const progressBar = new ThemedStatusProgressBar(theme, 'Task', 'Task in progress', {
 showCurrentRecord: true,
});

const bar = progressBar.start(0, 100);

// Update the progress bar
progressBar.update(50, { current: 'Processing record XXX', success: 10, warn: 5, error: 0 });

// Stop the progress bar
bar.stop();
```

## Extends

- [`ThemedProgressBar`](ThemedProgressBar.md)\<[`ThemedStatusProgressBarOptions`](../interfaces/ThemedStatusProgressBarOptions.md)\>

## Constructors

### new ThemedStatusProgressBar()

> **new ThemedStatusProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

Defined in: [themes/progress/progress-with-status.ts:96](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L96)

#### Parameters

##### theme

[`EasyCLITheme`](EasyCLITheme.md)

##### name

`string`

##### displayOptions

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

##### progressBarOptions

[`ThemedStatusProgressBarOptions`](../interfaces/ThemedStatusProgressBarOptions.md) = `DEFAULT_STATUS_PROGRESS_BAR_OPTIONS`

#### Returns

[`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`constructor`](ThemedProgressBar.md#constructors)

## Properties

### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](../type-aliases/DisplayOptions.md)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L70)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`displayOptions`](ThemedProgressBar.md#displayoptions-1)

***

### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L68)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`name`](ThemedProgressBar.md#name-1)

***

### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L71)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBar`](ThemedProgressBar.md#progressbar)

***

### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedStatusProgressBarOptions`](../interfaces/ThemedStatusProgressBarOptions.md)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L72)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`progressBarOptions`](ThemedProgressBar.md#progressbaroptions-1)

***

### theme

> `protected` **theme**: [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L69)

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`theme`](ThemedProgressBar.md#theme-1)

## Methods

### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/progress-with-status.ts:108](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L108)

An internal method to get the options for the progress bar

#### Returns

`Options`

The options for the progress bar

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`getOptions`](ThemedProgressBar.md#getoptions)

***

### increment()

> **increment**(`payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:170](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L170)

Increments the progress bar

#### Parameters

##### payload

[`StatusPayload`](../interfaces/StatusPayload.md)

The payload for the status bar

#### Returns

`void`

***

### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/progress-with-status.ts:151](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L151)

Starts the progress bar

#### Parameters

##### initial

`number`

The initial value for the progress bar

##### total

`number`

The total value for the progress bar

#### Returns

`SingleBar`

an instance of the progress bar

#### Overrides

[`ThemedProgressBar`](ThemedProgressBar.md).[`start`](ThemedProgressBar.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/base.ts#L183)

Stops the progress bar

#### Returns

`void`

#### Inherited from

[`ThemedProgressBar`](ThemedProgressBar.md).[`stop`](ThemedProgressBar.md#stop)

***

### update()

> **update**(`progress`, `payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:161](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/progress/progress-with-status.ts#L161)

Updates the progress bar

#### Parameters

##### progress

`number`

The current progress value

##### payload

[`StatusPayload`](../interfaces/StatusPayload.md)

The payload for the status bar

#### Returns

`void`
