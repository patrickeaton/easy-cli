import {
  CsvFile,
  EasyCLI,
  EasyCLICommand,
  EasyCLILogger,
  EasyCLITheme,
  promptChoice,
  promptConfirm,
} from 'easy-cli';

// Define the types for the golf game

// A hole in golf
type Hole = {
  // The total distance of the hole
  distance: number;
  // The score needed to get par
  par: number;
};

// A score for a player
type Score = {
  name: string;
  score: number;
  holes: number;
  shots: number;
  par: number;
};

// Global flags for the golf game
type GolfGlobalFlags = {
  name?: string;
};

// The clubs available to the player.
const CLUBS: {
  [key: string]: { name: string; min: number; max: number };
} = {
  DRIVER: { name: 'Driver', min: 250, max: 330 },
  WOOD: { name: 'Wood', min: 180, max: 220 },
  IRON: { name: 'Iron', min: 100, max: 180 },
  WEDGE: { name: 'Wedge', min: 20, max: 80 },
};

// A CSV file for tracking scores.
const scoresCsv = new CsvFile<Score>('./examples/golf/scores.csv');

// Generate a random course with N holes
const generateCourse = (holes: number) => {
  const course: Hole[] = [];
  for (let i = 0; i < holes; i++) {
    const distance = Math.floor(Math.random() * 350) + 120;
    const par = Math.floor(distance / 220) + 3;

    course.push({
      distance,
      par,
    });
  }
  return course;
};

// Display the score table
const showScoreTable = (theme: EasyCLITheme, scores: Score[]) => {
  const table = (theme as EasyCLITheme).getTable<Score>([
    { name: 'Name', data: item => item.name, style: { bold: true } },
    { name: 'Holes', data: item => item.holes },
    { name: 'Par', data: item => item.par },
    { name: 'Shots', data: item => item.shots },
    {
      name: 'Score',
      data: item => item.score,
      style: item => (item.score <= 0 ? 'success' : 'error'),
    },
  ]);

  theme.getLogger().log(''); // Add a newline
  table.render(scores);
  theme.getLogger().log(''); // Add a newline
};

// Prompt the user to take a shot
const takeShot = async (remaining: number) => {

  // Recommend a club based on the distance to use as the default
  const recommendedClub = (distance: number) => {
    if (distance > 250) {
      return CLUBS.DRIVER;
    }

    if (distance > 180) {
      return CLUBS.WOOD;
    }

    if (distance > 100) {
      return CLUBS.IRON;
    }

    return CLUBS.WEDGE;
  };

  // Prompt the user to select a club
  const clubSelected = await promptChoice(
    'Select a club',
    Object.values(CLUBS).map(club => club.name),
    {
      defaultOption: recommendedClub(remaining).name,
    }
  );

  // Get the club details
  const { name, min, max } = Object.values(CLUBS).find(
    club => club.name === clubSelected
  ) as { name: string; min: number; max: number };

  // Let's be a little more forgiving with the distance, so the max and min are a bit more flexible.
  const minDistance = Math.max(remaining - max - 10, min);
  const maxDistance = Math.min(remaining + min + 10, max);

  // Randomize the distance the player hits the ball
  let distance = Math.floor(Math.random() * (maxDistance - minDistance)) + minDistance;

  return { club: name, distance };
};

