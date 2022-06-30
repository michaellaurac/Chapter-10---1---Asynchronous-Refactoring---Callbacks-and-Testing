/* eslint-disable n/no-callback-literal */

function addOne (addend) {
  return addend + 1;
}

function two (callback) {
  return callback(2);
}

function three (callback) {
  return callback(3);
}

function four (callback) {
  setTimeout(function () {
    return callback(4);
  }, 500);
}

module.exports = { addOne, two, three, four };
