import { EasyCLITheme } from 'easy-cli/themes';
import { ThemedTable } from 'easy-cli/themes/themed-table';

const main = async () => {
  const theme = new EasyCLITheme(3);

  type User = {
    name: string;
    age: number;
    status: 'active' | 'inactive';
  };

  const table = new ThemedTable<User>({
    theme,
    columns: [
      { name: 'name', data: item => item.name },
      { name: 'age', data: item => `${item.age}` },
      {
        name: 'status',
        width: 10,
        data: item => item.status,
        style: item => (item.status === 'active' ? 'success' : 'error'),
      },
    ],
  });

  table.render([
    { name: 'Alice', age: 30, status: 'active' },
    { name: 'Bob', age: 25, status: 'inactive' },
    { name: 'Charlie', age: 35, status: 'active' },
  ]);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
