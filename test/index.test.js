import { add as _add } from "../index";
import { equal } from "assert";
describe("Simple Math Test", () => {
  it("multiple of 5", () => {
    var testAdd = _add(5);
    for (var i = 0; i < 5; i++) {
      equal(5 * i, testAdd());
    }
  });
  it("multiple of 10", () => {
    var testAdd = _add(10);
    for (var i = 0; i < 5; i++) {
      equal(10 * i, testAdd());
    }
  });
});
