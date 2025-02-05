[Easy CLI](README.md) / commands

# commands

Easily create managed commands that can handle interactive prompts. Can be used with EasyCLI or directly with yargs

## Classes

### EasyCLICommand\<TParams, TGlobalParams\>

Defined in: [commands/command.ts:129](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L129)

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

- [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)
- [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TParams` | `Record`\<`string`, `any`\> |
| `TGlobalParams` | `Record`\<`string`, `any`\> |

#### Constructors

##### new EasyCLICommand()

> **new EasyCLICommand**\<`TParams`, `TGlobalParams`\>(`name`, `handler`, `options`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:152](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L152)

Creates a new EasyCLICommand instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the command. |
| `handler` | (`params`, `theme`) => `void` | The handler function that will be called when the command is run. |
| `options` | [`CommandSetupOptions`](commands.md#commandsetupoptionstglobalparams-tparams)\<`TGlobalParams`, `TParams`\> | Optional arguments for setting up the command. |

###### Returns

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:180](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L180)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:187](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L187)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:198](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L198)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGlobalParams`\>

Defined in: [commands/command.ts:219](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L219)

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

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

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

Defined in: [commands/command.ts:278](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L278)

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

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:335](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L335)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/command.ts:462](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L462)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

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

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/command.ts:502](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L502)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGlobalParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

***

### EasyCLIConfigureCommand\<TParams, TGloablParams\>

Defined in: [commands/configure.ts:77](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L77)

A command to add a configure command to the CLI that will save the configuration

#### Example

```typescript
new EasyCLIConfigureCommand(config, 'configure', {
 globalKeysToUse: ['verbose'], // Use the verbose key
 aliases: ['config', 'cfg', 'setup'] // Alias the command to 'config', 'cfg', and 'setup'
 prompts: {
   // Prompts to ask the user for an input for the env key
   env: {
    describe: 'What environeent are you setting?',
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

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGloablParams`\>

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGloablParams` | The global params for the CLI |

#### Constructors

##### new EasyCLIConfigureCommand()

> **new EasyCLIConfigureCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`?, `options`?): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/configure.ts:87](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L87)

Creates a new configure command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletconfig) | `undefined` | The configuration file to use |
| `name`? | `string` | `'configure'` | The name of the command |
| `options`? | [`ConfigureCommandOptions`](commands.md#configurecommandoptionstglobalparams-tparams)\<`TGloablParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:180](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L180)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:187](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L187)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:198](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L198)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:219](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L219)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

> **addPrompt**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

> **addArgument**(`key`, `config`): [`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:278](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L278)

Adds an argument (positional option) to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. |

###### Returns

[`EasyCLIConfigureCommand`](commands.md#easycliconfigurecommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:335](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L335)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv)

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/command.ts:462](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L462)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

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

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/command.ts:502](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L502)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGloablParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run)

***

### EasyCLIInitCommand\<TParams, TGloablParams\>

Defined in: [commands/init.ts:66](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L66)

A command to add an init command to the CLI that will save the configuration

#### Example

```typescript
new EasyCLIInitCommand(config, 'init', {
  globalKeysToUse: ['verbose'],
  prompts: {
    env: {
      describe: 'What environeent are you setting?',
      type: 'string',
      prompt: 'always',
      demandOption: true,
    },
  },
});
```

#### Extends

- [`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams)\<`TParams`, `TGloablParams`\>

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `TParams` | The params for the command |
| `TGloablParams` | The global params for the CLI |

#### Constructors

##### new EasyCLIInitCommand()

> **new EasyCLIInitCommand**\<`TParams`, `TGloablParams`\>(`config`, `name`?, `options`?): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/init.ts:77](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L77)

Creates a new init command

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`EasyCLIConfigFile`](config-files.md#easycliconfigfiletconfig) | `undefined` | The configuration file to use to save the config |
| `name`? | `string` | `'init'` | The name of the command |
| `options`? | [`InitCommandOptions`](commands.md#initcommandoptionstglobalparams-tparams)\<`TGloablParams`, `TParams`\> | `{}` | The options for the command |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

###### Overrides

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`constructor`](commands.md#constructors)

#### Methods

##### getNames()

> **getNames**(): `string`[]

Defined in: [commands/command.ts:180](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L180)

###### Returns

`string`[]

The names of the command and its aliases, this is used by EasyCLI to register the command with yargs and determine which command to run.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getNames`](commands.md#getnames)

##### getKeys()

> **getKeys**(): `string`[]

Defined in: [commands/command.ts:187](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L187)

###### Returns

`string`[]

The keys for all command arguments, flags and prompts. This is used by EasyCLI to determine which keys this command uses.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getKeys`](commands.md#getkeys)

##### skipConfigLoad()

> **skipConfigLoad**(): `boolean`

Defined in: [commands/command.ts:198](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L198)

###### Returns

`boolean`

Whether the command should skip loading the configuration file. This is used by EasyCLI to determine if the command should load the configuration file.

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`skipConfigLoad`](commands.md#skipconfigload)

##### addFlag()

> **addFlag**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:219](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L219)

Adds a flag to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the flag to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the flag. |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

> **addPrompt**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:243](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L243)

