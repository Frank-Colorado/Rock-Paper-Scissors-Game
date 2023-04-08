const scoreText = document.querySelector("#player-score");
const contentText = document.querySelector("#content");
const resultText = document.querySelector("#result");
const rpsBtn = document.querySelectorAll(".rpsButton");

const computerGeneration = () => {
  // This function will generate a random RPS choice from the computer
};

//function adds event listener
const playGame = () => {
  rpsBtn.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn.value);
      scoreText.innerText = `This is a test for ${btn.value}`;
    };
  });
};

playGame();
