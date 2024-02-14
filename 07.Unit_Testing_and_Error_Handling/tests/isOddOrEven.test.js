import { assert } from "chai";
import { isOddOrEven } from "../02.EvenOrOdd/evenOrOdd.js";
import { it } from "mocha";

describe("isOddOrEven", () => {
    it("test with non strings", () => {
        assert.equal(isOddOrEven({prop: "abc"}), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
        assert.isNotOk(isOddOrEven([]), "return type must be undefined");
    });

    it("test with valid strings", () => {
        assert.equal(isOddOrEven("abc"), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("abcd"), "even", "result is correct (even)");
    });
});