const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActNumber = parseFloat(sampleActivity);
  if ((typeof sampleActivity !== "string" ) || (typeof sampleActNumber !== "number") 
    || (isNaN(sampleActNumber)) || (sampleActNumber <= 0) || (sampleActNumber > MODERN_ACTIVITY))  {
    return false;
  } else {
  let Numb1 = Math.log(MODERN_ACTIVITY / sampleActNumber),
      Numb2 = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Numb1 / Numb2);}
}

module.exports = {
  dateSample
};
