const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  countDepth = 1;
  calculateDepth(arr) {
  let newArr = [...arr];
  if (newArr.some(elem => Array.isArray(elem))) {
    newArr = newArr.flat();
    this.countDepth += 1;
    return this.calculateDepth(newArr)
  }
    const arrDepth = this.countDepth;
    this.countDepth = 1;
    return arrDepth};
} 


module.exports = {
  DepthCalculator
};
