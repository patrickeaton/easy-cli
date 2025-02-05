[easy-cli](README.md) / config

# config

This module contains configuration management for the Easy CLI Library

## Classes

### EasyCLIConfigFile

Defined in: [config/index.ts:76](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L76)

A class to handle loading and saving configuration files.

#### Example

```typescript
const config = new EasyCLIConfigFile({
  filename: 'config',
  extensions: ['json', 'js', 'ts'],
  recursion: 'prefer_highest',
  root: 'cwd',
});

const configuration = config.load();
```

#### Constructors

##### new EasyCLIConfigFile()

> **new EasyCLIConfigFile**(`params`): [`EasyCLIConfigFile`](config.md#easycliconfigfile)

Defined in: [config/index.ts:89](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L89)

Create a new configuration file handler.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ConfigFileParams`](config.md#configfileparams) | The parameters to use when loading the configuration file |

###### Returns

[`EasyCLIConfigFile`](config.md#easycliconfigfile)

#### Methods

##### load()

> **load**\<`TConfig`\>(`path`): `TConfig`

Defined in: [config/index.ts:283](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L283)

Load a configuration file for the given path.

###### Type Parameters

| Type Parameter |
| ------ |
| `TConfig` *extends* `Record`\<`string`, `any`\> |

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `path` | `null` \| `string` | `null` | An optional path override to use when loading the configuration file, otherwise it will use the default path. |

###### Returns

`TConfig`

##### fileExists()

> **fileExists**(`filePath`): `boolean`

Defined in: [config/index.ts:317](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L317)

Check if a configuration file exists.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `filePath` | `null` \| `string` | `null` | An optional file path to use instead of the default otherwise it will scan using the given rules. |

###### Returns

`boolean`

boolean Whether or not the configuration file exists

##### save()

> **save**\<`TConfig`\>(`config`, `filePath`): `Promise`\<`void`\>

Defined in: [config/index.ts:329](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L329)

Save a configuration object to a file.

###### Type Parameters

| Type Parameter |
| ------ |
| `TConfig` *extends* `Record`\<`string`, `any`\> |

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | `TConfig` | `undefined` | The configuration object to save |
| `filePath` | `null` \| `string` | `null` | The file path to save the configuration to |

###### Returns

`Promise`\<`void`\>

## Interfaces

### ConfigFileParams

Defined in: [config/index.ts:51](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L51)

The parameters to use when loading a configuration file.

  ConfigFileParams

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | The base filename to look for, without the extension. | [config/index.ts:52](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L52) |
| <a id="extensions"></a> `extensions` | [`ValidExtensions`](config.md#validextensions)[] | What file extensions to look for, in order of preference | [config/index.ts:53](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L53) |
| <a id="recursion"></a> `recursion?` | [`ConfigFileRecursionBehaviour`](config.md#configfilerecursionbehaviour) | How to handle recursive config files | [config/index.ts:54](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L54) |
| <a id="root"></a> `root?` | `"home"` \| `"cwd"` \| `"app-root"` | Where to start looking for the config file | [config/index.ts:55](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L55) |
| <a id="path"></a> `path?` | `string` | The path to search for the config file | [config/index.ts:56](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L56) |
| <a id="requirepath"></a> `requirePath?` | `boolean` | Whether or not to require the path to exist | [config/index.ts:57](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L57) |
| <a id="failonmissing"></a> `failOnMissing?` | `boolean` | Whether or not to fail if the file is missing | [config/index.ts:58](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L58) |

## Type Aliases

### ValidExtensions

> **ValidExtensions**: `"json"` \| `"js"` \| `"ts"`

Defined in: [config/index.ts:17](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L17)

The valid file extensions for configuration files.

Supports JSON, JavaScript, and TypeScript files.

TODO: Add support for YAML files.

***

### ConfigFileRecursionBehaviour

> **ConfigFileRecursionBehaviour**: `"no_recursion"` \| `"prefer_highest"` \| `"prefer_lowest"` \| `"merge_highest_first"` \| `"merge_lowest_first"`

Defined in: [config/index.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/config/index.ts#L31)

The behaviour to use when handling recursive configuration files.

#### Example

```ts
no_recursion - Only look in the current directory for the configuration file.
prefer_highest - Look in the current directory and all parent directories, and use the configuration file found in the highest directory.
prefer_lowest - Look in the current directory and all parent directories, and use the configuration file found in the lowest directory.
merge_highest_first - Look in the current directory and all parent directories, and merge the configuration files found in the highest directories first.
merge_lowest_first - Look in the current directory and all parent directories, and merge the configuration files found in the lowest directories first.
```
