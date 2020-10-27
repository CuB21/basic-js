const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let resalt = {};
  let turns = Math.pow(2, disksNumber) -1;
  let time = Math.floor((turns / turnsSpeed) * 3600)
  resalt.turns = turns;
  resalt.seconds = time;
  return resalt;
};
