let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
  const humanDifference = Math.abs(target - human);
  const computerDifference = Math.abs(target - computer);
  return humanDifference <= computerDifference;
};

const updateScore = (str) => {
  if (str === "human") {
    humanScore++;
  } else if (str === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

