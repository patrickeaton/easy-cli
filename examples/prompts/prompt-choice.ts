import {
  promptChoice,
} from '../../src/prompts';
import { EasyCLITheme } from '../../src/themes';

const main = async () => {

  const choice1 = await promptChoice('Choose a color', [
    'red',
    'green',
    'blue',
  ]);

  const choice2 = await promptChoice(
    'Choose a color',
    ['red', 'green', 'blue'],
    {
      defaultOption: 'red',
      validator: (input: string) => ['red', 'green', 'blue'].includes(input),
      validationErrorMessage: 'Invalid color',
    }
  );

  console.log({ choice1, choice2 });
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
