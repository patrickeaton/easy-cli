[Easy CLI](README.md) / config-files

# config-files

Easily manage configuration files for CLI applications, supports recursion, different root paths and transformation.

## Classes

### EasyCLIConfigFile\<TParams\>

Defined in: [config-files/index.ts:166](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L166)

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
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | A type representing the configuration object that will be managed by the configuration file. |

#### Constructors

##### new EasyCLIConfigFile()

> **new EasyCLIConfigFile**\<`TParams`\>(`params`): [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletparams)\<`TParams`\>

Defined in: [config-files/index.ts:191](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L191)

Create a new configuration file handler instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`ConfigFileParams`](config-files.md#configfileparamstparams)\<`TParams`\> | The parameters to use when loading the configuration file |

###### Returns

[`EasyCLIConfigFile`](config-files.md#easycliconfigfiletparams)\<`TParams`\>

The EasyCLIConfigFile instance

#### Methods

##### load()

> **load**(`path`?, `argv`?): `TParams`

Defined in: [config-files/index.ts:481](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L481)

Load a configuration file from the given rules. Can be overridden by providing a path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path`? | `string` | An optional path override to use when loading the configuration file, otherwise it will use the default path. |
| `argv`? | `Partial`\<`TParams`\> | - |

###### Returns

`TParams`

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

Defined in: [config-files/index.ts:511](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L511)

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

Defined in: [config-files/index.ts:541](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L541)

Save a configuration object to a file, using the given rules or an optional file path.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | `TParams` | The configuration object to save |
| `filePath`? | `string` | The file path to save the configuration to |

###### Returns

`Promise`\<`void`\>

###### Example

```typescript
const config = new EasyCLIConfigFile({
filename: 'config',
extensions: ['json', 'js', 'ts'],
recursion: 'prefer_highest',
root: 'cwd',
});

// Save the configuration file
await config.save({
var1: 'value1',
var2: 'value2',
});
```

#### Properties

##### loadTransform()?

> `optional` **loadTransform**: (`config`, `argv`) => `TParams`

Defined in: [config-files/index.ts:179](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | `TParams` \| `Record`\<`string`, `TParams`\> |
| `argv` | `Partial`\<`TParams`\> |

###### Returns

`TParams`

## Functions

### isObject()

> **isObject**(`item`): `any`

Defined in: [config-files/index.ts:72](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L72)

Simple object check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | `any` |  |

#### Returns

`any`

***

### mergeDeep()

> **mergeDeep**(...`sources`): `any`

Defined in: [config-files/index.ts:81](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L81)

Deep merge two objects.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`sources` | `any`[] |

#### Returns

`any`

## Interfaces

### ConfigFileParams\<TParams\>

Defined in: [config-files/index.ts:125](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L125)

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

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="filename"></a> `filename` | `string` | The base filename to look for, without the extension. | [config-files/index.ts:128](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L128) |
| <a id="extensions"></a> `extensions` | [`ValidExtensions`](config-files.md#validextensions)[] | What file extensions to look for, in order of preference | [config-files/index.ts:129](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L129) |
| <a id="recursion"></a> `recursion?` | [`ConfigFileRecursionBehaviour`](config-files.md#configfilerecursionbehaviour) | How to handle recursive config files | [config-files/index.ts:130](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L130) |
| <a id="root"></a> `root?` | [`ConfigFileRoot`](config-files.md#configfileroot) | Where to start looking for the config file | [config-files/index.ts:131](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L131) |
| <a id="top"></a> `top?` | [`ConfigFileRootTop`](config-files.md#configfileroottop) | - | [config-files/index.ts:132](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L132) |
| <a id="path"></a> `path?` | `string` | The path to search for the config file | [config-files/index.ts:133](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L133) |
| <a id="failonmissing"></a> `failOnMissing?` | `boolean` | Whether or not to fail if the file is missing | [config-files/index.ts:134](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L134) |
| <a id="savetransform"></a> `saveTransform?` | (`config`: `TParams` \| `Record`\<`string`, `TParams`\>) => `TParams` \| `Record`\<`string`, `TParams`\> | - | [config-files/index.ts:135](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L135) |
| <a id="loadtransform-1"></a> `loadTransform?` | (`config`: `TParams` \| `Record`\<`string`, `TParams`\>, `argv`: `Partial`\<`TParams`\>) => `TParams` | - | [config-files/index.ts:138](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L138) |

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

> **ConfigFileRoot**: `"cwd"` \| `"home"` \| `"project_root"` \| `"workspace_root"`

Defined in: [config-files/index.ts:51](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L51)

The root to use when looking for configuration files.

#### Example

```ts
cwd - Look in the current working directory for the configuration file.
home - Look in the user's home directory for the configuration file.
project_root - Look up the directory tree for the first package.json file and use that directory as the root.
workspace_root - Look up the directory tree for the first package.json file with workspaces and use that directory as the root.

Otherwise, you can provide a custom path to start looking for the configuration file.
```

***

### ConfigFileRootTop

> **ConfigFileRootTop**: `"project_root"` \| `"workspace_root"`

Defined in: [config-files/index.ts:65](https://github.com/patrickeaton/easy-cli/blob/master/src/config-files/index.ts#L65)

Where to stop looking for the configuration file.

#### Example

```ts
project_root - Look up the directory tree for the first package.json file and use that directory;
workspace_root - Look up the directory tree for the first package.json file with workspaces and use that directory as the root.

Otherwise, you can provide a custom path to start looking for the configuration file.
```
