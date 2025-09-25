let findBoxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetBtn");
let findWin = document.querySelector(".win-container");
let newfindwin=document.querySelector(".newwin-container");

let turn = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

findBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "0";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableButton=()=>{
  for(box of findBoxes)
  {
    box.disabled=true;
  }
}


checkWinner = () => {
  for (letPattern of winPattern) {
    let pos1 = findBoxes[letPattern[0]].innerText;
    let pos2 = findBoxes[letPattern[1]].innerText;
    let pos3 = findBoxes[letPattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        findWin.innerText=pos1;
        disableButton();
      }
    }
  }
};

const resetBox=()=>{
  turn=true;
  for(let box of findBoxes)
  {
    box.disabled=false;
    box.innerText="";
  }
  findWin.innerText="";
}


resetButton.addEventListener("click",resetBox);
