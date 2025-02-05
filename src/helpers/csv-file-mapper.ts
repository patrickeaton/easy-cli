import fs from 'fs';
import { EasyCLITheme } from '../themes';
import { promptChoice } from '../prompts';
// @ts-ignore Untyped Module
import csv from 'csv-parser';

/**
 * A mapping for a CSV field to a field in an object.
 * @template TType The type of the field after transformation.
 *
 * @interface CsvFieldMapping
 *
 * @property {string[]} aliases The aliases for the field in the CSV.
 * @property {boolean} required If the field is required or not.
 * @property {function} transform The function to transform the value from the CSV. (Default: value => value)
 * @property {boolean} allowEmpty If the field can be empty or not. (Default: false)
 * @property {TType} defaultValue The default value for the field. (Default: undefined)
 */
export type CsvFieldMapping<TType = any> = {
  aliases: string[];
  required: boolean;
  transform?: (value: string) => any | Promise<any>;
  allowEmpty?: boolean;
  defaultValue?: TType;
};

/**
 * A mapping of fields in an object to their CSV field mappings.
 *
 * @interface CsvFieldMappings
 *
 * @template TObject The object type to map to.
 *
 * @property {keyof TObject} The name of the field in the object.
 * @property {CsvFieldMapping<TObject[keyof TObject]>} The rules for mapping the field.
 *
 */
export type CsvFieldMappings<TObject> = Record<
  keyof TObject,
  CsvFieldMapping<TObject[keyof TObject]>
>;

/**
 * A mapping of CSV columns to their object fields that they map to.
 *
 * @interface ObjectDataMapper
 *
 * @template TObject The output object type.
 * @template TFileObject The CSV file object type.
 *
 * @property {keyof TFileObject} The column in the CSV file.
 * @property {keyof TObject[]} The fields in the object that the column maps to.
 *
 * @example
 * ```typescript
 * {
 * 'Username': ['username'],
 * 'Identifier': ['id'],
 * 'First name': ['firstName', 'firstInital'],
 * }
 * ```
 */
export type ObjectDataMapper<TObject, TFileObject> = Record<
  keyof TFileObject,
  (keyof TObject)[]
>;

/**
 * The settings for the CSV Mapper instance.
 *
 * @interface CsvMapperOptions
 *
 * @property {CsvFieldMappings<TObject>} mappings The field mappings for the CSV file.
 * @property {boolean} interactive If it should interactively ask for other field mappings. (Default: false)
 * @property {boolean} discardOriginalFields If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true)
 * @property {EasyCLITheme} theme The theme to use for the prompts.
 * @property {boolean} validate If it should validate the data against the mappings. (Default: true)
 *
 * @example
 * ```typescript
 * {
 *   mappings: {
 *     username: {
 *       aliases: ['Username'],
 *       required: true,
 *       transform: value => value,
 *     },
 *     ...
 *   },
 *   interactive?: true, // If it should interactively ask for other field mappings. (Default: false)
 *   discardOriginalFields?: true, // If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV along with the mapped fields (Default: true)
 *   theme?: EasyCLITheme | null, // The theme to use for the prompts.
 *   validate?: true, // If it should validate the data against the mapping rules, if errors are detected it will throw an error (Default: true)
 * }
 * ```
 */
export type CsvMapperOptions<TObject extends Record<string, any>> = {
  // If it should interactively ask for other field mappings. (Default: false)
  interactive?: boolean;
  // If it should discard any fields that are not mapped or not. If false, will store them with their name from the CSV. (Default: true)
  discardOriginalFields?: boolean;
  // The field mappings for the CSV file.
  mappings: CsvFieldMappings<TObject>;
  theme?: EasyCLITheme | null;
  validate?: boolean;
};

/*
 * @class CSVMapper
 * A class to map CSV files to objects.
 *
 * @template TObject An object representing the output object type after transformation.
 * @template TFileObject An object representing the format of the CSV file.
 *
 * @example
 * ```typescript
 * const csvProcessor = new CSVMapper({
 *   mappings: {
 *     username: {
 *       aliases: ['Username'],
 *       required: true,
 *       transform: value => value,
 *     },
 *     id: {
 *       aliases: ['Identifier'],
 *       required: true,
 *       transform: value => parseInt(value),
 *     },
 *     lastName: {
 *       aliases: [],
 *       required: true,
 *       transform: value => value,
 *     },
 *     firstName: {
 *       aliases: ['First name', 'First Name'],
 *       required: true,
 *       transform: value => value,
 *     },
 *     firstInital: {
 *       aliases: ['First name', 'First Name'],
 *       required: true,
 *       transform: value => value[0],
 *     },
 *   },
 *   interactive: true,
 * });
 *
 * const data = await csvProcessor.processFile('./username.csv');
 * ```
 */
