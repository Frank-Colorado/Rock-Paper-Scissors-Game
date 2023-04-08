const scoreText = document.querySelector("#player-score");
const contentText = document.querySelector("#content");
const resultText = document.querySelector("#result");

const playGame = () => {
  const rpsBtn = document.querySelectorAll(".rpsButton");
  rpsBtn.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn.value);
      scoreText.innerText = `This is a test for ${btn.value}`;
    };
  });
};

playGame();
