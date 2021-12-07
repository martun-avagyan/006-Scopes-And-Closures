"use strict";
const getUniques = function (arr) {
  if (!Array.isArray(arr)) {
    console.log("Argument is not an array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return "Not Unique";
        }
      }
    }
    return "Unique";
  }
};

console.log(getUniques([1, 2, 3, 4, 5, 1]));
console.log(getUniques([1, 2, 3, 4, 5]));
