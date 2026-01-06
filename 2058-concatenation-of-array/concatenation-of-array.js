/** 
function getConcatenation(nums) {
    const len = nums.length;
    const ans = new Array(2 * len);
    
    for (let i = 0; i < 2 * len; i++) {
        ans[i] = nums[i % len];
    }

    return ans;
}


function getConcatenation(nums) {
    return [...nums, ...nums];
}
*/

function getConcatenation(nums) {
    return nums.concat(nums);
}