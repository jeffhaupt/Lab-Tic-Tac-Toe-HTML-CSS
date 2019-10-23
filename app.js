let boardCells = document.querySelectorAll("div.left, div.middle, div.right");


//for modal functionality
let modal = document.getElementById("myModal");
modal.addEventListener("click", resetGame);
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
let xMoves = [];
let oMoves = [];

let turnCounter = 1;
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
      clickedSquare.textContent = "X"; //change for X
      for (let i = 0; i < boardCells.length; i++) {
        if (clickedSquare.classList.value == boardCells[i].classList.value) {
          xMoves.push(i + 1);
          if(xMoves.length >= 3) {
            checkForWin(xMoves, "X");
          }
        } //end assign move to xMoves
      } //end for loop to assign move to xMove

      turnCounter++;
    } else {
      clickedSquare.textContent = "O"; //change square to show O
      for (let i = 0; i < boardCells.length; i++) {
        if (clickedSquare.classList.value == boardCells[i].classList.value) {
          oMoves.push(i + 1);
          if (oMoves.length >= 3) {//doesn't bother checking until 3 moves are made
            checkForWin(oMoves, "O");
          }

        } //end assign move to oMoves
      } //end for loop to assign move to xMove
      turnCounter++;
    }
  }
}


/************************************************************************
This is the main function for the game

* the moves.includes logic is checking for different sets of threes
  to see if the X or O has successfully won the game
************************************************************************/
function checkForWin(moves, whichTurn) {

  if ((moves.includes(1) && moves.includes(2)  && moves.includes(3)) ||
    (moves.includes(4) && moves.includes(5) && moves.includes(6)) ||
    (moves.includes(7) && moves.includes(8) && moves.includes(9)) ||
    (moves.includes(1) && moves.includes(4) && moves.includes(7)) ||
    (moves.includes(2) && moves.includes(5) && moves.includes(8)) ||
    (moves.includes(3) && moves.includes(6) && moves.includes(9)) ||
    (moves.includes(1) && moves.includes(5) && moves.includes(9)) ||
    (moves.includes(3) && moves.includes(5) && moves.includes(7))
  )   {
    showModal(whichTurn);
  } else if (moves.length == 5){
    declareDraw();
  }
} //end checkForWin


function declareDraw(){
  showModal(); //calls showModal, but initiates different logic
}

//shows the modal window
function showModal(winner) {
    modal.style.display = 'block';
    if (winner == "X" || winner == "O") {
      modalContent.innerHTML = `<h2>${winner} WON!</h2>
      <p class="instruction">click anywhere to reset the game</p>
      `;
    } else {
        modalContent.innerHTML = `<h2>This game is a DRAW</h2>
        <p class="instruction">click anywhere to reset the game</p>
        `;
    }
}

//resets game play by hiding modal and resetting all variables
function resetGame() {
  modal.style.display = 'none';
  modalContent.innerHTML = " ";
  oMoves = [];
  xMoves = [];
  turnCounter = 1;
  for ( let i = 0; i < boardCells.length; i++ ){
    boardCells[i].textContent = "";
  }
}
