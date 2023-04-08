const computerGeneration = () => {
  // This function will generate a random RPS choice from the computer
};

//function adds event listener
const playGame = () => {
  rpsBtn.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn.value);
    };
  });
};

playGame();
