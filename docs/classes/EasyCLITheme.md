[**easy-cli**](../README.md)

***

[easy-cli](../globals.md) / EasyCLITheme

# Class: EasyCLITheme

Defined in: [themes/index.ts:39](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L39)

## Constructors

### new EasyCLITheme()

> **new EasyCLITheme**(`verbosity`, `namedDisplayOptions`?): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:53](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L53)

#### Parameters

##### verbosity

`number` = `0`

##### namedDisplayOptions?

`Record`\<`string`, `StringDisplayOptions`\>

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)

## Methods

### formattedString()

> **formattedString**(`string`, `options`): `string`

Defined in: [themes/index.ts:96](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L96)

#### Parameters

##### string

`string`

##### options

[`DisplayOptions`](../type-aliases/DisplayOptions.md)

#### Returns

`string`

***

### getLogger()

> **getLogger**(): [`EasyCLILogger`](EasyCLILogger.md)

Defined in: [themes/index.ts:124](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L124)

#### Returns

[`EasyCLILogger`](EasyCLILogger.md)

***

### getSimpleProgressBar()

> **getSimpleProgressBar**(`name`, `format`, `options`): [`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

Defined in: [themes/index.ts:136](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L136)

#### Parameters

##### name

`string`

##### format

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

##### options

[`ThemedSimpleProgressBarOptions`](../type-aliases/ThemedSimpleProgressBarOptions.md) = `{}`

#### Returns

[`ThemedSimpleProgressBar`](ThemedSimpleProgressBar.md)

***

### getSpinner()

> **getSpinner**(`format`): [`ThemedSpinner`](ThemedSpinner.md)

Defined in: [themes/index.ts:132](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L132)

#### Parameters

##### format

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

#### Returns

[`ThemedSpinner`](ThemedSpinner.md)

***

### getStatusProgressBar()

> **getStatusProgressBar**(`name`, `format`, `options`): [`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

Defined in: [themes/index.ts:144](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L144)

#### Parameters

##### name

`string`

##### format

[`DisplayOptions`](../type-aliases/DisplayOptions.md) = `'default'`

##### options

[`ThemedStatusProgressBarOptions`](../type-aliases/ThemedStatusProgressBarOptions.md) = `{}`

#### Returns

[`ThemedStatusProgressBar`](ThemedStatusProgressBar.md)

***

### getTable()

> **getTable**(`columns`, `totalWidth`): [`ThemedTable`](ThemedTable.md)\<`any`\>

Defined in: [themes/index.ts:128](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L128)

#### Parameters

##### columns

[`ThemedTableColumn`](../type-aliases/ThemedTableColumn.md)\<`any`\>[] = `[]`

##### totalWidth

`number` = `120`

#### Returns

[`ThemedTable`](ThemedTable.md)\<`any`\>

***

### setNamedDisplayOption()

> **setNamedDisplayOption**(`name`, `options`): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:116](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L116)

#### Parameters

##### name

`string`

##### options

`StringDisplayOptions`

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)

***

### setVerbosity()

> **setVerbosity**(`verbosity`): [`EasyCLITheme`](EasyCLITheme.md)

Defined in: [themes/index.ts:111](https://github.com/patrickeaton/easy-cli/blob/ab5cb143feca4db651c6301eb08aa7237cd71b79/src/themes/index.ts#L111)

#### Parameters

##### verbosity

`number`

#### Returns

[`EasyCLITheme`](EasyCLITheme.md)
