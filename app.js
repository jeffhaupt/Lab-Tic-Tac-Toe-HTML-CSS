let boardCells = document.querySelectorAll(".row");
let turnCounter = 1;

let xMoves = "";
let oMoves = "";

boardCells.forEach(function(boardCell){
  boardCell.addEventListener("click", changeSquare);
});

function changeSquare(e){
  let clickedSquare = e.target;
  if ((turnCounter % 2) != 0 ) {
    clickedSquare.textContent = "X";
    turnCounter++;
    xMoves = xMoves + e.target.className + " ";
    checkForWin("x");
  } else {
    clickedSquare.textContent = "O";
    turnCounter++;
    oMoves = oMoves + e.target.className + " ";
    checkForWin("o");
  }
}

function checkForWin(moveMade) {
  if (moveMade == "x") {
    if ((xMoves.split("top").length - 1) == 3) {
      console.log("X Wins! - Top Row");
    } else if((xMoves.split("bottom").length - 1) == 3) {
      console.log("X Wins! - Bottom Row");
    } else if((xMoves.split("middle").length - 1) == 4) {
      console.log("X Wins! - Middle Row");
    } else if(((xMoves.split("top left").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("bottom right").length - 1) == 1)) {
      console.log("X Wins Again!");
    } else if(((xMoves.split("top right").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("bottom left").length - 1) == 1)) {
      console.log("X Wins Again!");

    }
    //console.log(xMoves.split("top").length - 1);
    /* for(let i = 0, i < xMoves.length; i++){

    } */
  } //end if moveMade = x statement
}

function declareDraw(){
  alert("No one won!");
}
