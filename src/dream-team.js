const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let new_array = members.map((element) => {
    if (typeof element === "string") {
      let newElement = element.trim();
        return newElement[0].toLocaleUpperCase()
    }
  });
  return new_array.sort().join('');
};
