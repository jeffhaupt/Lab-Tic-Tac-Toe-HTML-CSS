let boardCells = document.querySelectorAll(".row");
let turnCounter = 1;

boardCells.forEach(function(boardCell){
  boardCell.addEventListener("click", changeSquare);
});

function changeSquare(e){
  let clickedSquare = e.target;
  if ((turnCounter % 2) != 0 ) {
    clickedSquare.textContent = "X";
    turnCounter++;
    checkForWin();
  } else {
    clickedSquare.textContent = "O";
    turnCounter++;
    checkForWin();
  }
}

function checkForWin() {
  
}

function declareDraw(){
  alert("No one won!");
}
