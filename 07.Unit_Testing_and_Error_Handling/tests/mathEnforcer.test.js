import { assert } from "chai";
import { mathEnforcer } from "../04.MathEnforcer/mathEnforcer.js";

describe("test addFive", () => {
    it("test with invalid values", () => {
        assert.isUndefined(mathEnforcer.addFive("abc"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive("5"), "return value must be undefined");

    });
    it("test with valid values", () => {
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "value is correct");
    });
});

describe("test subtractTen", () => {
    it("test with invalid values", () => {
        assert.isUndefined(mathEnforcer.subtractTen("abc"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined");

    });
    it("test with valid values", () => {
        assert.equal(mathEnforcer.subtractTen(10), 0, "value is correct");
        assert.equal(mathEnforcer.subtractTen(-10), -20, "value is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15), 5, "value is correct");
        assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "value is correct");
    });
});

describe("test sum", () => {
    it("test with invalid values", () => {
        assert.isUndefined(mathEnforcer.sum("abc", "def"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("abc", []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("abc", 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "abc"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10.5, "10"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("10", 10.5), "return value must be undefined");
    })
    it("test with valid values", () => {
        assert.equal(mathEnforcer.sum(-10, 10), 0, "result is correct");
        assert.equal(mathEnforcer.sum(10, 0), 10, "result is correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "result is correct");
        assert.equal(mathEnforcer.sum(-10, -5), -15, "result is correct");
        assert.equal(mathEnforcer.sum(10, 5), 15, "result is correct");
        
        assert.equal(mathEnforcer.sum(1.5, 5.5), 7, "result is correct");
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "result is correct");
        assert.equal(mathEnforcer.sum(1, 5.5), 6.5, "result is correct");
        assert.equal(mathEnforcer.sum(-100, 50), -50, "result is correct");
        assert.equal(mathEnforcer.sum(100.5, -50.5), 50, "result is correct");
        assert.equal(mathEnforcer.sum(0.5, -0.5), 0, "result is correct");
    })
});
