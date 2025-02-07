import {
  promptMultipleChoice,
} from 'easy-cli-framework/prompts';
import { EasyCLITheme } from 'easy-cli-framework/themes';

const main = async () => {
  const theme = new EasyCLITheme(3);

  const choices1 = await promptMultipleChoice('Choose a color', [
    'red',
    'green',
    'blue',
  ]);

  const choices2 = await promptMultipleChoice(
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

  console.log({ choices1, choices2 });
};

main()
  .catch(console.error)
  .finally(() => process.exit(0));
