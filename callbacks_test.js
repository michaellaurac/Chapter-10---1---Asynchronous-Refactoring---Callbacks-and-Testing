const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const testDouble = require("testdouble");
const { addOne, two, three } = require("./callbacks.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "callbacks_test.js");
  assert.end();
});

// functional tests
test("adds 1 to 3 using a standard function yielding 4", (assert) => {
  addOne(3, (result) => {
    assert.strictEqual(result, 4);
    assert.end();
  });
});

// functional tests
test("adds 1 to 2 with an asynchronous callback function with a parameter of 2", (assert) => {
  two((result, callback) => {
    assert.strictEqual(result, 2);
    assert.strictEqual(callback, console.log);
    assert.end();
  });
});

// functional tests
test("adds 1 to 2 with an asynchronous call function yielding 3 using end-to-end testing with testdouble", (assert) => {
  testDouble.replace(console, "log");
  two((result, callback) => {
    addOne(result, callback);
    assert.equal(result, 2);
    testDouble.verify(console.log(3));
    testDouble.reset();
    assert.end();
  });
});

// functional tests
test("adds 1 to 3 with an asynchronous callback function with a parameter of 3", (assert) => {
  three((result, callback) => {
    assert.equal(result, 3);
    assert.equal(callback, console.log);
    assert.end();
  });
});

// functional tests
test("adds 1 to 3 with an asynchronous call function yielding 4 using end-to-end testing with testdouble", (assert) => {
  testDouble.replace(console, "log");
  three((result, callback) => {
    addOne(result, callback);
    assert.equal(result, 3);
    testDouble.verify(console.log(4));
    testDouble.reset();
    assert.end();
  });
});
