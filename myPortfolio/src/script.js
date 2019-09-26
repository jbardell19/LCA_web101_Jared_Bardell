'use strict';

$(function(){
var player = 1;
var board = $('div[data-cell]');


$('div[data-cell]').click(function() {
    var box = $(this);
    var isBoxFilled = checkBoxForPrevTurn(this);
    if(isBoxFilled) {
      alert("You can't do that!  Choose another one!!");
    } else {
      var pattern = determinePattern();
      placeTurn(box,pattern);
      if (checkForWinner(pattern)) {
        alert ("Player " + player + " Tic Tac Toe Three In A Row!!!");
      }
      changePlayer();
    }
  });

  function checkBoxForPrevTurn(box) {
    if (box.innerHTML === 'X' || box.innerHTML === 'O')
      return true;
    else
      return false;
  }

  
  function determinePattern() {
    if (player === 1) {
      return 'X';
    } else {
      return 'O';
    }
  }

  function checkForWinner(pattern){
    
    if (board[0].innerHTML === pattern &&
      board[1].innerHTML === pattern &&
       board[2].innerHTML === pattern) {
      return true;
    // 2nd row
    } else if (board[3].innerHTML === pattern && board[4].innerHTML === pattern && board[5].innerHTML === pattern) {
      return true;
    // 3rd row
    } else if (board[6].innerHTML === pattern && board[7].innerHTML === pattern && board[8].innerHTML === pattern) {
      return true;
    // diagonals
    } else if (board[0].innerHTML === pattern && board[4].innerHTML === pattern && board[8].innerHTML === pattern) {
      return true;
    } else if (board[2].innerHTML === pattern && board[4].innerHTML === pattern && board[6].innerHTML === pattern) {
      return true;
    // columns
    } else if (board[0].innerHTML === pattern && board[3].innerHTML === pattern && board[6].innerHTML === pattern) {
      return true;
    } else if (board[1].innerHTML === pattern && board[4].innerHTML === pattern && board[7].innerHTML === pattern) {
      return true;
    } else if (board[2].innerHTML === pattern && board[5].innerHTML === pattern && board[8].innerHTML === pattern) {
      return true;
    }
    return false;
  }

  function changePlayer() {
    if (player === 1) {
      player = 2;
    } else {
      player = 1;
    }
  }

  function placeTurn(box, pattern) {
      box.text(pattern);
  }

  function reset() {
    player = 1;
    for (let i= 0; i<9; i++){
      board[i].innerHTML='';
    }
  }

  $('#clear').click(function() {
    reset();
  })

});