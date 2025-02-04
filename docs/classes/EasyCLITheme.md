[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLITheme

# Class: EasyCLITheme

Defined in: [themes/index.ts:77](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L77)

A theme for the CLI, that allows for customizing the look and feel of the CLI, generating logs, tables, spinners, and progress bars.

 *  EasyCLITheme

## Example

```typescript
const theme = new EasyCLITheme();
const logger = theme.getLogger();
logger.log('Hello, world!');
```

## Constructors

### new EasyCLITheme()

> **new EasyCLITheme**(`verbosity`?, `namedDisplayOptions`?): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:97](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L97)

Creates an instance of EasyCLITheme.

#### Parameters

##### verbosity?

`number` = `0`

The verbosity level of the theme

##### namedDisplayOptions?

`Record`\<`string`, [`StringDisplayOptions`](../interfaces/StringDisplayOptions.md)\>

The named display options for the theme

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)

## Methods

### formattedString()

> **formattedString**(`string`, `options`): `string`

Defined in: [themes/index.ts:159](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L159)

Formats a string with the display options

#### Parameters

##### string

`string`

The string to format

##### options

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

The display options to use

#### Returns

`string`

The formatted string

#### Example

```typescript
const theme = new EasyCLITheme();
const formatted = theme.formattedString('Hello, world!', ['info', { bold: true }]);
console.log(formatted);
```

***

### getLogger()

> **getLogger**(): [`EasyCLILogger`](EasyCLILogger.md)

Defined in: [themes/index.ts:206](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L206)

Gets a logger with the theme

#### Returns

[`EasyCLILogger`](EasyCLILogger.md)

***

### getSimpleProgressBar()

> **getSimpleProgressBar**(`name`, `format`?, `options`?): [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

Defined in: [themes/index.ts:274](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L274)

Gets a simple progress bar with the theme

#### Parameters

##### name

`string`

##### format?

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

##### options?

[`ThemedSimpleProgressBarOptions`](../interfaces/ThemedSimpleProgressBarOptions.md) = `{}`

#### Returns

[`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

***

### getSpinner()

> **getSpinner**(`format`?): [`ThemedSpinner`](ThemedSpinner.md)

Defined in: [themes/index.ts:253](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L253)

Gets a spinner with the theme

#### Parameters

##### format?

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

#### Returns

[`ThemedSpinner`](ThemedSpinner.md)

***

### getStatusProgressBar()

> **getStatusProgressBar**(`name`, `format`?, `options`?): [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

Defined in: [themes/index.ts:298](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L298)

Gets a status progress bar with the theme

#### Parameters

##### name

`string`

##### format?

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

##### options?

[`ThemedStatusProgressBarOptions`](../interfaces/ThemedStatusProgressBarOptions.md) = `{}`

#### Returns

[`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

***

### getTable()

> **getTable**\<`TItem`\>(`columns`?, `totalWidth`?): [`ThemedTable`](ThemedTable.md)\<`TItem`\>

Defined in: [themes/index.ts:232](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L232)

Gets a table with the theme

#### Type Parameters

• **TItem** *extends* `Record`\<`string`, `any`\> = `any`[]

#### Parameters

##### columns?

[`ThemedTableColumn`](../type-aliases/ThemedTableColumn.md)\<`TItem`\>[] = `[]`

##### totalWidth?

`number` = `120`

#### Returns

[`ThemedTable`](ThemedTable.md)\<`TItem`\>

***

### setNamedDisplayOption()

> **setNamedDisplayOption**(`name`, `options`): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:193](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L193)

Sets the named display options for the theme

#### Parameters

##### name

`string`

##### options

[`StringDisplayOptions`](../interfaces/StringDisplayOptions.md)

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)

***

### setVerbosity()

> **setVerbosity**(`verbosity`): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:180](https://github.com/patrickeaton/easy-cli/blob/74d97c3fa8c354b7b3193533a1494ff778ae7a99/src/themes/index.ts#L180)

Sets the verbosity level of the theme

#### Parameters

##### verbosity

`number`

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)
