import yargs, { alias, array, demandOption, Options } from 'yargs';
import { EasyCLI } from '../src';
import { EasyCLICommand } from '../src/commands';
import { EasyCLITheme } from '../src/themes/model';
import { EasyCLIConfigFile } from '../src/config';

const app = new EasyCLI({
  executionName: 'easy-cli',
});
const theme = new EasyCLITheme();
const config = new EasyCLIConfigFile({
  filename: 'easy-cli.config',
  extensions: ['js'],
});

app.setTheme(theme);
app.setConfig(config);

const command = new EasyCLICommand(
  'configure',
  (params, theme) => theme?.getLogger().log(params),
  {
    description: 'Set a config variable',
    aliases: ['config', 'cfg'],
    args: {
      key: {
        describe: 'What key(s) are you setting?',
        type: 'string',
      },
    },
    prompts: {
      value: {
        describe: 'the value to set',
        type: 'string',
        prompt: 'missing',
        demandOption: true,
      },
    },
  }
);

app.handleVerboseFlag();
app.addCommand<any>(command as any);

app.execute(yargs => yargs.wrap(null));
