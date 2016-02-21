'use strict';

module.exports = function (arr) {
  var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
  });
  return sum / arr.length;
};
