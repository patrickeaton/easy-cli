import {
  promptTextInput,
} from '../../src/prompts';
import { EasyCLITheme } from '../../src/themes';

const main = async () => {
  const theme = new EasyCLITheme(3);

  const text = await promptTextInput('Enter some text');

  const text2 = await promptTextInput('Enter a color (red, green or blue)', {
    validator: (input: any) => ['red', 'green', 'blue'].includes(input),
    validationErrorMessage: 'Invalid color',
  });

  const password = await promptTextInput('Enter a password', {
    type: 'password',
  });

  const editor = await promptTextInput('Enter some text', {
    type: 'editor',
  });

  console.log({
    text,
    text2,
    password,
    editor,
  });
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
