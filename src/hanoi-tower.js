const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turns = Math.pow(2, disksNumber) -1;
  let time = Math.floor((turns / turnsSpeed) * 3600);
  result.turns = turns;
  result.seconds = time;
  return result;
};
