import { CsvFile } from '../../src';

const main = async () => {
  // Load CSV File
  const file = new CsvFile('./username.csv');

  // Get the data from the CSV File
  const data = await file.read();
  console.log(data);

  // Append a new line to the CSV File
  await file.write(
    [
      {
        Username: 'alice_bob',
        'First name': 'Alice',
        'Last name': 'Bob',
        Identifer: data.length + 1,
      },
    ],
    true
  );
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
