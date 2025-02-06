import { CsvFile } from 'easy-cli';

const main = async () => {
  // Load CSV File
  const file = new CsvFile('./username.csv');

  // Get the data from the CSV File
  const data = await file.read();
  console.log(data);

  // Append a new line to the CSV File
  await file.write([
    {
      Username: 'alice_bob',
      'First name': 'Alice',
      'Last name': 'Bob',
      Identifer: data.length + 1,
    },
  ]);

  await file.append([
    {
      Username: 'bob_alice',
      'First name': 'Bob',
      'Last name': 'Alice',
      Identifer: data.length + 2,
    },
  ]);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
