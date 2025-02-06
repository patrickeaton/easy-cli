[Easy CLI](README.md) / themes

# themes

Support for theming for command line applications, it includes support for verbosity, themed text display, spinners, and progress bars.

## Classes

### EasyCLITheme

Defined in: [themes/index.ts:105](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L105)

A theme for the CLI, that allows for customizing the look and feel of the CLI, generating logs, tables, spinners, and progress bars.

 EasyCLITheme

#### Example

```typescript
const theme = new EasyCLITheme(
 0, // Set the verbosity level to 0
 {
  log: { color: '#F5F5F5' }, // Update the log color
  error: { color: '#FF5555', bold: true }, // Update the error color and make it bold
  custom: { color: '#55FF55' }, // Add a custom named display option
 }
);
const logger = theme.getLogger();
logger.log('Hello, world!');
```

#### Constructors

##### new EasyCLITheme()

> **new EasyCLITheme**(`verbosity`?, `namedDisplayOptions`?): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:125](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L125)

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

Defined in: [themes/index.ts:191](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L191)

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

##### setVerbosity()

> **setVerbosity**(`verbosity`): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:213](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L213)

Sets the verbosity level of the theme

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `verbosity` | `number` |

###### Returns

[`EasyCLITheme`](themes.md#easyclitheme)

##### setNamedDisplayOption()

> **setNamedDisplayOption**(`name`, `options`): [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/index.ts:226](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L226)

Sets the named display options for the theme

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options` | [`StringDisplayOptions`](themes.md#stringdisplayoptions) |

###### Returns

[`EasyCLITheme`](themes.md#easyclitheme)

##### getLogger()

> **getLogger**(): [`EasyCLILogger`](themes.md#easyclilogger)

Defined in: [themes/index.ts:239](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L239)

Gets a logger with the theme

###### Returns

[`EasyCLILogger`](themes.md#easyclilogger)

##### getTable()

> **getTable**\<`TItem`\>(`columns`?, `totalWidth`?): [`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

Defined in: [themes/index.ts:266](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L266)

Gets a table with the theme

###### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TItem` *extends* `Record`\<`string`, `any`\> | `any`[] | The datatype for the items in the table. |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `columns`? | [`ThemedTableColumn`](themes.md#themedtablecolumntitem)\<`TItem`\>[] | `[]` |
| `totalWidth`? | `number` | `120` |

###### Returns

[`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

##### getSpinner()

> **getSpinner**(`format`?): [`ThemedSpinner`](themes.md#themedspinner)

Defined in: [themes/index.ts:287](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L287)

Gets a spinner with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |

###### Returns

[`ThemedSpinner`](themes.md#themedspinner)

##### getSimpleProgressBar()

> **getSimpleProgressBar**(`name`, `format`?, `options`?): [`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

Defined in: [themes/index.ts:308](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L308)

Gets a simple progress bar with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |
| `options`? | [`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions) | `{}` |

###### Returns

[`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

##### getStatusProgressBar()

> **getStatusProgressBar**(`name`, `format`?, `options`?): [`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

Defined in: [themes/index.ts:332](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L332)

Gets a status progress bar with the theme

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `format`? | [`DisplayOptions`](themes.md#displayoptions-3) | `'default'` |
| `options`? | [`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions) | `{}` |

###### Returns

[`ThemedStatusProgressBar`](themes.md#themedstatusprogressbar)

***

### EasyCLILoggerResponse

Defined in: [themes/logger/index.ts:86](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L86)

A response from a logger
This is used to allow for forcing a log to be output using the `force` method

 EasyCLILoggerResponses

#### Example

```typescript
const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0 });
logger.log('Hello, world!'); // Won't be logged because verbosity is 0
logger.log('Hello, world!').force(); // Will be logged
```

#### Constructors

##### new EasyCLILoggerResponse()

> **new EasyCLILoggerResponse**(`log`, `type`, `logged`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:87](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L87)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `log` | `string` | `undefined` |
| `type` | [`SupportedLogType`](themes.md#supportedlogtype) | `undefined` |
| `logged` | `boolean` | `false` |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

#### Methods

##### force()

> **force**(): `void`

Defined in: [themes/logger/index.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L97)

Forces the log to be output

###### Returns

`void`

***

### EasyCLILogger

Defined in: [themes/logger/index.ts:150](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L150)

A logger for use with CLI applicatiions. This logger allows for logging with different verbosity levels and themes

 EasyCLILogger

#### Example

```typescript
const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0, timestamp: false });
logger.log('Hello, world!'); // Won't be logged because verbosity is 0
logger.log('Hello, world!').force(); // Will be logged due to force
logger.warn('This is a warning!'); // Won't be logged because verbosity is 0
logger.error('This is an error!') // Will be logged

const logs = logger.getExecutionLogs();

```

#### Constructors

##### new EasyCLILogger()

> **new EasyCLILogger**(`options`): [`EasyCLILogger`](themes.md#easyclilogger)

Defined in: [themes/logger/index.ts:177](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L177)

Instantiates a new logger with the given theme and verbosity level.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`EasyCLILoggerProps`](themes.md#easycliloggerprops) | The configuration props for the logger |

###### Returns

[`EasyCLILogger`](themes.md#easyclilogger)

###### Example

```typescript
{
 theme: new EasyCLITheme(),
 verbosity?: 0,
 verbosityThresholds?: {
   error: 0, // Always log errors
   success: 0, // Always log success
   warn: 1, // Log warnings when verbosity is 1 or higher
   log: 2, // Log logs when verbosity is 2 or higher
   info: 3, // Log info when verbosity is 3 or higher
  },
}
```

#### Methods

##### log()

> **log**(...`args`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:259](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L259)

Writes a log to the console depending on the verbosity level, using the log display options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown`[] | The arguments to log |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

- The response from the logger

###### Example

```typescript
logger.log('Hello, world!');
```

##### warn()

> **warn**(...`args`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:273](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L273)

Writes a warning to the console depending on the verbosity level, using the log display options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown`[] | The arguments to log |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

- The response from the logger

###### Example

```typescript
logger.warn('Hello, world!');
```

##### info()

> **info**(...`args`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:288](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L288)

Writes an info message to the console depending on the verbosity level, using the log display options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown`[] | The arguments to log |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

- The response from the logger

###### Example

```typescript
logger.info('Hello, world!');
```

##### error()

> **error**(...`args`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:303](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L303)

Writes an error to the console depending on the verbosity level, using the log display options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown`[] | The arguments to log |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

- The response from the logger

###### Example

```typescript
logger.error('Hello, world!');
```

##### success()

> **success**(...`args`): [`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

Defined in: [themes/logger/index.ts:318](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L318)

Writes a success to the console depending on the verbosity level, using the log display options.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown`[] | The arguments to log |

###### Returns

[`EasyCLILoggerResponse`](themes.md#easycliloggerresponse)

- The response from the logger

###### Example

```typescript
logger.success('Hello, world!');
```

##### printFormattedString()

> **printFormattedString**(...`args`): `void`

Defined in: [themes/logger/index.ts:333](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L333)

Takes a list of arguments and prints them to the console in the format provided.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | (`string` \| \{ `text`: `string`; `format`: [`DisplayOptions`](themes.md#displayoptions-3); \})[] | The arguments to print |

###### Returns

`void`

###### Example

```typescript
// Prints Hello World! in the default format and then in the info format
logger.printFormattedString('Hello, world!', { text: 'Hello, world!', format: 'info' });
```

##### getExecutionLogs()

> **getExecutionLogs**(): `string`[]

Defined in: [themes/logger/index.ts:373](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L373)

Gets the execution logs, including logs that were not output due to verbosity.
This is useful for debugging and logging to a file after execution.

###### Returns

`string`[]

- The execution logs

###### Example

```typescript
const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0 });
logger.log('Hello, world!'); // Won't be logged because verbosity is 0
logger.log('Hello, world!').force(); // Will be logged
logger.warn('This is a warning!'); // Won't be logged because verbosity is 0
logger.error('This is an error!') // Will be logged

const logs = logger.getExecutionLogs();

console.log(logs);
// Will display, all logs, including those that weren't output.
```

***

### ThemedProgressBar\<T\>

Defined in: [themes/progress/base.ts:65](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L65)

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

Defined in: [themes/progress/base.ts:74](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L74)

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

Defined in: [themes/progress/base.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L94)

An internal method to get the options for the progress bar

###### Returns

`Options`

The options for the progress bar

##### start()

> **start**(`initial`, `total`, `payload`, `options`): `SingleBar`

Defined in: [themes/progress/base.ts:166](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L166)

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

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

#### Properties

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L68)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L69)

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L70)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L71)

##### progressBarOptions

> `protected` **progressBarOptions**: `T`

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L72)

***

### ThemedStatusProgressBar

Defined in: [themes/progress/progress-with-status.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L96)

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

Defined in: [themes/progress/progress-with-status.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L97)

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

[`ThemedProgressBar`](themes.md#themedprogressbart).[`constructor`](themes.md#constructors-3)

#### Methods

##### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`stop`](themes.md#stop)

##### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/progress-with-status.ts:109](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L109)

An internal method to get the options for the progress bar

###### Returns

`Options`

The options for the progress bar

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`getOptions`](themes.md#getoptions)

##### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/progress-with-status.ts:152](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L152)

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

##### update()

> **update**(`progress`, `payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:162](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L162)

Updates the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `progress` | `number` | The current progress value |
| `payload` | [`StatusPayload`](themes.md#statuspayload) | The payload for the status bar |

###### Returns

`void`

##### increment()

> **increment**(`payload`): `void`

Defined in: [themes/progress/progress-with-status.ts:171](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L171)

Increments the progress bar

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `payload` | [`StatusPayload`](themes.md#statuspayload) | The payload for the status bar |

###### Returns

`void`

#### Properties

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L68)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`name`](themes.md#name)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L69)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`theme`](themes.md#theme)

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L70)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`displayOptions`](themes.md#displayoptions)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L71)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBar`](themes.md#progressbar)

##### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedStatusProgressBarOptions`](themes.md#themedstatusprogressbaroptions)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L72)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBarOptions`](themes.md#progressbaroptions)

***

### ThemedSimpleProgressBar

Defined in: [themes/progress/simple-progress.ts:55](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L55)

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
```

#### Extends

- [`ThemedProgressBar`](themes.md#themedprogressbart)\<[`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions)\>

#### Constructors

##### new ThemedSimpleProgressBar()

> **new ThemedSimpleProgressBar**(`theme`, `name`, `displayOptions`, `progressBarOptions`): [`ThemedSimpleProgressBar`](themes.md#themedsimpleprogressbar)

Defined in: [themes/progress/simple-progress.ts:56](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L56)

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

[`ThemedProgressBar`](themes.md#themedprogressbart).[`constructor`](themes.md#constructors-3)

#### Methods

##### stop()

> **stop**(): `void`

Defined in: [themes/progress/base.ts:183](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L183)

Stops the progress bar

###### Returns

`void`

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`stop`](themes.md#stop)

##### getOptions()

> `protected` **getOptions**(): `Options`

Defined in: [themes/progress/simple-progress.ts:71](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L71)

An internal method to get the options for the progress bar

###### Returns

`Options`

###### Overrides

[`ThemedProgressBar`](themes.md#themedprogressbart).[`getOptions`](themes.md#getoptions)

##### start()

> **start**(`initial`, `total`): `SingleBar`

Defined in: [themes/progress/simple-progress.ts:93](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L93)

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

##### update()

> **update**(`progress`, `current`?): `void`

Defined in: [themes/progress/simple-progress.ts:103](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L103)

Updates the progress bar

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `progress` | `number` | `undefined` | The current progress |
| `current`? | `string` | `''` | The current record |

###### Returns

`void`

##### increment()

> **increment**(`current`?): `void`

Defined in: [themes/progress/simple-progress.ts:114](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L114)

Increments the progress bar by one.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `current`? | `string` | `''` | The current record |

###### Returns

`void`

#### Properties

##### name

> `protected` **name**: `string`

Defined in: [themes/progress/base.ts:68](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L68)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`name`](themes.md#name)

##### theme

> `protected` **theme**: [`EasyCLITheme`](themes.md#easyclitheme)

Defined in: [themes/progress/base.ts:69](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L69)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`theme`](themes.md#theme)

##### displayOptions

> `protected` **displayOptions**: [`DisplayOptions`](themes.md#displayoptions-3)

Defined in: [themes/progress/base.ts:70](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L70)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`displayOptions`](themes.md#displayoptions)

##### progressBar

> `protected` **progressBar**: `null` \| `SingleBar`

Defined in: [themes/progress/base.ts:71](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L71)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBar`](themes.md#progressbar)

##### progressBarOptions

> `protected` **progressBarOptions**: [`ThemedSimpleProgressBarOptions`](themes.md#themedsimpleprogressbaroptions)

Defined in: [themes/progress/base.ts:72](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L72)

###### Inherited from

[`ThemedProgressBar`](themes.md#themedprogressbart).[`progressBarOptions`](themes.md#progressbaroptions)

***

### ThemedSpinner

Defined in: [themes/themed-spinner.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-spinner.ts#L19)

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

Defined in: [themes/themed-spinner.ts:29](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-spinner.ts#L29)

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

Defined in: [themes/themed-spinner.ts:42](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-spinner.ts#L42)

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

Defined in: [themes/themed-spinner.ts:54](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-spinner.ts#L54)

Stops the spinner

###### Returns

`void`

***

### ThemedTable\<TItem\>

Defined in: [themes/themed-table.ts:89](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L89)

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
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TItem` *extends* `Record`\<`string`, `any`\> | ThemedTable |

#### Constructors

##### new ThemedTable()

> **new ThemedTable**\<`TItem`\>(`__namedParameters`): [`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

Defined in: [themes/themed-table.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L94)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ThemedTableOptions`](themes.md#themedtableoptionstitem)\<`TItem`\> |

###### Returns

[`ThemedTable`](themes.md#themedtabletitem)\<`TItem`\>

#### Methods

##### render()

> **render**(`items`): `void`

Defined in: [themes/themed-table.ts:127](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L127)

Render the table to the console

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | `TItem`[] | The items to render |

###### Returns

`void`

## Interfaces

### StringDisplayOptions

Defined in: [themes/index.ts:41](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L41)

Options for displaying a string
 StringDisplayOptions

#### Example

```typescript
// Bold Red Text
const options: StringDisplayOptions = {
 bold: true,
 color: '#FF5555',
};

// Italicized Blue Text
const options: StringDisplayOptions = {
  italic: true,
  color: '#5555FF',
};
```

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bold"></a> `bold?` | `boolean` | Whether to bold the string | [themes/index.ts:42](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L42) |
| <a id="italic"></a> `italic?` | `boolean` | Whether to italicize the string | [themes/index.ts:43](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L43) |
| <a id="underline"></a> `underline?` | `boolean` | Whether to underline the string | [themes/index.ts:44](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L44) |
| <a id="strikethrough"></a> `strikethrough?` | `boolean` | Whether to strikethrough the string | [themes/index.ts:45](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L45) |
| <a id="color"></a> `color?` | `string` | The color of the string (hex), support for other formats is planned | [themes/index.ts:48](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L48) |
| <a id="bgcolor"></a> `bgColor?` | `string` | The background color of the string (hex), support for other formats is planned | [themes/index.ts:49](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L49) |

***

### ThemedProgressBarOptions

Defined in: [themes/progress/base.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L19)

Options for the progress bar
 ThemedProgressBarOptions

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bardisplayoptions"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the progress bar | [themes/progress/base.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L20) |
| <a id="showpercentage"></a> `showPercentage?` | `boolean` | Whether to show the percentage complete | [themes/progress/base.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L21) |
| <a id="percentagedisplayoptions"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the percentage complete | [themes/progress/base.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L22) |
| <a id="showtimeleft"></a> `showTimeLeft?` | `boolean` | Whether to show the time left | [themes/progress/base.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L23) |
| <a id="timeleftdisplayoptions"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the time left | [themes/progress/base.ts:24](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L24) |
| <a id="showtimeelapsed"></a> `showTimeElapsed?` | `boolean` | Whether to show the time elapsed | [themes/progress/base.ts:25](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L25) |
| <a id="timeelapseddisplayoptions"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the time elapsed | [themes/progress/base.ts:26](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L26) |
| <a id="showcompleted"></a> `showCompleted?` | `boolean` | Whether to show the completed count | [themes/progress/base.ts:27](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L27) |
| <a id="completeddisplayoptions"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | The display options for the completed count | [themes/progress/base.ts:28](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L28) |

***

### ThemedStatusProgressBarOptions

Defined in: [themes/progress/progress-with-status.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L23)

Options for a ThemedStatusProgressBar that extends a ThemedProgressBar

 *  ThemedStatusProgressBarOptions

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bardisplayoptions-1"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L20) |
| <a id="showpercentage-1"></a> `showPercentage?` | `boolean` | - | [themes/progress/base.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L21) |
| <a id="percentagedisplayoptions-1"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L22) |
| <a id="showtimeleft-1"></a> `showTimeLeft?` | `boolean` | - | [themes/progress/base.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L23) |
| <a id="timeleftdisplayoptions-1"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:24](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L24) |
| <a id="showtimeelapsed-1"></a> `showTimeElapsed?` | `boolean` | - | [themes/progress/base.ts:25](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L25) |
| <a id="timeelapseddisplayoptions-1"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:26](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L26) |
| <a id="showcompleted-1"></a> `showCompleted?` | `boolean` | - | [themes/progress/base.ts:27](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L27) |
| <a id="completeddisplayoptions-1"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:28](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L28) |
| <a id="showcurrentrecord"></a> `showCurrentRecord?` | `boolean` | Whether to show the current record | [themes/progress/progress-with-status.ts:24](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L24) |
| <a id="currentrecorddisplayoptions"></a> `currentRecordDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the current record | [themes/progress/progress-with-status.ts:25](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L25) |
| <a id="showsuccess"></a> `showSuccess?` | `boolean` | Whether to show the success count | [themes/progress/progress-with-status.ts:26](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L26) |
| <a id="successdisplayoptions"></a> `successDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the success count | [themes/progress/progress-with-status.ts:27](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L27) |
| <a id="showwarn"></a> `showWarn?` | `boolean` | Whether to show the warn count | [themes/progress/progress-with-status.ts:28](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L28) |
| <a id="warndisplayoptions"></a> `warnDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the warn count | [themes/progress/progress-with-status.ts:29](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L29) |
| <a id="showerror"></a> `showError?` | `boolean` | Whether to show the error count | [themes/progress/progress-with-status.ts:30](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L30) |
| <a id="errordisplayoptions"></a> `errorDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the error count | [themes/progress/progress-with-status.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L31) |

***

### StatusPayload

Defined in: [themes/progress/progress-with-status.ts:64](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L64)

Payload for the status bar

 StatusPayload

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="current"></a> `current` | `string` | The current status | [themes/progress/progress-with-status.ts:65](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L65) |
| <a id="success-1"></a> `success?` | `number` | The success count | [themes/progress/progress-with-status.ts:66](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L66) |
| <a id="warn-1"></a> `warn?` | `number` | The warn count | [themes/progress/progress-with-status.ts:67](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L67) |
| <a id="error-1"></a> `error?` | `number` | The error count | [themes/progress/progress-with-status.ts:68](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/progress-with-status.ts#L68) |

***

### ThemedSimpleProgressBarOptions

Defined in: [themes/progress/simple-progress.ts:18](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L18)

Options for a ThemedSimpleProgressBar that extends a ThemedProgressBar

 ThemedSimpleProgressBarOptions

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bardisplayoptions-2"></a> `barDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L20) |
| <a id="showpercentage-2"></a> `showPercentage?` | `boolean` | - | [themes/progress/base.ts:21](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L21) |
| <a id="percentagedisplayoptions-2"></a> `percentageDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:22](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L22) |
| <a id="showtimeleft-2"></a> `showTimeLeft?` | `boolean` | - | [themes/progress/base.ts:23](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L23) |
| <a id="timeleftdisplayoptions-2"></a> `timeLeftDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:24](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L24) |
| <a id="showtimeelapsed-2"></a> `showTimeElapsed?` | `boolean` | - | [themes/progress/base.ts:25](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L25) |
| <a id="timeelapseddisplayoptions-2"></a> `timeElapsedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:26](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L26) |
| <a id="showcompleted-2"></a> `showCompleted?` | `boolean` | - | [themes/progress/base.ts:27](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L27) |
| <a id="completeddisplayoptions-2"></a> `completedDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | - | [themes/progress/base.ts:28](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/base.ts#L28) |
| <a id="showcurrentrecord-1"></a> `showCurrentRecord?` | `boolean` | Whether to show the current record | [themes/progress/simple-progress.ts:19](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L19) |
| <a id="currentrecorddisplayoptions-1"></a> `currentRecordDisplayOptions?` | [`DisplayOptions`](themes.md#displayoptions-3) | Display options for the current record | [themes/progress/simple-progress.ts:20](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/progress/simple-progress.ts#L20) |

***

### ThemedTableColumn\<TItem\>

Defined in: [themes/themed-table.ts:28](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L28)

A column in a themed table

#### Example

```typescript
{
  name: 'Name',
  data: item => item.name
  style: item => item.age > 30 ? 'warn' : 'default',
  headerStyle: 'info',
  width: 20,
};
```

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TItem` | `Record`\<`string`, `any`\> | The object type for the items in the table ThemedTableColumn |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name-3"></a> `name` | `string` | The name of the column | [themes/themed-table.ts:29](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L29) |
| <a id="data"></a> `data` | (`item`: `TItem`) => `string` \| `number` | A function that returns the value to display | [themes/themed-table.ts:30](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L30) |
| <a id="style"></a> `style?` | [`DisplayOptions`](themes.md#displayoptions-3) \| (`item`) => [`DisplayOptions`](themes.md#displayoptions-3) | The style for the column | [themes/themed-table.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L31) |
| <a id="headerstyle"></a> `headerStyle?` | [`DisplayOptions`](themes.md#displayoptions-3) | The style for the header | [themes/themed-table.ts:32](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L32) |
| <a id="width"></a> `width?` | `number` | The width of the column | [themes/themed-table.ts:33](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L33) |
| <a id="align"></a> `align?` | `"left"` \| `"right"` \| `"middle"` | The alignment of the column | [themes/themed-table.ts:34](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L34) |

***

### ThemedTableOptions\<TItem\>

Defined in: [themes/themed-table.ts:59](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L59)

Options for the themed table

#### Example

```typescript
{
 theme: new EasyCLITheme(),
 columns: [
   { name: 'Name', data: item => item.name },
   { name: 'Age', data: item => item.age },
 ],
}
```

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TItem` | `Record`\<`string`, `any`\> | ThemedTableOptions |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="theme-3"></a> `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use | [themes/themed-table.ts:60](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L60) |
| <a id="columns"></a> `columns` | [`ThemedTableColumn`](themes.md#themedtablecolumntitem)\<`TItem`\>[] | The columns for the table | [themes/themed-table.ts:61](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L61) |
| <a id="totalwidth"></a> `totalWidth?` | `number` | The total width of the table | [themes/themed-table.ts:62](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/themed-table.ts#L62) |

## Type Aliases

### DisplayOptions

> **DisplayOptions**: `string` \| [`StringDisplayOptions`](themes.md#stringdisplayoptions) \| (`string` \| [`StringDisplayOptions`](themes.md#stringdisplayoptions))[]

Defined in: [themes/index.ts:58](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L58)

Options for displaying a string. Can be a string, a StringDisplayOptions object, or an array of strings and StringDisplayOptions objects.

***

### NamedDisplayOptions

> **NamedDisplayOptions**: `"log"` \| `"error"` \| `"warn"` \| `"info"` \| `"success"` \| `"default"` \| `string`

Defined in: [themes/index.ts:67](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/index.ts#L67)

Named display options

***

### SupportedLogType

> **SupportedLogType**: `"log"` \| `"info"` \| `"warn"` \| `"error"` \| `"success"`

Defined in: [themes/logger/index.ts:9](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L9)

Supported log types

***

### EasyCLILoggerProps

> **EasyCLILoggerProps**: `object`

Defined in: [themes/logger/index.ts:126](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L126)

The properties for the logger

#### Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="theme-4"></a> `theme` | [`EasyCLITheme`](themes.md#easyclitheme) | [themes/logger/index.ts:127](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L127) |
| <a id="verbosity"></a> `verbosity`? | `number` | [themes/logger/index.ts:128](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L128) |
| <a id="verbositythresholds"></a> `verbosityThresholds`? | `Record`\<[`SupportedLogType`](themes.md#supportedlogtype), `number`\> | [themes/logger/index.ts:129](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L129) |
| <a id="timestamp"></a> `timestamp`? | `boolean` | [themes/logger/index.ts:130](https://github.com/patrickeaton/easy-cli/blob/master/src/themes/logger/index.ts#L130) |

#### Param

The theme to use for the logger

#### Param

The verbosity level to use (Default: 0)

#### Param

The verbosity thresholds to use

#### Param

Whether to include a timestamp in the execution logs (Default: true)

#### Example

```typescript
{
 theme: new EasyCLITheme(),
 verbosity?: 0,
 verbosityThresholds?: {
   error: 0,
   success: 0,
   warn: 1,
   log: 2,
   info: 3,
 },
 timestamp?: true,
}
```
