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

  solution = newBoard.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;
  var newBoard = new Board({ 'n': n });

  var solutionBoard = function (n, currentRowIndex) {

    // Base case
    if (currentRowIndex === n) {
      // Increment solutionCount
      solutionCount++;
      return;
    }

    // Work to do

    // Feed in a row
    // Iterate through the columns in this row
    for (var i = 0; i < n; i++) {

      // Put the piece down
      newBoard.togglePiece(currentRowIndex, i);

      // Call hasAnyRowConflicts
      if (newBoard.hasAnyRooksConflicts()) {
        // If there is a conflict, toggle the piece off (pick it up)
        newBoard.togglePiece(currentRowIndex, i);
      } else {
        solutionBoard(n, currentRowIndex + 1);
        newBoard.togglePiece(currentRowIndex, i);
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
  var newBoard = new Board({ 'n': n });
  var solution = [];

  var solutionBoard = function (n, currentRowIndex) {

    //base case: when the passed in currentRowIndex equals n (i.e. the row doesn't exist) then we know we've reached the end of the process and found a board that is valid
    //set the solution equal to the valid board
    //return solution.

    if (currentRowIndex === n) {
      if (solution.length !== n) {
        for (var t = 0; t < newBoard.rows().length; t++) {
          solution.push(newBoard.get(t).slice());
        }
      }

      return;
    }

    for (var i = 0; i < n; i++) {
      newBoard.togglePiece(currentRowIndex, i);

      if (!newBoard.hasAnyQueensConflicts()) {
        solutionBoard(n, currentRowIndex + 1);
      }
      newBoard.togglePiece(currentRowIndex, i);
    }
  };

  solutionBoard(n, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  if (solution.length === 0) {
    return newBoard.rows();
  } else {
    return solution;
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
