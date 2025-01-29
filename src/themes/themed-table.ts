import Table from 'cli-table';
import { DisplayOptions, EasyCLITheme } from './model';

export type ThemedTableColumn<TItem = Record<string, any>> = {
  name: string;
  data: (item: TItem) => string; // A function that returns the value to display.
  style?: DisplayOptions | ((item: TItem) => DisplayOptions); // Use the function to conditionally format the item.
  headerStyle?: DisplayOptions;
  width?: number;
  align?: 'left' | 'middle' | 'right';
};

export type ThemedTableOptions<TItem = Record<string, any>> = {
  theme: EasyCLITheme;
  columns: ThemedTableColumn<TItem>[];
  totalWidth?: number;
};

export class ThemedTable<TItem extends Record<string, any>> {
  private theme: EasyCLITheme;
  private columns: ThemedTableColumn<TItem>[];
  private totalWidth: number;

  constructor({ theme, columns, totalWidth = 120 }: ThemedTableOptions<TItem>) {
    this.theme = theme;
    this.columns = columns;
    this.totalWidth = totalWidth;
  }

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
          return this.theme.formattedString(data, style ?? 'default');
        })
      );
    });

    console.log(table.toString());
  }
}
