const scoreText = document.querySelector("#player-score");
const currentRoundText = document.querySelector("#current-round");
const resultText = document.querySelector("#result");
const rpsBtn = document.querySelectorAll(".rpsButton");
const endBtn = document.querySelector("#endGameButton");

// Object containing the overall score of the game
const finalScore = {
  score: 0,
};
const computerGeneration = () => {
  // This function will generate a random RPS choice from the computer
  const rpsArray = ["Rock", "Paper", "Scissors"];
  const randomChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
  return randomChoice;
};
const calculateScore = (player, computer) => {
  //This function will calculate the score off the player choice vs computer choice
  let score;
  if (player === computer) {
    score = 0;
  } else if (player === "Rock" && computer === "Scissors") {
    score = 1;
  } else if (player === "Scissors" && computer === "Paper") {
    score = 1;
  } else if (player === "Paper" && computer === "Rock") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
};

const displayDOM = (score, player, computer) => {
  //This function will change the display of the DOM.
  //It will display score, player/computer choices, and result of win/loss

  switch (score) {
    case -1:
      resultText.textContent = "You Lost!";
      finalScore.score--;
      break;
    case 0:
      resultText.textContent = "It's a Draw!";
      break;
    case 1:
      resultText.textContent = "You Won!";
      finalScore.score++;
  }
  currentRoundText.textContent = `👨 ${player} VS 🤖 ${computer}`;
  scoreText.textContent = `Score: ${finalScore.score}`;
};

const rpsRound = (playerChoice) => {
  const computerChoice = computerGeneration();
  const score = calculateScore(playerChoice, computerChoice);
  displayDOM(score, playerChoice, computerChoice);
};
// This function adds onclick to all rpsBtns and initiates the game
// Then sends player value to rpsRound function
const playGame = () => {
  rpsBtn.forEach((btn) => {
    btn.onclick = () => rpsRound(btn.value);
  });
  endBtn.onclick = () => endGame();
};

const endGame = () => {
  finalScore.score = 0;
  scoreText.textContent = "";
  currentRoundText.textContent = "";
  resultText.textContent = "";
};

playGame();
if (score === 1) {
  resultText.textContent = "You Won!";
  finalScore.score++;
} else if (score === -1) {
  resultText.textContent = "You Lost!";
  finalScore.score--;
} else {
  resultText.textContent = "It's a Draw!";
}