Adds a prompt to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the prompt to add. |
| `config` | [`CommandOption`](commands.md#commandoption) | Configuration for the prompt. s |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

> **addArgument**(`key`, `config`): [`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

Defined in: [commands/command.ts:278](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L278)

Adds an argument (positional option) to the command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | keyof `TParams` & `TGloablParams` | The key of the argument to add. |
| `config` | [`CommandArgument`](commands.md#commandargument) | Configuration for the argument. |

###### Returns

[`EasyCLIInitCommand`](commands.md#easycliinitcommandtparams-tgloablparams)\<`TParams`, `TGloablParams`\>

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

##### getDefaultArgv()

> **getDefaultArgv**(): `TParams`

Defined in: [commands/command.ts:335](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L335)

Returns the default values for the command arguments and flags, this is used by EasyCLI to determine the default values for the command and whether the config file values should be used to override the defaults.

###### Returns

`TParams`

The default values for the command arguments and flags

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`getDefaultArgv`](commands.md#getdefaultargv)

##### convertToYargsCommand()

> **convertToYargsCommand**(`theme`): `CommandModule`

Defined in: [commands/command.ts:462](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L462)

Converts the command to a yargs command. This is used by EasyCLI to register the command with yargs.
This can also be used to directly register the command with yargs.

###### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | `null` | The theme to use for formatting strings. |

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

> **run**(`params`, `theme`): `Promise`\<`void`\>

Defined in: [commands/command.ts:502](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L502)

Runs the command with the provided arguments.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | `TParams` & `TGloablParams` | The parameters to run the command with. |
| `theme` | `null` \| [`EasyCLITheme`](themes.md#easyclitheme) | The theme to use for formatting strings. |

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`EasyCLICommand`](commands.md#easyclicommandtparams-tglobalparams).[`run`](commands.md#run)

## Interfaces

### CommandOption

Defined in: [commands/command.ts:34](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L34)

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
| <a id="prompt"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/command.ts:35](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L35) |

***

### CommandArgument

Defined in: [commands/command.ts:45](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L45)

A command argument (flag) that can be passed to a command with the option to prompt the user for the value.
 CommandArgument

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="prompt-1"></a> `prompt?` | `"always"` \| `"never"` \| `"missing"` | When to prompt the user for the value | [commands/command.ts:46](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L46) |

***

### CommandOptionObject\<TParams, TGlobalParams\>

Defined in: [commands/command.ts:59](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L59)

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

Defined in: [commands/command.ts:92](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L92)

Optional Arguments for setting up a command.

 CommandSetupOptions

#### Example

```typescript
{
  description?: string; // The description of the command
  aliases?: string[]; // The aliases for the command
  flags?: CommandOptionObject<TGlobalParams, TParams>; // The flags for the command
  prompts?: CommandOptionObject<TGlobalParams, TParams>; // The prompts for the command
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
| <a id="description"></a> `description?` | `string` | The description of the command | [commands/command.ts:93](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L93) |
| <a id="aliases"></a> `aliases?` | `string`[] | The aliases for the command | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="flags"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The flags for the command | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="prompts"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The prompts for the command | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="args"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | The positional arguments for the command | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="skipconfig"></a> `skipConfig?` | `boolean` | Should the command skip loading the configuration file | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |

***

### ConfigureCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/configure.ts:37](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L37)

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
   describe: 'What environeent are you setting?',
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
| <a id="description-1"></a> `description?` | `string` | - | [commands/command.ts:93](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L93) |
| <a id="aliases-1"></a> `aliases?` | `string`[] | - | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="flags-1"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="prompts-1"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="args-1"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="skipconfig-1"></a> `skipConfig?` | `boolean` | - | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |
| <a id="globalkeystouse"></a> `globalKeysToUse?` | `string`[] | What key(s) are you setting? | [commands/configure.ts:39](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L39) |
| <a id="transformer"></a> `transformer?` | (`params`: `TGlobalParams` & `TParams`) => `any` | How to transform the params before saving | [commands/configure.ts:40](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/configure.ts#L40) |

***

### InitCommandOptions\<TGlobalParams, TParams\>

Defined in: [commands/init.ts:32](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L32)

Options for the init command
 InitCommandOptions

#### Example

```typescript
{
failOnExists?: boolean; // Should the command fail if the config file already exists?
globalKeysToUse?: string[]; // What key(s) are you setting?
defaults?: Partial<TGlobalParams & TParams>; // The default values to use
transformer?: (params: TGlobalParams & TParams) => any; // How to transform the params before saving
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
| <a id="description-2"></a> `description?` | `string` | - | [commands/command.ts:93](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L93) |
| <a id="aliases-2"></a> `aliases?` | `string`[] | - | [commands/command.ts:94](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L94) |
| <a id="flags-2"></a> `flags?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:95](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L95) |
| <a id="prompts-2"></a> `prompts?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:96](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L96) |
| <a id="args-2"></a> `args?` | [`CommandOptionObject`](commands.md#commandoptionobjecttparams-tglobalparams)\<`TGlobalParams`, `TParams`\> | - | [commands/command.ts:97](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L97) |
| <a id="skipconfig-2"></a> `skipConfig?` | `boolean` | - | [commands/command.ts:98](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/command.ts#L98) |
| <a id="failonexists"></a> `failOnExists?` | `boolean` | Should the command fail if the config file already exists? | [commands/init.ts:36](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L36) |
| <a id="globalkeystouse-1"></a> `globalKeysToUse?` | `string`[] | What key(s) are you setting? | [commands/init.ts:37](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L37) |
| <a id="defaults"></a> `defaults?` | `Partial`\<`TGlobalParams` & `TParams`\> | The default values to use | [commands/init.ts:38](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L38) |
| <a id="transformer-1"></a> `transformer?` | (`params`: `TGlobalParams` & `TParams`) => `any` | How to transform the params before saving | [commands/init.ts:39](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L39) |
| <a id="configflag"></a> `configFlag?` | `string` | The name of the variable to use for the config file | [commands/init.ts:40](https://github.com/patrickeaton/easy-cli/blob/master/src/commands/init.ts#L40) |