// Have the player play a hole
const playHole = async (
  index: number,
  hole: Hole,
  logger: EasyCLILogger
): Promise<number> => {
  logger.success(
    `\nPlaying hole ${index + 1} (${hole.distance} yards, par ${hole.par})`
  );
  logger.log('==================================');

  let shots = 0;
  let remaining = hole.distance;

  // While the player is more than 20 yards away from the hole, they can take shots.
  while (remaining > 20) {
    shots++;
    const { club, distance } = await takeShot(remaining);
    // Account for if they overshoot the hole.
    remaining = Math.abs(remaining - distance);
    logger.log(`Shot ${shots}: You hit your ${club} ${distance} yards`);
    logger.log(`Remaining: ${remaining} yards`);
    logger.log(''); // Add a newline
  }

  // If the player is within 20 yards, they can putt.
  if (remaining > 0) {
    // This is a rough estimate of how many putts you'll need.
    const putts = Math.floor(Math.random() * (1 + remaining / 8)) + 1; 
    shots += putts;
    logger.log(`You ${putts} putt the last ${remaining} yards`);
  }

  logger.log(''); // Add a newline

  // Display the score for the hole
  if (shots === 1) logger.success(`Hole in one!`);
  else if (shots === hole.par - 2) {
    logger.success(`Eagle!`);
  } else if (shots === hole.par - 1) {
    logger.success(`Birdie!`);
  } else if (shots === hole.par) {
    logger.success(`Par!`);
  } else {
    logger.error(`Ouch... ${shots - hole.par} over par`);
  }

  return shots;
};

// Define the commands for the golf game

// The leaderboard command that displays the top scores
const leaderboardCommand = new EasyCLICommand<
  { count: number },
  GolfGlobalFlags
>(
  'leaderboard',
  async ({ name }, theme) => {
    // Load the scores from the CSV file
    const scores = await scoresCsv.read();

    // Filter the scores by the name if provided
    const highscores = scores
      .filter(score => !name || name === score.name)
      .sort((a, b) => a.score - b.score)
      .slice(0, 5);

    // Display the scores
    showScoreTable(theme as EasyCLITheme, highscores);
  },
  {
    description: 'Show the Leaderboard',
    flags: {
      count: {
        type: 'number',
        describe: 'How many highscores to show',
        default: 10,
      },
    },
  }
);

// The play command that allows the player to play a round of golf
const playCommand = new EasyCLICommand<
  { name: string; holes: number },
  GolfGlobalFlags
>(
  'play',
  async ({ name, holes }, theme) => {
    const logger = (theme as EasyCLITheme).getLogger();
    logger.success(`Playing ${holes} holes of golf as ${name}\n`);

    const course = generateCourse(holes);

    const scoreTally: Pick<Score, 'par' | 'score' | 'shots'>[] = [];

    for (let i = 0; i < holes; i++) {
      const hole = course[i];
      const shots = await playHole(i, hole, logger);

      scoreTally.push({
        par: hole.par,
        shots,
        score: shots - hole.par,
      });
    }

    const score: Score = {
      name,
      holes,
      score: scoreTally.reduce((acc, { score }) => acc + score, 0),
      shots: scoreTally.reduce((acc, { shots }) => acc + shots, 0),
      par: scoreTally.reduce((acc, { par }) => acc + par, 0),
    };

    showScoreTable(theme as EasyCLITheme, [score]);

    const save = await promptConfirm('Do you want to save your score?', {
      defaultOption: true,
    });

    if (!save) {
      return;
    }

    await scoresCsv.append([score]);
  },
  {
    description: 'Play a round of golf',
    prompts: {
      // Prompt the user to enter their name, if it's passed as a flag, don't prompt.
      name: {
        type: 'string',
        describe: 'Enter your name',
        prompt: 'missing', // Don't prompt if the flag is provided
      },
      // Prompt the user to select the number of holes to play, if it's passed as a flag, don't prompt.
      holes: {
        type: 'number',
        describe: 'How many holes do you want to play?',
        prompt: 'missing',
        choices: [9, 18],
      },
    },
  }
);

// Create a new theme for the golf game with verbose logging.
const theme = new EasyCLITheme(3);

new EasyCLI<GolfGlobalFlags>({
  executionName: 'golf',
  defaultCommand: 'leaderboard',
  globalFlags: {
    name: {
      type: 'string',
      describe: 'The name of the player',
    },
  },
})
  .setTheme(theme)
  .addCommand<{ count: number }>(leaderboardCommand)
  .addCommand<{ name: string; holes: number }>(playCommand)
  .execute();
