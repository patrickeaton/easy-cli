import fs from 'fs';
import csv from 'csv-parser';

// TODO: We should look at moving this into a lib when we need it in another location.
/**
 *
 * @description Take the CSV data and map it to the correct fields for the database, handling any necessary transformations.
 * @param csvData The CSV Data output from csv-parser as an array of objects.
 * @param fields
 *
 * @returns The transformed data as an array of objects.
 */
const csvFieldMapperHelper: <TransformedObject>(
  csvData: Object[],
  fields: string[]
) => Promise<TransformedObject[]> = async (csvData, fields) => {
  const { mappedKeys, unmappedFields, remainingCsvFields } =
    await csvFieldMapper(csvData, fields);

  for (const csvKey of remainingCsvFields) {
    await yargsInteractive()
      .interactive({
        interactive: { default: true },
        field: {
          type: 'list',
          describe: `The field "${csvKey}" was not mapped. Please select the field it should map to.`,
          choices: ['IGNORE', ...unmappedFields],
          default: 'IGNORE',
          prompt: 'always',
        },
      })
      .then(({ field }: any) => {
        if (field === 'IGNORE') return;
        mappedKeys[csvKey] = field;
      });
  }

  return csvData.map((record: any) => {
    const transformedRecord: any = {};

    for (const [csvKey, field] of Object.entries(mappedKeys)) {
      transformedRecord[field] = record[csvKey];
    }

    return transformedRecord;
  });
};

/**
 * Convert some of the product fields that are prices/booleans from strings to their correct types.
 * @param product
 * @returns
 */
const convertProductFieldsToProduct = (product: any): ProductInsertType => {
  const convertPrice = (price: string | number) => {
    if (
      typeof product.wholesalePrice === 'string' &&
      (product.wholesalePrice as string).includes('$')
    ) {
      return parseFloat((product.wholesalePrice as string).replace('$', ''));
    }

    return price;
  };

  const convertBoolean = (value: string | boolean | number) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'yes' || value.toLowerCase() === 'true';
    }

    return Boolean(value);
  };

  const pricingFields = ['retailPrice', 'wholesalePrice'];
  const booleanFields = ['isGift', 'isPublic', 'outOfStock', 'subscribable'];

  return Object.entries(product).reduce(
    (acc: any, [key, value]: [string, any]) => {
      if (pricingFields.includes(key)) {
        acc[key] = convertPrice(value);
      } else if (booleanFields.includes(key)) {
        acc[key] = convertBoolean(value);
      } else {
        acc[key] = value;
      }

      return acc;
    },
    {}
  );
};

export type ObjectMappingRecord<TType> = {
  fields: string | string[]; // The fields that should be mapped to this key.
  required?: boolean; // If the field should error if it's not present.
  transform?: (value: string) => TType; // A function to transform the value.
};

export type ObjectMapping<TItem extends Record<string, any>> = {
  [key in keyof TItem]: ObjectMappingRecord<TItem[key]>;
};

export class CSVParser<TItem extends Record<string, any>> {
  private mappings: ObjectMapping<TItem>;
  private interactive: boolean;

  constructor(
    mappings: ObjectMapping<TItem>,
    { interactive = false }: { interactive: boolean }
  ) {
    this.mappings = mappings;
    this.interactive = interactive;
  }

  private findMissingFields = (item: Record<string, string>) => {
    return Object.entries(this.mappings)
      .filter(
        ([key, { fields, required }]) =>
          required && fields.any((field: string) => item[field] !== undefined)
      )
      .map(([key]) => key);
  };

  public parse = async (path: string): Promise<TItem[]> => {

  };
}
