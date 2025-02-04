[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / ConfigFileRecursionBehaviour

# Type Alias: ConfigFileRecursionBehaviour

> **ConfigFileRecursionBehaviour**: `"no_recursion"` \| `"prefer_highest"` \| `"prefer_lowest"` \| `"merge_highest_first"` \| `"merge_lowest_first"`

Defined in: [config/index.ts:29](https://github.com/patrickeaton/easy-cli/blob/273fbeda7c9fba29e0eebd0183c0f5c4b12461f3/src/config/index.ts#L29)

The behaviour to use when handling recursive configuration files.

## Example

```ts
no_recursion - Only look in the current directory for the configuration file.
prefer_highest - Look in the current directory and all parent directories, and use the configuration file found in the highest directory.
prefer_lowest - Look in the current directory and all parent directories, and use the configuration file found in the lowest directory.
merge_highest_first - Look in the current directory and all parent directories, and merge the configuration files found in the highest directories first.
merge_lowest_first - Look in the current directory and all parent directories, and merge the configuration files found in the lowest directories first.
```
