/* eslint-disable n/no-callback-literal */

function addOne (addend, callback) {
  callback(addend + 1);
}

function two (callback) {
  callback(2, console.log);
}

function three (callback) {
  setTimeout(function () {
    callback(3, console.log);
  }, 500);
}

module.exports = { addOne, two, three };
