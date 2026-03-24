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

// Sort -> Two pointers
// Time: O(n log n) (due to sorting)
// Space: O(n) (to store the original indices)
function twoSumv1(nums, target) {
    const paired = nums.map((num,idx) => [num, idx]).sort((a, b) => a[0] - b[0]);
    
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const left = paired[l][0];
        const right = paired[r][0];
        const sum = left + right;

        if (sum === target) {
            return [paired[l][1], paired[r][1]];
        }
        if (sum < target) {
            l++; // Need a bigger number
        } else {
            r--; // Need a smaller number
        }
    }
    return [-1, -1]
    
}

// Optimal: use Map to store index of other element 
// O(n) space, time
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
