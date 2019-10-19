let boardCells = document.querySelectorAll("div.left, div.middle, div.right");
console.log(boardCells);

let turnCounter = 1;

//for modal functionality
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modalContent");

/****************************************************
xMoves & oMoves are created to track class names that
are logically used to check to see if the x or O
player has one.

It creates a string that keeps track by concantonating
the class names to the string and then the string is
searched for number of instances of class names to
determine a win
*****************************************************/
let xMoves = "";
let oMoves = "";

//adding a click event listener to div "rows"
boardCells.forEach(function(boardCell){
  boardCell.addEventListener("click", changeSquare);
});

/****************************************************
changeSquare is used to determine whether it is a move
for X or O and then adds the appropriate letter to the
clicked square, so long as the square is not already
occupied. After each move, the game is checked to see
if there is a winner.
*****************************************************/
function changeSquare(e){
  if (e.target.textContent == ""){ //check to make sure square is not occupied
    let clickedSquare = e.target;
    if ((turnCounter % 2) != 0 ) {
      clickedSquare.textContent = "X";// change sqaure to show X
      console.log(e.target.classList.value);
      xMoves = xMoves + e.target.className + " ";
      checkForWin("x");
      turnCounter++;
      if (turnCounter == 10) {
        declareDraw();
      }
    } else {
      clickedSquare.textContent = "O"; //change square to show O
      oMoves = oMoves + e.target.className + " ";
      checkForWin("o");
      turnCounter++;
      if (turnCounter == 10) {
        declareDraw();
      }
    }
  }
}

function checkForWin(moveMade) {
  if (moveMade == "x") { //check "x" move to see if it resulted in a win
    if (((xMoves.split("top left").length - 1) == 1) && ((xMoves.split("top middle").length - 1) == 1) && ((xMoves.split("top right").length - 1) == 1)){
      console.log("X Wins! - Top Row");//end top row "x" win check
      showModal("X"); //show modal window
    } else if (((xMoves.split("bottom left").length - 1) == 1) && ((xMoves.split("bottom middle").length - 1) == 1) && ((xMoves.split("bottom right").length - 1) == 1)){
      console.log("X Wins! - Bottom Row");//end bottom row "x" check
      showModal("X");
    } else if(((xMoves.split("middle left").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("middle right").length - 1) == 1)){
      console.log("X Wins! - Middle Row");//end middle (horizontal) row "x" check
    } else if(((xMoves.split("top middle").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("bottom middle").length - 1) == 1)){
      console.log("X Wins! - Middle Column"); //end middle column check
    } else if(((xMoves.split("top left").length - 1) == 1) && ((xMoves.split("middle left").length - 1) == 1) && ((xMoves.split("bottom left").length - 1) == 1)){
      console.log("X Wins! - Left Row"); // end left column check
    } else if(((xMoves.split("top right").length - 1) == 1) && ((xMoves.split("middle right").length - 1) == 1) && ((xMoves.split("bottom right").length - 1) == 1)){
      console.log("X Wins! - Left Row"); // end right column check
    } else if(((xMoves.split("top left").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("bottom right").length - 1) == 1)) {
      console.log("X Wins diaganol1!");
    } else if(((xMoves.split("top right").length - 1) == 1) && ((xMoves.split("middle middle").length - 1) == 1) && ((xMoves.split("bottom left").length - 1) == 1)) {
      console.log("X Wins diaganol2!");
    }
  } //end if moveMade = x statement

  if (moveMade == "o") { // check "O" moves to see if there is a win
    if (((oMoves.split("top left").length - 1) == 1) && ((oMoves.split("top middle").length - 1) == 1) && ((oMoves.split("top right").length - 1) == 1)){
      console.log("O Wins! - Top Row");//end top row "o" win check
    } else if (((oMoves.split("bottom left").length - 1) == 1) && ((oMoves.split("bottom middle").length - 1) == 1) && ((oMoves.split("bottom right").length - 1) == 1)){
      console.log("O Wins! - Bottom Row");//end bottom row "o" check
    } else if(((oMoves.split("middle left").length - 1) == 1) && ((oMoves.split("middle middle").length - 1) == 1) && ((oMoves.split("middle right").length - 1) == 1)){
      console.log("O Wins! - Middle Row");//end middle (horizontal) row "o" check
    } else if(((oMoves.split("top middle").length - 1) == 1) && ((oMoves.split("middle middle").length - 1) == 1) && ((oMoves.split("bottom middle").length - 1) == 1)){
      console.log("O Wins! - Middle Column"); //end middle column check
    } else if(((oMoves.split("top left").length - 1) == 1) && ((oMoves.split("middle left").length - 1) == 1) && ((oMoves.split("bottom left").length - 1) == 1)){
      console.log("O Wins! - Left Row"); // end left column check
    } else if(((oMoves.split("top right").length - 1) == 1) && ((oMoves.split("middle right").length - 1) == 1) && ((oMoves.split("bottom right").length - 1) == 1)){
      console.log("O Wins! - Left Row"); // end right column check
    } else if(((oMoves.split("top left").length - 1) == 1) && ((oMoves.split("middle middle").length - 1) == 1) && ((oMoves.split("bottom right").length - 1) == 1)) {
      console.log("O Wins diaganol1!");
    } else if(((oMoves.split("top right").length - 1) == 1) && ((oMoves.split("middle middle").length - 1) == 1) && ((oMoves.split("bottom left").length - 1) == 1)) {
      console.log("O Wins diaganol2!");
    }
  } //end if moveMade = o statement
}

function declareDraw(){
  alert("No one won!");
}

function showModal(winner) {
    modal.style.display = 'block';
    modalContent.innerHTML = `<h2>${winner}</h2>
    <p>Won the game</p>
    `;
}
