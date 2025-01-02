const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  var arr1 = s1.split(""),
      arr2 = s2.split(""),
      arr3 = 0;
  
    arr1.forEach(elem => {
  if (arr2.includes(elem)) {
    arr2.splice(arr2.indexOf(elem), 1);
    arr3 += 1}});
  return arr3;
  }

module.exports = {
  getCommonCharacterCount
};
