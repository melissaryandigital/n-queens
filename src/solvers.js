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
  var newBoard = new Board({ 'n': n });

  var solutionBoard = function (n, currentRow) {
    // Base case
    // If rowIndex === n
    if (currentRow === n) {
      // Increment solutionCount
      solutionCount++;
      return;
    }

    // Work to do

    // Feed in a row
    // Iterate through the columns in this row
    for (var i = 0; i < n; i++) {

      // Put the piece down
      newBoard.togglePiece(currentRow, i);

      // Call hasAnyRowConflicts
      if (newBoard.hasAnyRooksConflicts()) {
        // If there is a conflict, toggle the piece off (pick it up)
        newBoard.togglePiece(currentRow, i);
      } else {
        solutionBoard(n, currentRow + 1);
        newBoard.togglePiece(currentRow, i);
      }

    }

    // Move to next column and put piece down

    // Recursion call with one step closer to base
    // If there are no conflicts, feed in next row
  };

  solutionBoard(n, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};





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
