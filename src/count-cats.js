const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr, value)) {
   if (arr.length === 1)    {
      return arr[0] === value ? 1 : 0;
   } else {
      return (arr.shift() === value ? 1 : 0) + count(arr, value);
   }
}
console.log(count([0, 1, '^^', 0, '^^', 2, '^^', 1, 2],'^^' ));

