[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ConfigureCommandOptions

# Type Alias: ConfigureCommandOptions\<TGlobalParams, TParams\>

> **ConfigureCommandOptions**\<`TGlobalParams`, `TParams`\>: [`CommandSetupOptions`](CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\> & `object`

Defined in: [commands/configure.ts:14](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/commands/configure.ts#L14)

Options for the configure command

## Type declaration

### globalKeysToUse?

> `optional` **globalKeysToUse**: `string`[]

### transformer()?

> `optional` **transformer**: (`params`) => `any`

#### Parameters

##### params

`TGlobalParams` & `TParams`

#### Returns

`any`

## Type Parameters

• **TGlobalParams**

The global params for the CLI

• **TParams**

The params for the command
