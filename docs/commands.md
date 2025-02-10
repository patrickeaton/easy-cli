[Easy CLI](README.md) / commands

# commands

Easily create managed commands that can handle interactive prompts. Can be used with EasyCLI or directly with yargs

## Classes

### EasyCLICommand\<TParams, TGlobalParams\>

Defined in: [commands/command.ts:145](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L145)

A class that represents a command that can be run in the CLI.
This class is a wrapper around yargs commands that allows for prompts and flags to be added to the command.

#### Example

```typescript
const command = new EasyCLICommand('do', (params, theme) => {
 theme?.getLogger().log(params);
}, {
  description: 'Set a config variable',
  aliases: [],
  args: {
    key: {
      describe: 'What key(s) are you setting?',
      type: 'string',
    },
  },
  prompts: {
    value: {
      describe: 'the value to set',
      type: 'string',
      prompt: 'missing',
      demandOption: true,
    },
  },
});
```

#### Extended by

- [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)
- [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `TGlobalParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Constructors

##### new EasyCLICommand()

> **new EasyCLICommand**\<`TParams`, `TGlobalParams`\>(`name`, `handler`, `options`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:170](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L170)

Creates a new EasyCLICommand instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the command. |
| `handler` | [`EasyClICommandHandler`](commands.md#easyclicommandhandlertparams-tglobalparams)\<`TParams`, `TGlobalParams`\> | The handler function that will be called when the command is run. |
| `options` | [`CommandSetupOptions`](commands.md#commandsetupoptionstglobalparams-tparams)\<`TGlobalParams`, `TParams`\> | Optional arguments for setting up the command. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:204](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L204)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getNames(); // ['do', 'd']
```

##### getName()

> **getName**(): `string`

Defined in: [commands/command.ts:216](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L216)

###### Returns

`string`

The name of the command, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getName(); // 'do'
```

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:227](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L227)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

###### Example

```typescript
command.getKeys(); // ['key', 'value', 'verbose']
```

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

###### Example

```typescript
command.skipConfigLoad(); // false
```

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:264](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L264)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
command.addFlag('verbose', {
 describe: 'The verbosity of the command',
 type: 'number',
 default: 0,
});
```

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:288](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L288)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Prompt the user for the environment to set
command.addPrompt('env', {
  describe: 'The environment to set',
  type: 'string',
  prompt: 'always',
  demandOption: true,
});
```

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:323](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L323)

Adds an argument (positional option) to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Add an argument to the command
command.addArgument('key', {
  describe: 'The key to set',
  type: 'string',
  demandOption: true,
});

// Builds a function similar to `app my-command [key]`

// Add an argument to the command that is an array
command.addArgument('keys', {
 describe: 'The keys to set',
 type: 'string',
 demandOption: true,
 array: true,
});

// Builds a function similar to `app my-command [key1] [key2] [key3] ...`
```

##### setGlobalFlags()

> **setGlobalFlags**(`flags`): `void`

Defined in: [commands/command.ts:347](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L347)

Sets the global flags for the command, these flags will be available to all commands. Used by EasyCLI to set the global flags for the CLI in order to prompt any that are set.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `flags` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, \{\}\> | The flags to set as global flags |

###### Returns

`void`

###### Example

```typescript
command.setGlobalFlags({
  verbose: {
   describe: 'The verbosity of the command',
   type: 'number',
   default: 0,
  },
});

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:405](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L405)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Example

```typescript
command.getDefaultArgv(); // { key: undefined, value: undefined, verbose: 0 }
```

##### convertToYargsCommand()

> **convertToYargsCommand**(`isDefault`, `theme`?): `CommandModule`

Defined in: [commands/command.ts:540](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L540)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `isDefault` | `boolean` | `false` | - |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

###### Example

```typescript

const command = new EasyCLICommand('do', (params, theme) => {
  theme?.getLogger().log(params); // Log the values of the command
}, { description: 'Do something' });

// Register the command with EasyCLI to leverage other options
const easyCLI = new EasyCLI();
easyCLI.addCommand(command);

