const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { addOne, two } = require("./callbacks.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "callbacks_test.js");
  assert.end();
});

// functional tests
test("adds 1 to 3 using a standard function yielding 4", (assert) => {
  assert.strictEqual(addOne(3), 4);
  assert.end();
});

// functional tests
test("adds 1 to 2 with a callback function yielding 3", (assert) => {
  assert.strictEqual(two(addend => addend + 1), 3);
  assert.end();
});
