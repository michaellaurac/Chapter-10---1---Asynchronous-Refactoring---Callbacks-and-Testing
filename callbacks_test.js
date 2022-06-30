const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { addOne, two, three, four } = require("./callbacks.js");

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
  assert.strictEqual(two(addOne), 3);
  assert.end();
});

// functional tests
test("adds 1 to 3 with an asynchronous callback function yielding 4", (assert) => {
  assert.plan(1);
  setTimeout(function () {
    assert.strictEqual(three(addOne), 4);
  }, 500);
});

// functional tests
test("adds 1 to 4 with an asynchronous callback function yielding 5", (assert) => {
  assert.plan(1);
  four((result) => {
    assert.strictEqual(result, 4);
  });
});
