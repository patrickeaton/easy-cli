import { EasyCLITheme } from '../../src/themes';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const theme = new EasyCLITheme(3);


  const progressBar = theme.getStatusProgressBar('Records Processed');

  const arr = [...Array(100).keys()];
  progressBar.start(1, arr.length);

  const results = {
    success: 0,
    warn: 0,
    error: 0,
  };

  const process = (i: number) => {
    if (i % 2 === 0) {
      results.success++;
    } else if (i % 3 === 0) {
      results.warn++;
    } else {
      results.error++;
      return;
    }
  };

  for (const i of arr) {
    process(i);
    progressBar.increment( {
      current: `Item ${i}`,
      ...results,
    });
    await sleep(100);
  }
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
