import { EasyCLITheme } from '../../src/themes';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const theme = new EasyCLITheme(3);

  // const spinner = theme.getSpinner('success');
  // spinner.start('Loading...');
  // await sleep(1000);
  // spinner.stop();

  const progressBar = theme.getSimpleProgressBar('Records Processed', 'warn', {
    barDisplayOptions: 'success',
  });

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
