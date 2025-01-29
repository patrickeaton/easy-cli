import { loadConfigurationFromPath } from '../src/config/load-configuration';
import {
  promptChoice,
  promptConfirm,
  promptMultipleChoice,
  promptNumber,
  promptTextInput,
} from '../src/prompts';
import { EasyCLITheme } from '../src/themes/model';

const main = async () => {
  const theme = new EasyCLITheme(3);

  // const choice1 = await promptChoice(
  //   'Choose a color',
  //   ['red', 'green', 'blue'],
  //   {
  //     defaultOption: 'red',
  //     validator: (input: string) => ['red', 'green', 'blue'].includes(input),
  //     validationErrorMessage: 'Invalid color',
  //   }
  // );

  const choice2 = await promptMultipleChoice(
    'Select two or more colors',
    [
      theme.formattedString('red', { color: '#ff0000' }), 
      theme.formattedString('green', { color: '#00ff00' }), 
      theme.formattedString('blue', { color: '#0000ff' }), 
    ],
    {
      defaultSelected: ['red'],
      validator: (input: string[]) => input.length > 1,
      validationErrorMessage: 'Please select more than one color',
      theme,
      promptTheme: 'error',
    }
  );

  console.log(choice2);
  // const confirm = await promptConfirm('Are you sure?');
  // const text = await promptTextInput('Enter some text');

  // const text2 = await promptTextInput('Enter a color', {
  //   validator: (input: any) => ['red', 'green', 'blue'].includes(input),
  //   validationErrorMessage: 'Invalid color',
  // });

  // const password = await promptTextInput('Enter a password', {
  //   type: 'password',
  // });

  // const number1 = await promptNumber('Enter a number between 50-100', {
  //   value: 10,
  //   validator: (input: number) => input > 50 && input < 100,
  //   validationErrorMessage: 'Number must be greater between 50-100',
  // });

  // console.log({
  //   choice1,
  //   choice2,
  //   confirm,
  //   text,
  //   text2,
  //   number1,
  //   password
  // });
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
