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
  const randomChoice = Math.floor(Math.random() * rpsArray.length);
  return rpsArray[randomChoice];
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
  currentRoundText.textContent = `👨 ${player} VS 🤖 ${computer}`;

  if (score === 1) {
    resultText.textContent = "You Won!";
    finalScore.score++;
  } else if (score === -1) {
    resultText.textContent = "You Lost!";
    finalScore.score--;
  } else {
    resultText.textContent = "It's a Draw!";
  }

  scoreText.textContent = `Score: ${finalScore.score}`;
};

const rpsRound = (playerChoice) => {
  // This function will call computerGeneration
  let computerChoice = computerGeneration();
  console.log(playerChoice);
  console.log(computerChoice);
  let score = calculateScore(playerChoice, computerChoice);
  displayDOM(score, playerChoice, computerChoice);

  // Then it will take both player/computer values and send to calculateScore function
  // Then it will take player/computer/score values and send to displayDOM function
};
// This function adds onclick to all rpsBtns and initiates the game
// Then sends player value to rpsRound function
const playGame = () => {
  rpsBtn.forEach((btn) => {
    btn.onclick = () => {
      rpsRound(btn.value);
    };
  });
  endBtn.onclick = () => {
    console.log("clicked");
    endGame();
  };
};

const endGame = () => {
  finalScore.score = 0;
  scoreText.textContent = "";
  currentRoundText.textContent = "";
  resultText.textContent = "";
};

playGame();
