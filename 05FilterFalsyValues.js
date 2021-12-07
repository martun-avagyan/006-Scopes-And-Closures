"use strict";

const filterFalsyValues = function (arr) {
  if (!Array.isArray(arr)) {
    console.log("Passed argument is not an Array");
  } else {
    const newArr = [];
    arr.forEach(function (val) {
      if (
        val !== undefined ||
        val !== null ||
        val !== NaN ||
        val !== 0 ||
        val !== "" ||
        val !== false
      ) {
        newArr.push(val);
      }
    });
    return newArr;
  }
};

console.log(filterFalsyValues([null, true, {}, { name: "Elon" }, "", NaN, 0]));
console.log(filterFalsyValues(["hello", 1233, []]));
console.log(filterFalsyValues("String"));
