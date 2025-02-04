[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLIConfig

# Type Alias: EasyCLIConfig\<TGloablParams\>

> **EasyCLIConfig**\<`TGloablParams`\>: `object`

Defined in: [index.ts:18](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/index.ts#L18)

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
