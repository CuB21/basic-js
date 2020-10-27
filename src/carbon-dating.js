const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === "" || sampleActivity.trim() === "") {
    return false;
  }
  let num = Number(sampleActivity);
  if (isNaN(num)===true || sampleActivity===undefined || num <= 0) {
    return false;
  } else {
    let result = Math.ceil(Math.log(MODERN_ACTIVITY/num)*HALF_LIFE_PERIOD / 0.693);
    if (result < 0) {
      return false;
    } else {
      return result;
    }
  }
};
