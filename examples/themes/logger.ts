import { EasyCLITheme } from 'easy-cli-framework/themes';

const main = async () => {
  const theme = new EasyCLITheme(3);

  const logger = theme.getLogger();

  logger.printFormattedString(
    'Hello, world!',
    {
      text: 'success',
      format: 'success',
    },
    ' ',
    {
      text: 'Hello, world!',
      format: [
        'error',
        {
          bgColor: '#555555',
          bold: true,
          strikethrough: true,
        },
      ],
    }
  );

  logger.log('Log', { a: 'a', b: 'b' });
  logger.info('Info', 'info');
  logger.warn('Warn', 'warning');
  logger.error('Error', 'error');

  logger.info('Info Force').force();

  console.log(logger.getExecutionLogs());
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
