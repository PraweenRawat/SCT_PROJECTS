let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let WinContainer = document.querySelector(".Win-container");
let win = document.querySelector("#Win");

// playerO , PlayerX
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const ResetGame = () => {
  turnO = true;
  enableBoxes();
  WinContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  win.innerText = `Congratulations, Winner is ${Winner}`;

  WinContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos1Val && pos2Val === pos3Val)
        {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

NewGameBtn.addEventListener("click", ResetGame);
ResetBtn.addEventListener("click", ResetGame);