// Register the command with yargs directly if you don't need the other helpers.
yargs.command(command.convertToYargsCommand());
```

##### run()

> **run**(`params`, `theme`?): `Promise`\<`unknown`\>

Defined in: [commands/command.ts:588](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L588)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGlobalParams` | The parameters to run the command with. |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`unknown`\>

The result of the command handler.

###### Example

```typescript
 command.run({ key: 'value' }, theme);
```

***

### EasyCLIConfigureCommand\<TParams, TGlobalParams\>

Defined in: [commands/configure.ts:80](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L80)

A command to add a configure command to the CLI that will save the configuration

#### Example

```typescript
new EasyCLIConfigureCommand(config, 'configure', {
 globalKeysToUse: ['verbose'], // Use the verbose key
 aliases: ['config', 'cfg', 'setup'] // Alias the command to 'config', 'cfg', and 'setup'
 prompts: {
   // Prompts to ask the user for an input for the env key
   env: {
    describe: 'What environent are you setting?',
    type: 'string',
    prompt: 'always',
    demandOption: true,
  },
 ...
 },
 flags: {
 // Add a flag to the command
  profile: {
    type: 'string',
    describe: 'The profile to use',
    demandOption: false, // Make the flag optional
    default: 'my-profile', // Set a default value
  }
 },
});
```

#### Extends

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The params for the command |
| `TGlobalParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The global params for the CLI |

#### Constructors

##### new EasyCLIConfigureCommand()

> **new EasyCLIConfigureCommand**\<`TParams`, `TGlobalParams`\>(`config`, `name`?, `options`?): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/configure.ts:90](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L90)

Creates a new configure command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletparams) | `undefined` | The configuration file to use |
| `name`? | `string` | `'configure'` | The name of the command |
| `options`? | [`ConfigureCommandOptions`](commands.md#configurecommandoptionstglobalparams-tparams)\<`TGlobalParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:204](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L204)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getNames(); // ['do', 'd']
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames)

##### getName()

> **getName**(): `string`

Defined in: [commands/command.ts:216](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L216)

###### Returns

`string`

The name of the command, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getName(); // 'do'
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getName`](commands.md#getname)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:227](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L227)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

###### Example

```typescript
command.getKeys(); // ['key', 'value', 'verbose']
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

###### Example

```typescript
command.skipConfigLoad(); // false
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:264](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L264)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
command.addFlag('verbose', {
 describe: 'The verbosity of the command',
 type: 'number',
 default: 0,
});
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addFlag`](commands.md#addflag)

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:288](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L288)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Prompt the user for the environment to set
command.addPrompt('env', {
  describe: 'The environment to set',
  type: 'string',
  prompt: 'always',
  demandOption: true,
});
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addPrompt`](commands.md#addprompt)

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:323](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L323)

Adds an argument (positional option) to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Add an argument to the command
command.addArgument('key', {
  describe: 'The key to set',
  type: 'string',
  demandOption: true,
});

// Builds a function similar to `app my-command [key]`

// Add an argument to the command that is an array
command.addArgument('keys', {
 describe: 'The keys to set',
 type: 'string',
 demandOption: true,
 array: true,
});

// Builds a function similar to `app my-command [key1] [key2] [key3] ...`
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addArgument`](commands.md#addargument)

##### setGlobalFlags()

> **setGlobalFlags**(`flags`): `void`

Defined in: [commands/command.ts:347](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L347)

Sets the global flags for the command, these flags will be available to all commands. Used by EasyCLI to set the global flags for the CLI in order to prompt any that are set.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `flags` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, \{\}\> | The flags to set as global flags |

###### Returns

`void`

###### Example

```typescript
command.setGlobalFlags({
  verbose: {
   describe: 'The verbosity of the command',
   type: 'number',
   default: 0,
  },
});

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`setGlobalFlags`](commands.md#setglobalflags)

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:405](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L405)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Example

```typescript
command.getDefaultArgv(); // { key: undefined, value: undefined, verbose: 0 }
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv)

##### convertToYargsCommand()

