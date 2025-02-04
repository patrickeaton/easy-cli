[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ConfigureCommandOptions

# Type Alias: ConfigureCommandOptions\<TGlobalParams, TParams\>

> **ConfigureCommandOptions**\<`TGlobalParams`, `TParams`\>: [`CommandSetupOptions`](CommandSetupOptions.md)\<`TGlobalParams`, `TParams`\> & `object`

Defined in: [commands/configure.ts:14](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/configure.ts#L14)

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
