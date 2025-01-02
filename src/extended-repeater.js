const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (options.separator === undefined) {
    var separator = `+`;
    } else {
    separator = options.separator;
    }
  if (options.additionSeparator === undefined) {
    var additionSeparator = `|`;
    } else {
    additionSeparator = options.additionSeparator;
    }
  if (options.repeatTimes === undefined) {
    var repeatTimes = 1;
    } else {
      repeatTimes = options.repeatTimes;
    }
  if (options.additionRepeatTimes === undefined) {
    var additionRepeatTimes = 1;
    } else {
    additionRepeatTimes = options.additionRepeatTimes;
    }
  if (options.addition === undefined) {
    var addition = "";
    } else {
    addition = String(options.addition);
    }
  let repeatedAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let repeated = Array(repeatTimes).fill(str.concat(repeatedAddition)).join(separator);
  return repeated;
  }

module.exports = {
  repeater
};
