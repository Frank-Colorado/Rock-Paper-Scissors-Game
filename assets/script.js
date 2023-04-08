const scoreText = document.querySelector("#player-score");
const contentText = document.querySelector("#content");
const resultText = document.querySelector("#result");
const rpsBtn = document.querySelectorAll(".rpsButton");

const computerGeneration = () => {
  // This function will generate a random RPS choice from the computer
};
const calculateScore = (player, computer) => {
  //This function will calculate the score off the player choice vs computer choice
};

const displayDOM = (score, player, computer) => {
  //This function will change the display of the DOM.
  //It will display score, player/computer choices, and result of win/loss
};

const rpsRound = (player) => {
  // This function will call computerGeneration
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
};

playGame();
