const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesMatrix = matrix.map(row => row.map(() => 0));
  for (let i = 0; i < matrix.length; i+=1) {
    for (let j = 0; j < matrix[i].length; j+=1) {
      var count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (
            i + x >= 0 && 
            i + x < matrix.length &&
            j + y >= 0 && 
            j + y < matrix[i].length &&
            !(x === 0 && y === 0) && // Skip the current cell
            matrix[i + x][j + y]
          ) {
            count+=1;
          }
        }
      }
      minesMatrix[i][j] = count;
    }
  }
  return minesMatrix;
  
}

module.exports = {
  minesweeper
};
