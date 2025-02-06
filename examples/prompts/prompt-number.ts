import {
  promptNumber,
} from 'easy-cli/prompts';
import { EasyCLITheme } from 'easy-cli/themes';

const main = async () => {
  const theme = new EasyCLITheme(3);

  const number = await promptNumber('Enter a number');

  // Prompt the user to enter a number between 1 and 10
  const number2 = await promptNumber('Enter a number between 1 and 10', {
    validator: input => input >= 1 && input <= 10,
    validationErrorMessage: 'Number must be between 1 and 10',
  });

  console.log({
    number,
    number2,
  });
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
