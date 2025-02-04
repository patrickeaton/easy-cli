import fs from 'fs';
import { EasyCLITheme } from '../themes';
import { promptChoice } from '../prompts';
// @ts-ignore Untyped Module
import csv from 'csv-parser';

export type CsvFieldMapping<TType = any> = {
  aliases: string[];
  required: boolean;
  transform: (value: string) => any | Promise<any>;
  allowEmpty?: boolean;
  defaultValue?: TType;
};

export type CsvFieldMappings<TObject> = Record<
  keyof TObject,
  CsvFieldMapping<TObject[keyof TObject]>
>;

export type ObjectDataMapper<TObject, TFileObject> = Record<
  keyof TFileObject,
  (keyof TObject)[]
>;

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

export class CSVMapper<
  TObject extends Record<string, any> = Record<string, any>,
  TFileObject extends Record<string, any> = Record<string, any>
> {
  private mappings: CsvFieldMappings<TObject>;
  private interactive: boolean;
  private discardOriginalFields: boolean;
  private theme: EasyCLITheme | null;
  private validate: boolean;

  constructor(options: CsvMapperOptions<TObject>) {
    this.mappings = options.mappings;
    this.interactive = options.interactive ?? false;
    this.discardOriginalFields = options.discardOriginalFields ?? true;
    this.theme = options.theme ?? null;
    this.validate = options.validate ?? true;
  }

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

  public processFile = async (path: string) => {
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

  private transformRow = async (
    row: TFileObject,
    fieldMapping: ObjectDataMapper<TObject, TFileObject>
  ) => {
    // Get the default values for the fields
    const defaultValues = Object.entries(this.mappings).reduce(
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
          const transformedValue = this.mappings[field].transform(value);
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

  private findMappedField = (field: keyof TFileObject) => {
    return Object.entries(this.mappings)
      .filter(([_key, { aliases }]) => {
        return aliases.includes(field as string);
      })
      .map(([key]) => key);
  };
}
