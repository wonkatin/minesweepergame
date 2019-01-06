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

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  };
  return board;
};
console.log(generatePlayerBoard(3,3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  };
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //This code has the potential to place bombs on top of already existing bombs.
  };

  return board;
};
console.log(generateBombBoard(3,3,3));
