const boxes = document.querySelectorAll(".cell");
const winner = document.querySelector(".winner");
const restart = document.querySelector(".Restart");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turno = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (!isWinner && count === 9) {
      draw();
    }
  });
});

restart.addEventListener("click", () => {
  turno = true;
  for (let box of boxes) {
    winner.innerText = "";
    box.innerText = "";
    box.disabled = false;
  }
});

const boxesDisabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (pattern of winningConditions) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        boxesDisabled();
        winner.innerText = `The Winner is ${pos1}`;
      }
    }
  }
};

const draw = () => {
  winner.innerText = "Draw";
  boxes.disabled = true;
};
