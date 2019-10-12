let boardCells = document.querySelectorAll(".row");
let turnCounter = 1;

let xMoves = [];
let oMoves = [];

boardCells.forEach(function(boardCell){
  boardCell.addEventListener("click", changeSquare);
});

function changeSquare(e){
  let clickedSquare = e.target;
  if ((turnCounter % 2) != 0 ) {
    clickedSquare.textContent = "X";
    turnCounter++;
    xMoves.push() = e.target.className;
    checkForWin("x");
  } else {
    clickedSquare.textContent = "O";
    turnCounter++;
    oMoves.push() = e.target.className;
    checkForWin("o");
  }
}

function checkForWin(moveMade) {
  if (moveMade == "x") {
    for(let i = 0, i < xMoves.length; i++){
      
    }
  } //end if moveMade = x statement
}

function declareDraw(){
  alert("No one won!");
}