> **convertToYargsCommand**(`isDefault`, `theme`?): `CommandModule`

Defined in: [commands/command.ts:540](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L540)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `isDefault` | `boolean` | `false` | - |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

###### Example

```typescript

const command = new EasyCLICommand('do', (params, theme) => {
  theme?.getLogger().log(params); // Log the values of the command
}, { description: 'Do something' });

// Register the command with EasyCLI to leverage other options
const easyCLI = new EasyCLI();
easyCLI.addCommand(command);

// Register the command with yargs directly if you don't need the other helpers.
yargs.command(command.convertToYargsCommand());
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`convertToYargsCommand`](commands.md#converttoyargscommand)

##### run()

> **run**(`params`, `theme`?): `Promise`\<`unknown`\>

Defined in: [commands/command.ts:588](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L588)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGlobalParams` | The parameters to run the command with. |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`unknown`\>

The result of the command handler.

###### Example

```typescript
 command.run({ key: 'value' }, theme);
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run)

***

### EasyCLIInitCommand\<TParams, TGlobalParams\>

Defined in: [commands/init.ts:65](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L65)

A command to add an init command to the CLI that will save the configuration

#### Example

```typescript
new EasyCLIInitCommand(config, 'init', {
  globalKeysToUse: ['verbose'],
  prompts: {
    env: {
      describe: 'What environent are you setting?',
      type: 'string',
      prompt: 'always',
      demandOption: true,
    },
  },
});
```

#### Extends

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The params for the command |
| `TGlobalParams` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The global params for the CLI |

#### Constructors

##### new EasyCLIInitCommand()

> **new EasyCLIInitCommand**\<`TParams`, `TGlobalParams`\>(`config`, `name`?, `options`?): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/init.ts:75](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L75)

Creates a new init command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletparams) | `undefined` | The configuration file to use to save the config |
| `name`? | `string` | `'init'` | The name of the command |
| `options`? | [`InitCommandOptions`](commands.md#initcommandoptionstglobalparams-tparams)\<`TGlobalParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:204](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L204)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getNames(); // ['do', 'd']
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames)

##### getName()

> **getName**(): `string`

Defined in: [commands/command.ts:216](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L216)

###### Returns

`string`

The name of the command, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Example

```typescript
command.getName(); // 'do'
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getName`](commands.md#getname)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:227](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L227)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

###### Example

```typescript
command.getKeys(); // ['key', 'value', 'verbose']
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

###### Example

```typescript
command.skipConfigLoad(); // false
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:264](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L264)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
command.addFlag('verbose', {
 describe: 'The verbosity of the command',
 type: 'number',
 default: 0,
});
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addFlag`](commands.md#addflag)

##### addPrompt()

> **addPrompt**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:288](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L288)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Prompt the user for the environment to set
command.addPrompt('env', {
  describe: 'The environment to set',
  type: 'string',
  prompt: 'always',
  demandOption: true,
});
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addPrompt`](commands.md#addprompt)

##### addArgument()

> **addArgument**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:323](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L323)

Adds an argument (positional option) to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGlobalParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

This command instance for optional chaining

###### Example

```typescript
// Add an argument to the command
command.addArgument('key', {
  describe: 'The key to set',
  type: 'string',
  demandOption: true,
});

// Builds a function similar to `app my-command [key]`

// Add an argument to the command that is an array
command.addArgument('keys', {
 describe: 'The keys to set',
 type: 'string',
 demandOption: true,
 array: true,
});

// Builds a function similar to `app my-command [key1] [key2] [key3] ...`
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`addArgument`](commands.md#addargument)

##### setGlobalFlags()

> **setGlobalFlags**(`flags`): `void`

Defined in: [commands/command.ts:347](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L347)

Sets the global flags for the command, these flags will be available to all commands. Used by EasyCLI to set the global flags for the CLI in order to prompt any that are set.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `flags` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, \{\}\> | The flags to set as global flags |

###### Returns

`void`

###### Example

```typescript
command.setGlobalFlags({
  verbose: {
   describe: 'The verbosity of the command',
   type: 'number',
   default: 0,
  },
});

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`setGlobalFlags`](commands.md#setglobalflags)

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:405](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L405)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Example

