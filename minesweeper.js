/*console.log("This is what an empty board would look like:");
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);
const guessLine = "1| | ";
const bombLine = " |B| ";
console.log("This is what a board with a guess and a bomb on it would look like:");
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);*/
//CLEAN SLATE

/*const printBoard = board => {
  console.log("Current Board: ");
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);

board[0][1] = "1";

board[2][2] = "B";

printBoard(board);*/
//CLEAN SLATE 2

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);

    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
    console.log('Game Over! Here is the final board: ');
    this._board.print();
    } else if (this._board.hasNonBombEmptySpaces()) {
      console.log('Current Board: ');
      this._board.print();
    } else {
      console.log('Congratulations on winning! Here is your winning board: ');
      this._board.print()
    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfEmptySpaces = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  hasNonBombEmptySpaces() {
    return this._numberOfBombs !== this._numberOfEmptySpaces;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
  ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
          if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
            numberOfBombs++;
          }
      }
    });
    return numberOfBombs;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    }
    this._numberOfEmptySpaces--;

    if (this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
  }

  print( ){
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(' ');
      }
      board.push(row);
    };
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(null);
      }
      board.push(row);
    }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] != 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;};
    }

    return board;
  }
}

/*
Test Code
const game = new Game(3, 3, 4);
game.playMove(1,1);*/

//console.log(generateBombBoard(3,3,3));

/*let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console. log('Updated Player Board: ');
printBoard(playerBoard);*/