export class CSVMapper<
  TObject extends Record<string, any> = Record<string, any>,
  TFileObject extends Record<string, any> = Record<string, any>
> {
  private mappings: CsvFieldMappings<TObject>;
  private interactive: boolean;
  private discardOriginalFields: boolean;
  private theme: EasyCLITheme | null;
  private validate: boolean;

  /**
   * Create a new CSV Mapper instance.
   *
   * @param options The options for the CSV Mapper.
   * @returns {CSVMapper<TObject, TFileObject>} A new CSV Mapper instance.
   *
   * @example
   * const csvProcessor = new CSVMapper({
   * mappings: {
   *  username: {
   *   aliases: ['Username'],
   *   required: true,
   *   transform: value => value,
   *  },
   *  id: {
   *   aliases: ['Identifier'],
   *   required: true,
   *   transform: value => parseInt(value),
   *  },
   *  lastName: {
   *   aliases: [],
   *   required: true,
   *   transform: value => value,
   *  },
   *  firstName: {
   *   aliases: ['First name', 'First Name'],
   *   required: true,
   *   transform: value => value,
   *  },
   *  firstInital: {
   *   aliases: ['First name', 'First Name'],
   *   required: true,
   *   transform: value => value[0],
   *  },
   * },
   * interactive: true,
   * });
   */
  constructor(options: CsvMapperOptions<TObject>) {
    this.mappings = options.mappings;
    this.interactive = options.interactive ?? false;
    this.discardOriginalFields = options.discardOriginalFields ?? true;
    this.theme = options.theme ?? null;
    this.validate = options.validate ?? true;
  }

  /**
   * Read a CSV file and parse it into an array of objects.
   *
   * @param path The path to the CSV file to read.
   * @throws {Error} If the file is not found or there is an error reading the file.
   *
   * @returns The parsed CSV file as an array of objects.
   */
  private readFile = async (path: string): Promise<TFileObject[]> =>
    new Promise(resolve => {
      let results: any[] = [];

      return fs
        .createReadStream(path)
        .pipe(csv())
        .on('data', (data: TFileObject) => results.push(data))
        .on('end', () => {
          resolve(results);
        });
    });

  /**
   * Prompt the user for missing fields in the mappings.
   *
   * @param missingFields What fields are missing from the mappings
   * @param unmappedColumns What columns are not mapped
   *
   * @returns Additional mappings for the CSV columns
   */
  private promptMissingFields = async (
    missingFields: (keyof TObject)[],
    unmappedColumns: (keyof TFileObject)[]
  ): Promise<ObjectDataMapper<TObject, TFileObject>> => {
    const interactiveMappedFields: Record<
      keyof TFileObject,
      (keyof TObject)[]
    > = {} as any;

    // TODO: Add support for linking multiple fields to one column.
    for (const field of missingFields) {
      const skippable = !this.mappings[field].required;

      const mappedField = await promptChoice(
        `Select a column for ${field as string}${
          skippable ? '' : ' (Required)'
        }`,
        skippable
          ? [`SKIP`, ...(unmappedColumns as string[])]
          : (unmappedColumns as string[]),
        {
          theme: this.theme,
          defaultOption: skippable ? `SKIP` : (unmappedColumns[0] as string),
        }
      );

      if (mappedField === `SKIP`) continue;

      // TODO: Remove field from unmappedColumns as it's now mappeds
      interactiveMappedFields[mappedField as keyof TFileObject] = [field];
    }

    return interactiveMappedFields;
  };

  /**
   * Process a CSV file and return the data as an array of transformed objects.
   *
   * @param path The path to the CSV file to process
   *
   * @throws {Error} If there are validation errors in the CSV file and the validate option is set to true.
   *
   * @returns {Promise<TObject[]>} The data from the CSV file as an array of transformed objects
   */
  public processFile = async (path: string): Promise<TObject[]> => {
    const csvData: TFileObject[] = await this.readFile(path);

    const fields = Object.keys(csvData[0]);

    const fieldMap = await this.buildFieldMap(fields);

    if (this.validate) this.validateData(csvData, fieldMap);

    return Promise.all(csvData.map(row => this.transformRow(row, fieldMap)));
  };

  /**
   * Validation for the CSV file, comparing the fields to the mappings.
   *
   * @param rows The rows to validate
   * @param fieldMap The field map to use for validation
   *
   * @throws {Error} If there are validation errors in the CSV file
   */
  private validateData(
    rows: TFileObject[],
    fieldMap: ObjectDataMapper<TObject, TFileObject>
  ): void {
    const mappedFields = Object.values(fieldMap).reduce((acc, fields) => {
      return [...acc, ...fields];
    }, [] as (keyof TObject)[]);

    // Find Required Fields that are not mapped
    const requiredFieldErrors = Object.entries(this.mappings)
      .filter(
        ([key, { required }]) =>
          required && !mappedFields.includes(key as keyof TObject)
      )
      .map(([key]) => `Required Field ${key} Not Mapped`);

    // Find records with empty values that are not allowed
    const emptyFieldErrors = rows
      .map((row, idx): { idx: number; fieldErrors: string[] } => {
        const fieldErrors = Object.entries(row).reduce(
          (acc, [column, value]: [keyof TFileObject, string]) => {
            const fields = fieldMap[column];

            if (!fields) return acc;

            for (const field of fields) {
              if (!this.mappings[field].allowEmpty && !value) {
                acc.push(field as string);
              }
            }

            return acc;
          },
          [] as string[]
        );

        return { idx, fieldErrors };
      })
      .filter(row => row.fieldErrors.length > 0)
      .map(row => `Row ${row.idx} missing data: ${row.fieldErrors.join(', ')}`);

    if (requiredFieldErrors.length || emptyFieldErrors.length) {
      throw new Error(
        `Validation Errors:\n` +
          [...requiredFieldErrors, ...emptyFieldErrors].join('\n')
      );
    }
  }

  /**
   * Transforn a row from the CSV file into the correct output.
   *
   * @param row The row data to transform
   * @param fieldMapping How to map the fields from the CSV to the object
   *
   * @returns {Promise<TObject>} A normalized row object
   */
  private transformRow = async (
    row: TFileObject,
    fieldMapping: ObjectDataMapper<TObject, TFileObject>
  ): Promise<TObject> => {
    // Get the default values for the fields
    const defaultValues: TObject = Object.entries(this.mappings).reduce(
      (acc, [key, { defaultValue }]) => {
        if (defaultValue !== undefined) acc[key] = defaultValue;
        return acc;
      },
      this.discardOriginalFields ? ({} as any) : row
    );

    const transformed = Object.entries(row).reduce(
      (acc, [column, value]: [keyof TFileObject, string]) => {
        const fields = fieldMapping[column];

        if (!fields) return acc;

        for (const field of fields) {
          const transformedValue = this?.mappings?.[field]?.transform
            ? this.mappings[field].transform(value)
            : value;
          acc[field] =
            !transformedValue && acc[field] ? acc[field] : transformedValue;
        }

        return acc;
      },
      defaultValues
    );

    await Promise.all(Object.values(transformed));

    return transformed;
  };

  /**
   * Build a field map from the columns found in the CSV file.
   *
   * @param {(keyof TFileObject)[]} columns The columns found in the CSV file
   *
   * @returns {ObjectDataMapper<TObject, TFileObject>} A field map that maps the CSV columns to the object fields
   */
  private buildFieldMap = async (columns: (keyof TFileObject)[]) => {
    const base = columns.reduce((acc, column) => {
      const mappedFields = this.findMappedField(column);

      if (!mappedFields?.length) return acc;

      acc[column] = mappedFields;

      return acc;
    }, {} as ObjectDataMapper<TObject, TFileObject>);

    if (!this.interactive) return base;

    const mappedFields = Object.values(base).reduce((acc, fields) => {
      return [...acc, ...fields];
    }, [] as (keyof TObject)[]);
    const mappedColumns = Object.keys(base);
    const missingFields = Object.keys(this.mappings).filter(
      field => !mappedFields.includes(field as keyof TObject)
    );

    const unmappedColumns = columns.filter(
      column => !mappedColumns.includes(column as string)
    );

    const interactiveMappedFields = await this.promptMissingFields(
      missingFields,
      unmappedColumns
    );

    return { ...base, ...interactiveMappedFields };
  };

  /**
   * Find the mapped field for a CSV column.
   *
   * @param {keyof TFileObject} field The field to find the mapped field for
   *
   * @returns {(keyof TObject[])} The mapped fields for the CSV column
   */
  private findMappedField = (field: keyof TFileObject) => {
    return Object.entries(this.mappings)
      .filter(([_key, { aliases }]) => {
        return aliases.includes(field as string);
      })
      .map(([key]) => key);
  };
}
