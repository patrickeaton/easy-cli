// @ts-ignore Untyped Module
import csv from 'csv-parser';
// @ts-ignore Untyped Module
import ObjectsToCsv from 'objects-to-csv';
import fs from 'fs';

/**
 * A class to read and write CSV files.
 *
 * @class CsvFile
 *
 * @template TFileObject The type of object that the CSV file contains.
 */
export class CsvFile<TFileObject> {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  /**
   * Read a CSV file and parse it into an array of objects.
   *
   * @throws {Error} If the file is not found or there is an error reading the file.
   *
   * @returns The parsed CSV file as an array of objects.
   *
   * @example
   * ```typescript
   * const csvFile = new CsvFile('data.csv');
   * const data = await csvFile.read();
   * console.log(data);
   * ```
   */
  public read = async (): Promise<TFileObject[]> =>
    new Promise(resolve => {
      let results: any[] = [];

      return fs
        .createReadStream(this.path)
        .pipe(csv())
        .on('data', (data: TFileObject) => results.push(data))
        .on('end', () => {
          resolve(results);
        });
    });

  /**
   * Write an array of objects to a CSV file overwriting the existing file.
   *
   * @param data The data to write to the CSV file.
   *
   * @throws {Error} If there is an error writing the file.
   *
   * @returns A promise that resolves when the file is written.
   *
   * @example
   * ```typescript
   * const csvFile = new CsvFile('data.csv');
   * await csvFile.write([
   *  { name: 'Alice', age: 25 },
   *  { name: 'Bob', age: 30 },
   * ]);
   * ```
   */
  public write = async (data: TFileObject[]): Promise<void> => {
    const csv = new ObjectsToCsv(data);
    await csv.toDisk(this.path);
  };

  /**
   * Append an array of objects to an existing CSV file.
   *
   * @param data The data to append to the CSV file.
   *
   * @throws {Error} If there is an error writing the file.
   *
   * @returns A promise that resolves when the file is written.
   *
   * @example
   * ```typescript
   * const csvFile = new CsvFile('data.csv');
   * await csvFile.append([
   * { name: 'Alice', age: 25 },
   * { name: 'Bob', age: 30 },
   * ]);
   * ```
   */
  public append = async (data: TFileObject[]): Promise<void> => {
    const existingData = await this.read();
    const csv = new ObjectsToCsv([...existingData, ...data]);
    await csv.toDisk(this.path);
  };
}
