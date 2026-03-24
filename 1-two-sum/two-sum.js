/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Naive: 2 loops
// O(n^2)
function twoSumv0(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1]
}

// use Map to store index of other element 

function twoSum(nums, target) {
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const idx = numsMap[target - curr];
        if (idx != null) {
            return [i, idx];
        } 
        numsMap[curr] = i;
    }

    return [-1, -1];
}
