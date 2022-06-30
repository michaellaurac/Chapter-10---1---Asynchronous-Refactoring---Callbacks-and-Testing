/* eslint-disable n/no-callback-literal */

function addOne (addend) {
  return addend + 1;
}

function two (callback) {
  return callback(2);
}

module.exports = { addOne, two };
