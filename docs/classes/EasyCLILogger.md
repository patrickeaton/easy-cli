[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLILogger

# Class: EasyCLILogger

Defined in: [logger/index.ts:107](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L107)

A logger for the CLI
This logger allows for logging with different verbosity levels and themes

## Constructors

### new EasyCLILogger()

> **new EasyCLILogger**(`options`): [`EasyCLILogger`](EasyCLILogger.md)

Defined in: [logger/index.ts:124](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L124)

Creates a new logger

#### Parameters

##### options

The options for the logger

###### theme

[`EasyCLITheme`](EasyCLITheme.md)

The theme to use for the logger

###### timestamp

`boolean` = `true`

Whether to include a timestamp in the execution logs (Default: true)

###### verbosity

`number` = `0`

The verbosity level to use (Default: 0)

###### verbosityThresholds

`Record`\<[`SupportedLogType`](../type-aliases/SupportedLogType.md), `number`\> = `...`

The verbosity thresholds to use

#### Returns

[`EasyCLILogger`](EasyCLILogger.md)

## Methods

### error()

> **error**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:236](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L236)

Logs an error message

#### Parameters

##### args

...`unknown`[]

The arguments to log

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

- The response from the logger

***

### getExecutionLogs()

> **getExecutionLogs**(): `string`[]

Defined in: [logger/index.ts:281](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L281)

Gets the execution logs, including logs that were not output due to verbosity

#### Returns

`string`[]

- The execution logs

***

### info()

> **info**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:226](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L226)

Logs an info message

#### Parameters

##### args

...`unknown`[]

The arguments to log

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

- The response from the logger

***

### log()

> **log**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:206](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L206)

Logs a message

#### Parameters

##### args

...`unknown`[]

The arguments to log

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

- The response from the logger

***

### printFormattedString()

> **printFormattedString**(...`args`): `void`

Defined in: [logger/index.ts:255](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L255)

Prints a formatted string to the console

#### Parameters

##### args

...(`string` \| \{ `format`: [`DisplayOptions`](../type-aliases/DisplayOptions.md); `text`: `string`; \})[]

The arguments to print

#### Returns

`void`

***

### success()

> **success**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:246](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L246)

Logs a success message

#### Parameters

##### args

...`unknown`[]

The arguments to log

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

- The response from the logger

***

### warn()

> **warn**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:216](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L216)

Logs a warning message

#### Parameters

##### args

...`unknown`[]

The arguments to log

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

- The response from the logger
