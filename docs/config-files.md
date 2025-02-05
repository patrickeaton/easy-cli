[Easy CLI](README.md) / config-files

# config-files

Easily manage configuration files for CLI applications, supports recursion, different root paths and transformation.

## Classes

### EasyCLIConfigFile\<TConfig\>

Defined in: [config-files/index.ts:103](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L103)

EasyCLIConfigFile

A class to make it easier to load configuration files in a consistent way, with support for different file extensions, recursion, and root directories.

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

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TConfig` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | A type representing the configuration object that will be managed by the configuration file. |

#### Constructors

##### new EasyCLIConfigFile()

> **new EasyCLIConfigFile**\<`TConfig`\>(`params`): [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletconfig)\<`TConfig`\>

Defined in: [config-files/index.ts:120](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L120)

Create a new configuration file handler instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ConfigFileParams`](config-files.md#configfileparams) | The parameters to use when loading the configuration file |

###### Returns

[`EasyCLIConfigFile`](config-files.md#easycliconfigfiletconfig)\<`TConfig`\>

The EasyCLIConfigFile instance

#### Methods

##### load()

> **load**(`path`?): `TConfig`

Defined in: [config-files/index.ts:345](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L345)

Load a configuration file from the given rules. Can be overridden by providing a path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path`? | `string` | An optional path override to use when loading the configuration file, otherwise it will use the default path. |

###### Returns

`TConfig`

The loaded configuration object

###### Example

```typescript
const config = new EasyCLIConfigFile({
 filename: 'config',
 extensions: ['json', 'js', 'ts'],
 recursion: 'prefer_highest',
 root: 'cwd',
});

// Loads the configuration file from the default path, finding the highest configuration file.
const configuration = config.load();

// Loads the configuration file from the given path. Does not use the default path.
const configuration = config.load('path/to/config.json');
```

##### fileExists()

> **fileExists**(`filePath`?): `boolean`

Defined in: [config-files/index.ts:375](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L375)

Check if a configuration file exists.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filePath`? | `string` | An optional file path to use instead of the default otherwise it will scan using the given rules. |

###### Returns

`boolean`

Whether or not the configuration file exists

###### Example

```typescript
const config = new EasyCLIConfigFile({
 filename: 'config',
 extensions: ['json', 'js', 'ts'],
 recursion: 'prefer_highest',
root: 'cwd',
});

// Check if the configuration file exists
const exists = config.fileExists();
console.log(exists);

// Check if a specific configuration file exists
const exists = config.fileExists('path/to/config.json');
console.log(exists);
```

##### save()

> **save**(`config`, `filePath`?): `Promise`\<`void`\>

Defined in: [config-files/index.ts:389](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L389)

Save a configuration object to a file, using the given rules or an optional file path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `TConfig` | The configuration object to save |
| `filePath`? | `string` | The file path to save the configuration to |

###### Returns

`Promise`\<`void`\>

## Interfaces

### ConfigFileParams

Defined in: [config-files/index.ts:74](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L74)

The parameters to use when loading a configuration file.

  ConfigFileParams

#### Example

```typescript
{
 filename: 'config',
 extensions: ['json', 'js', 'ts'],
 recursion: 'prefer_highest',
 root: 'cwd',
 path: '',
 failOnMissing: false,
}
```

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | The base filename to look for, without the extension. | [config-files/index.ts:75](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L75) |
| <a id="extensions"></a> `extensions` | [`ValidExtensions`](config-files.md#validextensions)[] | What file extensions to look for, in order of preference | [config-files/index.ts:76](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L76) |
| <a id="recursion"></a> `recursion?` | [`ConfigFileRecursionBehaviour`](config-files.md#configfilerecursionbehaviour) | How to handle recursive config files | [config-files/index.ts:77](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L77) |
| <a id="root"></a> `root?` | [`ConfigFileRoot`](config-files.md#configfileroot) | Where to start looking for the config file | [config-files/index.ts:78](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L78) |
| <a id="path"></a> `path?` | `string` | The path to search for the config file | [config-files/index.ts:79](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L79) |
| <a id="failonmissing"></a> `failOnMissing?` | `boolean` | Whether or not to fail if the file is missing | [config-files/index.ts:80](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L80) |

## Type Aliases

### ValidExtensions

> **ValidExtensions**: `"json"` \| `"js"` \| `"ts"`

Defined in: [config-files/index.ts:17](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L17)

The valid file extensions for configuration files.

Supports JSON, JavaScript, and TypeScript files.

TODO: Add support for YAML files.

***

### ConfigFileRecursionBehaviour

> **ConfigFileRecursionBehaviour**: `"no_recursion"` \| `"prefer_highest"` \| `"prefer_lowest"` \| `"merge_highest_first"` \| `"merge_lowest_first"`

Defined in: [config-files/index.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L31)

The behaviour to use when handling recursive configuration files.

#### Example

```ts
no_recursion - Only look in the current directory for the configuration file.
prefer_highest - Look in the current directory and all parent directories, and use the configuration file found in the highest directory.
prefer_lowest - Look in the current directory and all parent directories, and use the configuration file found in the lowest directory.
merge_highest_first - Look in the current directory and all parent directories, and merge the configuration files found in the highest directories first.
merge_lowest_first - Look in the current directory and all parent directories, and merge the configuration files found in the lowest directories first.
```

***

### ConfigFileRoot

> **ConfigFileRoot**: `"cwd"` \| `"home"` \| `"app-root"`

Defined in: [config-files/index.ts:48](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L48)

The root to use when looking for configuration files.

#### Example

```ts
cwd - Look in the current working directory for the configuration file.
home - Look in the user's home directory for the configuration file.
app-root - Look in the root directory of the application for the configuration file.
```
