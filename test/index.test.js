const add = require("../index");
const assert = require("assert");
describe("Simple Math Test", () => {
  it("multiple of 5", () => {
    var testAdd = add.add(5);
    for (var i = 0; i < 5; i++) {
      assert.equal(5 * i, testAdd());
    }
  });
  it("multiple of 10", () => {
    var testAdd = add.add(10);
    for (var i = 0; i < 5; i++) {
      assert.equal(10 * i, testAdd());
    }
  });
});

// const assert = require("assert");
// const Math = require("../index");
// describe("Testing multiply", () => {
//   it("multiple of 5", ()=> {
//     var test5 = new Math();
//     assert.equal(0,test5.multiply(5));
//     assert.equal(5,test5.multiply(5));
//   });
// });
