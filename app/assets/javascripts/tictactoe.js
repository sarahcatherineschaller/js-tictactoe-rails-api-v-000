$(function () {
  attachListeners();
})

<<<<<<< HEAD
=======
var attachListeners = function() {
  $('td').on('click', function() {
    if (!$.text(this) && !checkWinner()) {
      doTurn(this);
    }
  })
  $('#save').on('click', function() {
    saveGame();
  })
  $('#previous').on('click', function() {
    loadGames();
  })
  $('#clear').on('click', function() {
    resetBoard();
  })
}
>>>>>>> ac10d56679cd0e4d97afed41039110acf4963a91

const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

var turn = 0;
var currentGame = 0;

var player = function() {
  return turn % 2 ? 'O' : 'X';
}

var updateState = function(square) {
  $(square).text(player());
}

var setMessage = function(string) {
  $('#message').text(string);
}

var checkWinner = function() {
  var board = {};
  var winner = false;
  $('td').text((index, square) => board[index] = square);

  WIN_COMBOS.forEach(function(combo) {
    if (board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]] != "") {
      winner = true;
      setMessage(`Player ${board[combo[0]]} Won!`);
    }
  });
  return winner;
};

<<<<<<< HEAD
var doTurn = function(square) {
  updateState(square)
=======
var doTurn = function(event) {
  updateState(event)
>>>>>>> ac10d56679cd0e4d97afed41039110acf4963a91
  turn++;
  if (checkWinner()) {
    saveGame();
    resetBoard();
  } else if (turn === 9) {
    setMessage("Tie game.");
    saveGame();
    resetBoard();
  }
}

var saveGame = function() {
}

var resetBoard = function() {
  turn = 0;
  $('td').empty();
}

var resetBoard = function() {
  turn = 0;
  currentGame = 0;
  $('td').empty();
}

var attachListeners = function() {
  $('td').on('click', function() {
    if (!$.text(this) && !checkWinner()) {
      doTurn(this);
    }
  })
  $('#save').on('click', function() {
    saveGame();
  })
  $('#previous').on('click', function() {
    loadGames();
  })
  $('#clear').on('click', function() {
    resetBoard();
  })
}
