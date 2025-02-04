[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLILoggerResponse

# Class: EasyCLILoggerResponse

Defined in: [logger/index.ts:86](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/logger/index.ts#L86)

A response from a logger
This is used to allow for forcing a log to be output using the `force` method

 EasyCLILoggerResponses

## Example

```typescript
const logger = new EasyCLILogger({ theme: new EasyCLITheme(), verbosity: 0 });
logger.log('Hello, world!'); // Won't be logged because verbosity is 0
logger.log('Hello, world!').force(); // Will be logged
```

## Constructors

### new EasyCLILoggerResponse()

> **new EasyCLILoggerResponse**(`log`, `type`, `logged`): [`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

Defined in: [logger/index.ts:87](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/logger/index.ts#L87)

#### Parameters

##### log

`string`

##### type

[`SupportedLogType`](../type-aliases/SupportedLogType.md)

##### logged

`boolean` = `false`

#### Returns

[`EasyCLILoggerResponse`](EasyCLILoggerResponse.md)

## Methods

### force()

> **force**(): `void`

Defined in: [logger/index.ts:97](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/logger/index.ts#L97)

Forces the log to be output

#### Returns

`void`
