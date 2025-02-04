[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLILogger

# Class: EasyCLILogger

Defined in: [logger/index.ts:66](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L66)

## Constructors

### new EasyCLILogger()

> **new EasyCLILogger**(`__namedParameters`): [`EasyCLILogger`](EasyCLILogger.md)

Defined in: [logger/index.ts:73](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L73)

#### Parameters

##### \_\_namedParameters

###### theme

[`EasyCLITheme`](EasyCLITheme.md)

###### timestamp

`boolean` = `true`

###### verbosity

`number` = `0`

###### verbosityThresholds

`Record`\<[`SupportedLogType`](../type-aliases/SupportedLogType.md), `number`\> = `...`

#### Returns

[`EasyCLILogger`](EasyCLILogger.md)

## Methods

### error()

> **error**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:142](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L142)

#### Parameters

##### args

...`unknown`[]

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

***

### getExecutionLogs()

> **getExecutionLogs**(): `string`[]

Defined in: [logger/index.ts:170](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L170)

#### Returns

`string`[]

***

### info()

> **info**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L138)

#### Parameters

##### args

...`unknown`[]

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

***

### log()

> **log**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:130](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L130)

#### Parameters

##### args

...`unknown`[]

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

***

### printFormattedString()

> **printFormattedString**(...`args`): `void`

Defined in: [logger/index.ts:150](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L150)

#### Parameters

##### args

...(`string` \| \{ `format`: [`DisplayOptions`](../type-aliases/DisplayOptions.md); `text`: `string`; \})[]

#### Returns

`void`

***

### success()

> **success**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:146](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L146)

#### Parameters

##### args

...`unknown`[]

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

***

### warn()

> **warn**(...`args`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:134](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/logger/index.ts#L134)

#### Parameters

##### args

...`unknown`[]

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)
