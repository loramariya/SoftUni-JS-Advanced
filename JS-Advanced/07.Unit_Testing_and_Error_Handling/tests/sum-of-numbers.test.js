import { expect } from 'chai';
import { sum } from '../04.SumOfNumbers/sum-of-numbers.js';

describe('sum', function () {
    it('returns the sum of an array', () => {
        const arr = [1, 1, 1];
        expect(sum(arr)).to.equal(3);
    });

    it('returns 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('returns 1 for an array with 1 element', () => {
        expect(sum([1])).to.equal(1);
    });
});
