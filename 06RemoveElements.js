"use strict";

const removeElements = function (arr) {
  if (!Array.isArray(arr)) {
    console.log("Argument is not an array");
  } else if (Array.isArray(arr)) {
    const newArr = [];

    arr.forEach(function (val) {
      if (val.length > 3) {
        newArr.push(val);
      }
    });
    return newArr;
  }
};
console.log();
console.log(removeElements(["kia", "tesla", "bmw", "mercedes"]));
