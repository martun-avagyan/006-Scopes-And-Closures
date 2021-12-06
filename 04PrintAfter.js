"use strict";

const printAfter = function (callBack) {
  console.log("Hello World!");
  callBack();
};
const print = () => console.log("Elon Musk");

printAfter(print);
