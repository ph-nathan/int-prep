/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// learning points
// - 
// - 
// 

function removeElement(nums, val) {
    const len = nums.length;
    let l = 0;
    let r = len - 1;
    
    // mistake potentially: l < r -> lead to missing the middle element if odd length
    while (l <= r) {
        if (nums[l] === val) {
            nums[l] = nums[r];
            r--;
        } else {
            l++;
        }
    }

    return r + 1;
};
