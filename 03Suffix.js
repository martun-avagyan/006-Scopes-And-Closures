"use strict";

const addSuffix = function (suffix) {
  return function (str) {
    return str + suffix;
  };
};

const addLy = addSuffix("ly");
console.log(addLy("hopeless"));
console.log(addLy("total"));

const addLess = addSuffix("less");
console.log(addLess("fear"));
console.log(addLess("ruth"));
