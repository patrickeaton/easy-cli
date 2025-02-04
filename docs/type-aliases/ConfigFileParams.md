[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ConfigFileParams

# Type Alias: ConfigFileParams

> **ConfigFileParams**: `object`

Defined in: [config/index.ts:48](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L48)

The parameters to use when loading a configuration file.

## Type declaration

### extensions

> **extensions**: [`ValidExtensions`](ValidExtensions.md)[]

### failOnMissing?

> `optional` **failOnMissing**: `boolean`

### filename

> **filename**: `string`

### path?

> `optional` **path**: `string`

### recursion?

> `optional` **recursion**: [`ConfigFileRecursionBehaviour`](ConfigFileRecursionBehaviour.md)

### requirePath?

> `optional` **requirePath**: `boolean`

### root?

> `optional` **root**: `"cwd"` \| `"home"` \| `"app-root"`
