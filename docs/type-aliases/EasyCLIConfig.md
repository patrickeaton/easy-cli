[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIConfig

# Type Alias: EasyCLIConfig\<TGloablParams\>

> **EasyCLIConfig**\<`TGloablParams`\>: `object`

Defined in: [index.ts:18](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/index.ts#L18)

The configuration for the EasyCLI

## Type Parameters

• **TGloablParams**

The global params for the CLI

## Type declaration

### commands?

> `optional` **commands**: [`EasyCLICommand`](../classes/EasyCLICommand.md)\<`any`, `TGloablParams`\>[]

### defaultCommand?

> `optional` **defaultCommand**: `string`

### executionName?

> `optional` **executionName**: `string`

### globalFlags?

> `optional` **globalFlags**: [`CommandOptionObject`](CommandOptionObject.md)\<\{\}, `TGloablParams`\>
