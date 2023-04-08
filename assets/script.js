const playGame = () => {
  const rpsBtn = document.querySelectorAll(".rpsButton");
  console.log(rpsBtn);
  rpsBtn.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn.value);
    };
  });
};

playGame();
