[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / CommandSetupOptions

# Type Alias: CommandSetupOptions\<TGlobalParams, TParams\>

> **CommandSetupOptions**\<`TGlobalParams`, `TParams`\>: `object`

Defined in: [commands/index.ts:44](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/commands/index.ts#L44)

Optional Arguments for setting up a command.

## Type Parameters

• **TGlobalParams**

The global params for the CLI

• **TParams**

The params for the command

## Type declaration

### aliases?

> `optional` **aliases**: `string`[]

### args?

> `optional` **args**: [`CommandOptionObject`](CommandOptionObject.md)\<`TGlobalParams`, `TParams`\>

### description?

> `optional` **description**: `string`

### flags?

> `optional` **flags**: [`CommandOptionObject`](CommandOptionObject.md)\<`TGlobalParams`, `TParams`\>

### prompts?

> `optional` **prompts**: [`CommandOptionObject`](CommandOptionObject.md)\<`TGlobalParams`, `TParams`\>

### skipConfig?

> `optional` **skipConfig**: `boolean`
