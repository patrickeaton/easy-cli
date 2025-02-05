import { EasyCLIConfigFile } from '../../src/config-files';

const main = async () => {
  const config = new EasyCLIConfigFile({
    filename: 'easy-cli.config',
    path: 'config',
    extensions: [ 'js'],
  });

  // await config.save({
  //   var1: 'value1',
  //   var2: 'value2',
  // });

  const res = await config.load();
  console.log(res);
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
