const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var encodedLine = "",
     encodeArr = str,
      count = 1;
   for (let i = 0; i < encodeArr.length; i+=1) {    
     if (encodeArr[i] === encodeArr[i+1]) {
       count += 1;
     } else {
       if (count === 1) {
         encodedLine = encodedLine.concat(`${encodeArr[i]}`)
       } else {
         encodedLine = encodedLine.concat(`${count}${encodeArr[i]}`);
       }
       count = 1;
     }
   }
  
   return encodedLine;
 }

module.exports = {
  encodeLine
};
