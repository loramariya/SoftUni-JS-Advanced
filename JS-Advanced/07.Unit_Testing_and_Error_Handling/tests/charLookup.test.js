import { assert } from "chai";
import { lookupChar } from "../03.CharLookup/charLookup.js";

describe("retrieve character at index from string parameter", () => {
    it("valid input -> (a,0) => a", () => {
        assert.equal(lookupChar("a", 0), "a");
    });
    it("valid input -> (ab,1) => b", () => {
        assert.equal(lookupChar("ab", 1), "b");
    });
    it("invalid input - second parameter is floating point number", () => {
        assert.equal(lookupChar("a", 1.1), undefined);
    });
    it("invalid input - first parameter not a string", () => {
        assert.equal(lookupChar(0, 0), undefined);
    });
    it("invalid input - second parameter is  string", () => {
        assert.equal(lookupChar("a", "a"), undefined);
    });
    it("invalid input - second parameter is a negative number", () => {
        assert.equal(lookupChar("a", -1), "Incorrect index");
    });
    it("invalid input - second parameter is out of bounderies", () => {
        assert.equal(lookupChar("a", 1), "Incorrect index");
    });
})