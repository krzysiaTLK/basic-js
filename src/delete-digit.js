const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var nArr = n.toString().split(''),
  maxArr = [...nArr];
  maxArr.splice(0, 1);
  
  for (let i=0; i<nArr.length; i+=1) {
  let countArr = [...nArr];
    countArr.splice(i, 1);
    if ((+countArr.join("")) > (+maxArr.join(""))) {
      maxArr = [...countArr];
    } else continue;
  }
  return +maxArr.join("");
}

module.exports = {
  deleteDigit
};
