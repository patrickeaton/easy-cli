import { EasyCLITheme } from 'easy-cli-framework/themes';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const theme = new EasyCLITheme(3);

  const progressBar = theme.getSimpleProgressBar('Records Processed', 'warn', {
    barDisplayOptions: 'success',
  });

  // Generate an array of 20 items
  const arr = [...Array(20).keys()];

  progressBar.start(1, arr.length);

  for (const i of arr) {
    progressBar.increment(`Item ${i}`);
    await sleep(500);
  }

  progressBar.stop();
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
