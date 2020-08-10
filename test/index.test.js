const add = require("../index");
const assert = require("assert");
describe("Simple Math Test", () => {
  it("multiple of 5", () => {
    assert.equal(5 * 1, add.add(5)(1));
  });
});
