import { CSVMapper, EasyCLITheme } from 'easy-cli';

const main = async () => {
  const theme = new EasyCLITheme(3);

  const csvProcessor = new CSVMapper({
    mappings: {
      username: {
        aliases: ['Username'],
        required: true,
        transform: value => value,
      },
      id: {
        aliases: ['Identifier'],
        required: true,
        transform: value => parseInt(value),
      },
      lastName: {
        aliases: [],
        required: true,
        transform: value => value,
      },
      firstName: {
        aliases: ['First name', 'First Name'],
        required: true,
        transform: value => value,
      },
      firstInital: {
        aliases: ['First name', 'First Name'],
        required: true,
        transform: value => value[0],
      },
    },
    interactive: true,
    // discardOriginalFields: false, // This can be used to keep the original field names as well as the mapped data.
    theme,
  });

  const data = await csvProcessor.processFile('./username.csv');

  console.log(data);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
