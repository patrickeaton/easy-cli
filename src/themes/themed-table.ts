import Table from 'cli-table';
import { DisplayOptions, EasyCLITheme } from '.';

/**
 * A column in a themed table
 *
 * @template TItem The object type for the items in the table
 * @interface ThemedTableColumn
 *
 * @property {string} name The name of the column
 * @property {(item: TItem) => string} data A function that returns the value to display
 * @property {DisplayOptions | ((item: TItem) => DisplayOptions)} [style] The style for the column
 * @property {DisplayOptions} [headerStyle] The style for the header
 * @property {number} [width] The width of the column
 * @property {'left' | 'middle' | 'right'} [align] The alignment of the column
 *
 * @example
 * ```typescript
 * {
 *   name: 'Name',
 *   data: item => item.name
 *   style: item => item.age > 30 ? 'warn' : 'default',
 *   headerStyle: 'info',
 *   width: 20,
 * };
 * ```
 */
export type ThemedTableColumn<TItem = Record<string, any>> = {
  name: string;
  data: (item: TItem) => string | number; // A function that returns the value to display.
  style?: DisplayOptions | ((item: TItem) => DisplayOptions); // Use the function to conditionally format the item.
  headerStyle?: DisplayOptions;
  width?: number;
  align?: 'left' | 'middle' | 'right';
};

/**
 * Options for the themed table
 *
 * @template TItem
 * @interface ThemedTableOptions
 * @type {object}
 *
 * @property {EasyCLITheme} theme The theme to use
 * @property {ThemedTableColumn<TItem>[]} columns The columns for the table
 * @property {number} [totalWidth=120] The total width of the table
 *
 * @example
 * ```typescript
 * {
 *  theme: new EasyCLITheme(),
 *  columns: [
 *    { name: 'Name', data: item => item.name },
 *    { name: 'Age', data: item => item.age },
 *  ],
 * }
 * ```
 */
export type ThemedTableOptions<TItem = Record<string, any>> = {
  theme: EasyCLITheme;
  columns: ThemedTableColumn<TItem>[];
  totalWidth?: number;
};

/**
 * A themed table that extends a cli-table
 * @template TItem
 * @class ThemedTable
 *
 * @param {ThemedTableOptions<TItem>} options The options for the themed table
 *
 * @example
 * ```typescript
 * const theme = new EasyCLITheme();
 * const table = new ThemedTable({
 *   theme,
 *   columns: [
 *     { name: 'Name', data: item => item.name },
 *     { name: 'Age', data: item => item.age },
 *   ],
 * });
 *
 * table.render([
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 * ]);
 *```
 */
export class ThemedTable<TItem extends Record<string, any>> {
  private theme: EasyCLITheme;
  private columns: ThemedTableColumn<TItem>[];
  private totalWidth: number;

  constructor({ theme, columns, totalWidth = 120 }: ThemedTableOptions<TItem>) {
    this.theme = theme;
    this.columns = columns;
    this.totalWidth = totalWidth;
  }

  /**
   * Calculate the remaining default column width
   * @private
   * @returns {number} The remaining default column width
   */
  private calculateRemaingingDefaultColumnWidth() {
    type Acc = { width: number; columns: number };
    const { width, columns } = this.columns.reduce(
      (acc: Acc, column: ThemedTableColumn<TItem>) => {
        if (column.width) {
          acc.width -= column.width;
        } else {
          acc.columns += 1;
        }
        return acc;
      },
      { width: this.totalWidth, columns: 0 } as Acc
    );

    return Math.floor(width / columns);
  }

  /**
   * Render the table to the console
   *
   * @param {TItem[]} items The items to render
   */
  render(items: TItem[]) {
    const defaultWidth = this.calculateRemaingingDefaultColumnWidth();
    const table = new Table({
      head: this.columns.map(column =>
        this.theme.formattedString(column.name, column.headerStyle ?? 'default')
      ),
      colWidths: this.columns.map(column => column.width ?? defaultWidth),
      truncate: '…',
      colAligns: this.columns.map(column => column.align ?? 'middle'),
      colors: false,
    });

    items.forEach(item => {
      table.push(
        this.columns.map(column => {
          const data = column.data(item);
          const style =
            typeof column.style === 'function'
              ? column.style(item)
              : column.style;
          return this.theme.formattedString(`${data}`, style ?? 'default');
        })
      );
    });

    console.log(table.toString());
  }
}