```typescript
command.getDefaultArgv(); // { key: undefined, value: undefined, verbose: 0 }
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv)

##### convertToYargsCommand()

> **convertToYargsCommand**(`isDefault`, `theme`?): `CommandModule`

Defined in: [commands/command.ts:540](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L540)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `isDefault` | `boolean` | `false` | - |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | `undefined` | The theme to use for formatting strings. |

###### Returns

`CommandModule`

The yargs command.

###### Example

```typescript

const command = new EasyCLICommand('do', (params, theme) => {
  theme?.getLogger().log(params); // Log the values of the command
}, { description: 'Do something' });

// Register the command with EasyCLI to leverage other options
const easyCLI = new EasyCLI();
easyCLI.addCommand(command);

// Register the command with yargs directly if you don't need the other helpers.
yargs.command(command.convertToYargsCommand());
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`convertToYargsCommand`](commands.md#converttoyargscommand)

##### run()

> **run**(`params`, `theme`?): `Promise`\<`unknown`\>

Defined in: [commands/command.ts:588](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L588)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGlobalParams` | The parameters to run the command with. |
| `theme`? | [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`unknown`\>

The result of the command handler.

###### Example

```typescript
 command.run({ key: 'value' }, theme);
```

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run)

## Interfaces

### CommandOption

Defined in: [commands/command.ts:33](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L33)

A command positional option that can be passed to a command with the option to prompt the user for the value.
 CommandOption

#### Example

```typescript
// A flag that will always prompt the user for the value, if a value is provided via a flag it will be used as the default value.
{
 describe: 'The description of the flag',
 type: 'string',
 prompt: 'always',
 demandOption: true,
}

// A flag that will prompt the user for the value if it is missing
{
 describe: 'The description of the flag',
 type: 'string',
 prompt: 'missing',
 demandOption: true,
}
```

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prompt"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/command.ts:34](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L34) |

***

### CommandArgument

Defined in: [commands/command.ts:44](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L44)

A command argument (flag) that can be passed to a command with the option to prompt the user for the value.
 CommandArgument

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prompt-1"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/command.ts:45](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L45) |

***

### CommandOptionObject\<TParams, TGlobalParams\>

Defined in: [commands/command.ts:58](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L58)

A record of flags/postional options for a command.
 CommandOptionObject

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGlobalParams` | The global params for the CLI |

#### Indexable

\[`key`: `string`\]: [`CommandOption`](commands.md#commandoption) \| [`CommandArgument`](commands.md#commandargument)

***

### CommandSetupOptions\<TGlobalParams, TParams\>

Defined in: [commands/command.ts:93](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L93)

Optional Arguments for setting up a command.

 CommandSetupOptions

#### Example

```typescript
{
  description?: string; // The description of the command
  aliases?: string[]; // The aliases for the command
  flags?: CommandOptionObject<TGlobalParams, TParams>; // The flags for the command
  prompts?: CommandOptionObject<TGlobalParams, TParams>; // The prompts for the command
  validator?: (params: TGlobalParams & TParams) => boolean | Promise<boolean>; // A function to validate the params before running the command, runs before the prompts
  args?: CommandOptionObject<TGlobalParams, TParams>; // The positional arguments for the command
  skipConfig?: boolean; // Should the command skip loading the configuration file
}
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description"></a> `description?` | `string` | The description of the command | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="aliases"></a> `aliases?` | `string`[] | The aliases for the command | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="flags"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The flags for the command | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="prompts"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The prompts for the command | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="args"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The positional arguments for the command | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |
| <a id="promptglobalkeys"></a> `promptGlobalKeys?` | keyof `TGlobalParams`[] | - | [commands/command.ts:99](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L99) |
| <a id="validator"></a> `validator?` | (`params`: `TGlobalParams` & `TParams`) => `boolean` \| `Promise`\<`boolean`\> | A function to validate the params before running the command, runs before the prompts | [commands/command.ts:100](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L100) |
| <a id="skipconfig"></a> `skipConfig?` | `boolean` | Should the command skip loading the configuration file | [commands/command.ts:101](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L101) |

***

### ConfigureCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/configure.ts:40](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L40)

Options for the configure command
 ConfigureCommandOptions

#### Example

```typescript
{
 globalKeysToUse?: string[]; // What key(s) are you setting?
 transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
 alias?: string; // The alias for the command
 prompts?: {
  // Prompts to ask the user for an input for the env key
  env: {
   describe: 'What environent are you setting?',
   type: 'string',
   prompt: 'always',
   demandOption: true,
  },
  ...
 },
}
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description-1"></a> `description?` | `string` | - | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="aliases-1"></a> `aliases?` | `string`[] | - | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="flags-1"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="prompts-1"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="args-1"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |
| <a id="promptglobalkeys-1"></a> `promptGlobalKeys?` | keyof `TGlobalParams`[] | - | [commands/command.ts:99](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L99) |
| <a id="validator-1"></a> `validator?` | (`params`: `TGlobalParams` & `TParams`) => `boolean` \| `Promise`\<`boolean`\> | - | [commands/command.ts:100](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L100) |
| <a id="skipconfig-1"></a> `skipConfig?` | `boolean` | - | [commands/command.ts:101](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L101) |
| <a id="globalkeystouse"></a> `globalKeysToUse?` | keyof `TGlobalParams`[] | What key(s) are you setting? | [commands/configure.ts:42](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L42) |
| <a id="callback"></a> `callback?` | (`params`: `TGlobalParams` & `TParams`) => `void` | - | [commands/configure.ts:43](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L43) |

***

### InitCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/init.ts:31](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L31)

Options for the init command
 InitCommandOptions

#### Example

```typescript
{
failOnExists?: boolean; // Should the command fail if the config file already exists?
globalKeysToUse?: string[]; // What key(s) are you setting?
defaults?: Partial<TGlobalParams & TParams>; // The default values to use
configFlag?: string; // The name of the variable to use for the config file
}
```

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TGlobalParams` | The global params for the CLI |
| `TParams` | The params for the command |

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description-2"></a> `description?` | `string` | - | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="aliases-2"></a> `aliases?` | `string`[] | - | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="flags-2"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="prompts-2"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="args-2"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |
| <a id="promptglobalkeys-2"></a> `promptGlobalKeys?` | keyof `TGlobalParams`[] | - | [commands/command.ts:99](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L99) |
| <a id="validator-2"></a> `validator?` | (`params`: `TGlobalParams` & `TParams`) => `boolean` \| `Promise`\<`boolean`\> | - | [commands/command.ts:100](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L100) |
| <a id="skipconfig-2"></a> `skipConfig?` | `boolean` | - | [commands/command.ts:101](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L101) |
| <a id="failonexists"></a> `failOnExists?` | `boolean` | Should the command fail if the config file already exists? | [commands/init.ts:35](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L35) |
| <a id="globalkeystouse-1"></a> `globalKeysToUse?` | keyof `TGlobalParams`[] | Any global keys that should be stored in the config file | [commands/init.ts:36](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L36) |
| <a id="defaults"></a> `defaults?` | `Partial`\<`TGlobalParams` & `TParams`\> | The default values to use | [commands/init.ts:37](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L37) |
| <a id="configflag"></a> `configFlag?` | `string` | The name of the variable to use for the config file | [commands/init.ts:38](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L38) |
| <a id="callback-1"></a> `callback?` | (`params`: `TGlobalParams` & `TParams`) => `void` | - | [commands/init.ts:39](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L39) |

## Type Aliases

### EasyClICommandHandler\<TParams, TGlobalParams\>

> **EasyClICommandHandler**\<`TParams`, `TGlobalParams`\>: `ThemedCommandHandler`\<`TParams`, `TGlobalParams`\> \| `UnthemedCommandHandler`\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:113](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L113)

#### Type Parameters

| Type Parameter |
| ------ |
| `TParams` |
| `TGlobalParams` |
