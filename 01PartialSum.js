"use strict";

const sum = function (n) {
  let value = n;
  return function (m) {
    return value + m;
  };
};

console.log(sum(1)(2));

console.log(sum(1)(2));
const addOne = sum(1);
console.log(addOne(2));
const addTen = sum(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));
