[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ConfigFileParams

# Type Alias: ConfigFileParams

> **ConfigFileParams**: `object`

Defined in: [config/index.ts:48](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/config/index.ts#L48)

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
