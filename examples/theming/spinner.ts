import { EasyCLITheme } from '../../src/themes';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const theme = new EasyCLITheme(3);

  const spinner = theme.getSpinner('success');
  spinner.start('Loading...');
  await sleep(1000);
  spinner.stop();

};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
