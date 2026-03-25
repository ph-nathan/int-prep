/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    const len = nums.length;
    let count = 0;
    let l = 0;
    let r = len - 1;
    

    // if len = 1, l < r will miscount one 
    while (l <= r) {
        if (nums[l] === val) {
            while (nums[r] === val && l <= r) {
                r--;
            }
            if (r > 0 && l <= r) {
                count++; 
                const temp = nums[r];
                nums[r] = val;
                nums[l] = temp;
            } 
        } else {
            count++; 
        }
        l++;
    }
    return count;
};
