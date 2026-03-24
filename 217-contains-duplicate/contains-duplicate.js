/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Naive O(N^2)
function containsDuplicatev0(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                return true;
            }
        }
    }
    return false;
}

// Sort O(NlogN)
function containsDuplicatev1(nums) {
    nums.sort();
    // ascending
    // or const sortedNums = nums.toSorted();

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;

}

// Set O(N)
function containsDuplicate(nums) {
    const numsSet = new Set(nums);

    return numsSet.size !== nums.length;

}
