[easy-cli](README.md) / themes

# themes

This module contains theming for the EasyCLI library.

## Classes

### EasyCLITheme

Defined in: [themes/index.ts:83](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L83)

A theme for the CLI, that allows for customizing the look and feel of the CLI, generating logs, tables, spinners, and progress bars.

 EasyCLITheme

#### Example

```typescript
const theme = new EasyCLITheme();
const logger = theme.getLogger();
logger.log('Hello, world!');
```

#### Constructors

##### new EasyCLITheme()

> **new EasyCLITheme**(`verbosity`?, `namedDisplayOptions`?): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:103](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L103)

Creates an instance of EasyCLITheme.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `verbosity`? | `number` | `0` | The verbosity level of the theme |
| `namedDisplayOptions`? | `Record`\<`string`, [`StringDisplayOptions`](themes.md#stringdisplayoptions)\> | `undefined` | The named display options for the theme |

###### Returns

[`EasyCLITheme`](themes.md#easyclitheme)

#### Methods

##### formattedString()

> **formattedString**(`string`, `options`): `string`

Defined in: [themes/index.ts:165](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L165)

Formats a string with the display options

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `string` | `string` | The string to format |
| `options` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options to use |

###### Returns

`string`

The formatted string

###### Example

```typescript
const theme = new EasyCLITheme();
const formatted = theme.formattedString('Hello, world!', ['info', { bold: true }]);
console.log(formatted);
```

##### getLogger()

> **getLogger**(): `EasyCLILogger`

Defined in: [themes/index.ts:212](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L212)

Gets a logger with the theme

###### Returns

`EasyCLILogger`

##### getSimpleProgressBar()

> **getSimpleProgressBar**(`name`, `format`?, `options`?): [`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

Defined in: [themes/index.ts:280](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L280)

Gets a simple progress bar with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |
| `options`? | [`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions) | `{}` |

###### Returns

[`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

##### getSpinner()

> **getSpinner**(`format`?): [`ThemedSpinner`](themes.md#themedspinner)

Defined in: [themes/index.ts:259](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L259)

Gets a spinner with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |

###### Returns

[`ThemedSpinner`](themes.md#themedspinner)

##### getStatusProgressBar()

> **getStatusProgressBar**(`name`, `format`?, `options`?): [`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

Defined in: [themes/index.ts:304](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L304)

Gets a status progress bar with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |
| `options`? | [`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions) | `{}` |

###### Returns

[`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

##### getTable()

> **getTable**\<`TItem`\>(`columns`?, `totalWidth`?): [`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

Defined in: [themes/index.ts:238](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L238)

Gets a table with the theme

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TItem` *extends* `Record`\<`string`, `any`\> | `any`[] |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `columns`? | [`ThemedTableColumn`](themes.md#themedtablecolumntitem)\<`TItem`\>[] | `[]` |
| `totalWidth`? | `number` | `120` |

###### Returns

[`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

##### setNamedDisplayOption()

> **setNamedDisplayOption**(`name`, `options`): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:199](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L199)

Sets the named display options for the theme

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options` | [`StringDisplayOptions`](themes.md#stringdisplayoptions) |

###### Returns

[`EasyCLITheme`](themes.md#easyclitheme)

##### setVerbosity()

> **setVerbosity**(`verbosity`): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:186](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L186)

Sets the verbosity level of the theme

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `verbosity` | `number` |

###### Returns

[`EasyCLITheme`](themes.md#easyclitheme)

***

### ThemedProgressBar\<T\>

Defined in: [themes/progress/base.ts:65](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L65)

A themed progress bar, can be overridden to add additional functionality

#### Param

The theme to use

#### Param

The name of the progress bar

#### Param

The display options for the progress bar

#### Param

The options for the progress bar

#### Extended by

- [`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)
- [`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* [`ThemedProgressBarOptions`](themes.md#themedprogressbaroptions) | [`ThemedProgressBarOptions`](themes.md#themedprogressbaroptions) | ThemedProgressBar |

#### Constructors

##### new ThemedProgressBar()

> **new ThemedProgressBar**\<`T`\>(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedProgressBar`](themes.md#themedprogressbart)\<`T`\>

Defined in: [themes/progress/base.ts:74](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L74)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` |
| `name` | `string` | `undefined` |
| `displayOptions` | [`DisplayOptions`](themes.md#displayoptions-3) | `undefined` |
| `progressBarOptions` | [`ThemedProgressBarOptions`](themes.md#themedprogressbaroptions) | `DEFAULT_PROGRESS_BAR_OPTIONS` |

###### Returns

[`ThemedProgressBar`](themes.md#themedprogressbart)\<`T`\>

#### Methods

##### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/base.ts:94](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L94)

An internal method to get the options for the progress bar

###### Returns

`Options`

The options for the progress bar

##### start()

> **start**(`initial`, `total`, `payload`, `options`): `SingleBar`

Defined in: [themes/progress/base.ts:166](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L166)

Starts the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initial` | `number` | The initial number of items processed |
| `total` | `number` | The total number of items to process |
| `payload` | `Record`\<`string`, `any`\> | The payload to pass to the progress bar |
| `options` | `Options` | A set of options for the progress bar |

###### Returns

`SingleBar`

##### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

#### Properties

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L70)

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L68)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L71)

##### progressBarOptions

> `protected` **progressBarOptions**: `T`

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L72)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L69)

***

### ThemedSimpleProgressBar

Defined in: [themes/progress/simple-progress.ts:54](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L54)

A themed simple progress bar that extends a ThemedProgressBar

#### Template

ThemedSimpleProgressBar

#### Param

The theme to use

#### Param

The name of the progress bar

#### Param

The display options for the progress bar

#### Param

The options for the progress bar

#### Example

```typescript
const progressBar = new ThemedSimpleProgressBar(theme, 'progress', displayOptions, {
 showCurrentRecord: true,
 currentRecordDisplayOptions: 'info',
});

#### Extends

- [`ThemedProgressBar`](themes.md#themedprogressbart)\<[`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions)\>

#### Constructors

##### new ThemedSimpleProgressBar()

> **new ThemedSimpleProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

Defined in: [themes/progress/simple-progress.ts:55](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L55)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` |
| `name` | `string` | `undefined` |
| `displayOptions` | [`DisplayOptions`](themes.md#displayoptions-3) | `undefined` |
| `progressBarOptions` | [`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions) | `DEFAULT_SIMPLE_PROGRESS_BAR_OPTIONS` |

###### Returns

[`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`constructor`](themes.md#constructors-1)

#### Methods

##### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/simple-progress.ts:70](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L70)

An internal method to get the options for the progress bar

###### Returns

`Options`

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`getOptions`](themes.md#getoptions)

##### increment()

> **increment**(`current`?): `void`

Defined in: [themes/progress/simple-progress.ts:113](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L113)

Increments the progress bar by one.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `current`? | `string` | `''` | The current record |

###### Returns

`void`

##### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/simple-progress.ts:92](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L92)

Starts the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initial` | `number` | The initial value |
| `total` | `number` | The total value |

###### Returns

`SingleBar`

The progress bar

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`start`](themes.md#start)

##### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`stop`](themes.md#stop)

##### update()

> **update**(`progress`, `current`?): `void`

Defined in: [themes/progress/simple-progress.ts:102](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L102)

Updates the progress bar

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `progress` | `number` | `undefined` | The current progress |
| `current`? | `string` | `''` | The current record |

###### Returns

`void`

#### Properties

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L70)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`displayOptions`](themes.md#displayoptions)

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L68)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`name`](themes.md#name)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L71)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBar`](themes.md#progressbar)

##### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L72)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBarOptions`](themes.md#progressbaroptions)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L69)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`theme`](themes.md#theme)

***

### ThemedSpinner

Defined in: [themes/themed-spinner.ts:18](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-spinner.ts#L18)

A class to handle themed spinners
 ThemedSpinner

#### Param

The theme to use

#### Param

The display options for the spinner

#### Example

```typescript
const theme = new EasyCLITheme();
const spinner = new ThemedSpinner(theme, 'default');
spinner.start('Loading...');
```

#### Constructors

##### new ThemedSpinner()

> **new ThemedSpinner**(`theme`, `displayOptions`): [`ThemedSpinner`](themes.md#themedspinner)

Defined in: [themes/themed-spinner.ts:28](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-spinner.ts#L28)

Creates an instance of ThemedSpinner

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| `displayOptions` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the spinner |

###### Returns

[`ThemedSpinner`](themes.md#themedspinner)

#### Methods

##### start()

> **start**(`text`, `options`?): `Ora`

Defined in: [themes/themed-spinner.ts:39](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-spinner.ts#L39)

Starts the spinner

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | The text to display |
| `options`? | `Partial`\<`Ora`\> | The options for the spinner |

###### Returns

`Ora`

The spinner instance

##### stop()

> **stop**(): `void`

Defined in: [themes/themed-spinner.ts:51](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-spinner.ts#L51)

Stops the spinner

###### Returns

`void`

***

### ThemedStatusProgressBar

Defined in: [themes/progress/progress-with-status.ts:96](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L96)

A themed status progress bar that shows the progress of a task while also showing the current status of the task

 *  ThemedStatusProgressBar

#### Param

The theme to use

#### Param

The name of the progress bar

#### Param

The display options for the progress bar

#### Param

The options for the progress bar

#### Example

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

#### Extends

- [`ThemedProgressBar`](themes.md#themedprogressbart)\<[`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions)\>

#### Constructors

##### new ThemedStatusProgressBar()

> **new ThemedStatusProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

Defined in: [themes/progress/progress-with-status.ts:97](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L97)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` |
| `name` | `string` | `undefined` |
| `displayOptions` | [`DisplayOptions`](themes.md#displayoptions-3) | `undefined` |
| `progressBarOptions` | [`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions) | `DEFAULT_STATUS_PROGRESS_BAR_OPTIONS` |

###### Returns

[`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`constructor`](themes.md#constructors-1)

#### Methods

##### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/progress-with-status.ts:109](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L109)

An internal method to get the options for the progress bar

###### Returns

`Options`

The options for the progress bar

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`getOptions`](themes.md#getoptions)

##### increment()

> **increment**(`payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:171](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L171)

Increments the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`StatusPayload`](themes.md#statuspayload) | The payload for the status bar |

###### Returns

`void`

##### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/progress-with-status.ts:152](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L152)

Starts the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `initial` | `number` | The initial value for the progress bar |
| `total` | `number` | The total value for the progress bar |

###### Returns

`SingleBar`

an instance of the progress bar

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`start`](themes.md#start)

##### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`stop`](themes.md#stop)

##### update()

> **update**(`progress`, `payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:162](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L162)

Updates the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `progress` | `number` | The current progress value |
| `payload` | [`StatusPayload`](themes.md#statuspayload) | The payload for the status bar |

###### Returns

`void`

#### Properties

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L70)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`displayOptions`](themes.md#displayoptions)

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L68)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`name`](themes.md#name)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L71)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBar`](themes.md#progressbar)

##### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L72)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBarOptions`](themes.md#progressbaroptions)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L69)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`theme`](themes.md#theme)

***

### ThemedTable\<TItem\>

Defined in: [themes/themed-table.ts:67](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-table.ts#L67)

A themed table that extends a cli-table

#### Param

The options for the themed table

#### Example

```typescript
const theme = new EasyCLITheme();
const table = new ThemedTable({
  theme,
  columns: [
    { name: 'Name', data: item => item.name },
    { name: 'Age', data: item => item.age },
  ],
});

table.render([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
]);

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TItem` *extends* `Record`\<`string`, `any`\> | ThemedTable |

#### Constructors

##### new ThemedTable()

> **new ThemedTable**\<`TItem`\>(`__namedParameters`): [`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

Defined in: [themes/themed-table.ts:72](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-table.ts#L72)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ThemedTableOptions`](themes.md#themedtableoptionstitem)\<`TItem`\> |

###### Returns

[`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

#### Methods

##### render()

> **render**(`items`): `void`

Defined in: [themes/themed-table.ts:104](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-table.ts#L104)

Render the table

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | `TItem`[] | The items to render |

###### Returns

`void`

## Interfaces

### StatusPayload

Defined in: [themes/progress/progress-with-status.ts:64](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L64)

Payload for the status bar

 StatusPayload

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="current"></a> `current` | `string` | The current status |
| <a id="error"></a> `error?` | `number` | The error count |
| <a id="success"></a> `success?` | `number` | The success count |
| <a id="warn"></a> `warn?` | `number` | The warn count |

***

### StringDisplayOptions

Defined in: [themes/index.ts:26](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L26)

Options for displaying a string
 StringDisplayOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bgcolor"></a> `bgColor?` | `string` | The background color of the string (hex), support for other formats is planned |
| <a id="bold"></a> `bold?` | `boolean` | Whether to bold the string |
| <a id="color"></a> `color?` | `string` | The color of the string (hex), support for other formats is planned |
| <a id="italic"></a> `italic?` | `boolean` | Whether to italicize the string |
| <a id="strikethrough"></a> `strikethrough?` | `boolean` | Whether to strikethrough the string |
| <a id="underline"></a> `underline?` | `boolean` | Whether to underline the string |

***

### ThemedProgressBarOptions

Defined in: [themes/progress/base.ts:19](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/base.ts#L19)

Options for the progress bar
 ThemedProgressBarOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bardisplayoptions"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the progress bar |
| <a id="completeddisplayoptions"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the completed count |
| <a id="percentagedisplayoptions"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the percentage complete |
| <a id="showcompleted"></a> `showCompleted?` | `boolean` | Whether to show the completed count |
| <a id="showpercentage"></a> `showPercentage?` | `boolean` | Whether to show the percentage complete |
| <a id="showtimeelapsed"></a> `showTimeElapsed?` | `boolean` | Whether to show the time elapsed |
| <a id="showtimeleft"></a> `showTimeLeft?` | `boolean` | Whether to show the time left |
| <a id="timeelapseddisplayoptions"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the time elapsed |
| <a id="timeleftdisplayoptions"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the time left |

***

### ThemedSimpleProgressBarOptions

Defined in: [themes/progress/simple-progress.ts:18](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/simple-progress.ts#L18)

Options for a ThemedSimpleProgressBar that extends a ThemedProgressBar

 *  ThemedSimpleProgressBarOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bardisplayoptions-1"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="completeddisplayoptions-1"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="currentrecorddisplayoptions"></a> `currentRecordDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the current record |
| <a id="percentagedisplayoptions-1"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="showcompleted-1"></a> `showCompleted?` | `boolean` | - |
| <a id="showcurrentrecord"></a> `showCurrentRecord?` | `boolean` | Whether to show the current record |
| <a id="showpercentage-1"></a> `showPercentage?` | `boolean` | - |
| <a id="showtimeelapsed-1"></a> `showTimeElapsed?` | `boolean` | - |
| <a id="showtimeleft-1"></a> `showTimeLeft?` | `boolean` | - |
| <a id="timeelapseddisplayoptions-1"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="timeleftdisplayoptions-1"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |

***

### ThemedStatusProgressBarOptions

Defined in: [themes/progress/progress-with-status.ts:23](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/progress/progress-with-status.ts#L23)

Options for a ThemedStatusProgressBar that extends a ThemedProgressBar

 *  ThemedStatusProgressBarOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bardisplayoptions-2"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="completeddisplayoptions-2"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="currentrecorddisplayoptions-1"></a> `currentRecordDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the current record |
| <a id="errordisplayoptions"></a> `errorDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the error count |
| <a id="percentagedisplayoptions-2"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="showcompleted-2"></a> `showCompleted?` | `boolean` | - |
| <a id="showcurrentrecord-1"></a> `showCurrentRecord?` | `boolean` | Whether to show the current record |
| <a id="showerror"></a> `showError?` | `boolean` | Whether to show the error count |
| <a id="showpercentage-2"></a> `showPercentage?` | `boolean` | - |
| <a id="showsuccess"></a> `showSuccess?` | `boolean` | Whether to show the success count |
| <a id="showtimeelapsed-2"></a> `showTimeElapsed?` | `boolean` | - |
| <a id="showtimeleft-2"></a> `showTimeLeft?` | `boolean` | - |
| <a id="showwarn"></a> `showWarn?` | `boolean` | Whether to show the warn count |
| <a id="successdisplayoptions"></a> `successDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the success count |
| <a id="timeelapseddisplayoptions-2"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="timeleftdisplayoptions-2"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - |
| <a id="warndisplayoptions"></a> `warnDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the warn count |

***

### ThemedTableColumn\<TItem\>

Defined in: [themes/themed-table.ts:17](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-table.ts#L17)

A column in a themed table

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TItem` | `Record`\<`string`, `any`\> | ThemedTableColumn |

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="align"></a> `align?` | `"left"` \| `"right"` \| `"middle"` | The alignment of the column |
| <a id="data"></a> `data` | (`item`: `TItem`) => `string` | A function that returns the value to display |
| <a id="headerstyle"></a> `headerStyle?` | [`DisplayOptions`](themes.md#displayoptions-3) | The style for the header |
| <a id="name-3"></a> `name` | `string` | The name of the column |
| <a id="style"></a> `style?` | [`DisplayOptions`](themes.md#displayoptions-3) \| (`item`) => [`DisplayOptions`](themes.md#displayoptions-3) | The style for the column |
| <a id="width"></a> `width?` | `number` | The width of the column |

***

### ThemedTableOptions\<TItem\>

Defined in: [themes/themed-table.ts:37](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/themed-table.ts#L37)

Options for the themed table

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TItem` | `Record`\<`string`, `any`\> | ThemedTableOptions |

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="columns"></a> `columns` | [`ThemedTableColumn`](themes.md#themedtablecolumntitem)\<`TItem`\>[] | The columns for the table |
| <a id="theme-3"></a> `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use |
| <a id="totalwidth"></a> `totalWidth?` | `number` | The total width of the table |

## Type Aliases

### DisplayOptions

> **DisplayOptions**: `string` \| [`StringDisplayOptions`](themes.md#stringdisplayoptions) \| (`string` \| [`StringDisplayOptions`](themes.md#stringdisplayoptions))[]

Defined in: [themes/index.ts:43](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L43)

Options for displaying a string. Can be a string, a StringDisplayOptions object, or an array of strings and StringDisplayOptions objects.

***

### NamedDisplayOptions

> **NamedDisplayOptions**: `"log"` \| `"error"` \| `"warn"` \| `"info"` \| `"success"` \| `"default"` \| `string`

Defined in: [themes/index.ts:52](https://github.com/patrickeaton/easy-cli/blob/928069631a16c15732a47790d029e4cb5eb95deb/src/themes/index.ts#L52)

Named display options
