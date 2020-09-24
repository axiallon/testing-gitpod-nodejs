const assert = require('assert');
const OddService = require('../odd-service');

describe('OddService', function () {
    describe('hasThreeConsecutiveOdds()', function () {
        it('should find 3 consecutive odds', function () {
            let input = [1, 2, 34, 3, 4, 5, 7, 23, 12];
            let result = OddService.hasThreeConsecutiveOdds(input);
            assert.strictEqual(result, true);
        });
    
        it('should not find 3 consecutive odds', function () {
            let input = [2, 6, 4, 1];
            let result = OddService.hasThreeConsecutiveOdds(input);
            assert.strictEqual(result, false);
        });
    });
});
