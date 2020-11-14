/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var newBoard = new Board({ 'n': n });
  var solution = [];

  // If (hasAnyRooksConflicts) is true, toggle same rook
  for (var i = 0; i < n; i++) {
    newBoard.togglePiece(i, i);

    if (newBoard.hasAnyRooksConflicts()) {
      togglePiece(i, i);
    }
  }
  // Iterate through the attributes of newBoard (as long as it's not 'n')
  // solution.push(row);
  for (var key in newBoard.rows()) {
    solution.push(newBoard.get(key));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;

  // Function creates a new board
  // Pass in what column to start at for 1st piece
  // Stop calling when startColumn === n - 1

  var solutionBoard = function (n, startCol) {


    // Base case
    // Stop after evaluating last row
    // If rowIndex === n
    // Increment solutionCount
    // Return

    // Work to do

    // LOOP
    // Feed in a row
    // Iterate through the row
    // Put the piece down
    // Call hasAnyRowConflicts
    // If there is a conflict, toggle the piece off (pick it up)
    // Move to next column and put piece down

    // Recursion call with one step closer to base
    // If there are no conflicts, feed in next row










    var startCol = 0 || startCol;

    var newBoard = new Board({ 'n': n });

    // This variable clears every time we create a new board
    // Store columns we have placed a rook
    var colPlacements = [];

    // Put a piece down at colStart
    newBoard.togglePiece(0, startCol);
    colPlacements.push(startCol);


    for (var rowIndex = 1; rowIndex < n; rowIndex++) {
      var colIndex = 0;
      // Find a column that does not have a piece down
      // Place it and move on to the next row
      // (colPlacement.indexOf(whatValueUrLookingFor) === -1 ) if this is true, the value does not exist in the array
      // loop through each column (0 to n). once we find a column index that is not in colPlacements, stop the loop.newBoard
      while (colIndex < n) {
        if (colPlacements.indexOf(colIndex) === -1) {
          colPlacements.push(colIndex);
          // togglePiece (put rook on board) at rowIndex and colIndex
          newBoard.togglePiece(rowIndex, colIndex);
          break;
        }
      }
    }

    // if (newBoard.hasAnyRooksConflicts()) {
    //   togglePiece(rowIndex, i);
    // }
    //solutionCount++;
    startCol++;
    solutionBoard(n, startCol);
  };

  solutionBoard(n, startCol);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// Start on rowIndex 0  startCol

// Iterate through rowIndex1 and togglepiece on each column, then call hasAnyRooksConflicts until it doesn't have a conflict
// Move to rowIndex2 and repeat
// until you get to n - 1

// increment startCol



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
