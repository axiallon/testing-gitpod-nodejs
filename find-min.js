
/**
 * Returns the smallest number from an array of numbers.
 * It should return 0 if the array is empty or undefined.
 * @param {Array<Number>} nums Array of numbers.
 * @returns The smallest number in the array or 0 if empty or undefined.
 */
function findMin(nums) {
    let min = nums[nums.length-1];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
}

module.exports = findMin;
