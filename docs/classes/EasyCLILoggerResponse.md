[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLILoggerResponse

# Class: EasyCLILoggerResponse

Defined in: [logger/index.ts:86](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L86)

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

Defined in: [logger/index.ts:87](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L87)

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

Defined in: [logger/index.ts:97](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/logger/index.ts#L97)

Forces the log to be output

#### Returns

`void`
