const assert = require('assert');
const findMin = require('../find-min');

describe('findMin()', function () {

    it('should find the min number in test case 1', function () {
        let input = [15, 32, 8, 99, 12];
        let min = findMin(input);
        assert.strictEqual(min, 8);
    });

    it('should find the min number in test case 2', function () {
        let input = [];
        let min = findMin(input);
        assert.strictEqual(min, 0);
    });

    it('should find the min number in test case 3', function () {
        let input = [2, 67, 10];
        let min = findMin(input);
        assert.strictEqual(min, 2);
    });

});
