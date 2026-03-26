/**
 * @param {number[]} nums
 * @return {number}
 */
// Naive: have a counter for each element, 
// return element which count > len / 2
// O(n) time, O(n) space
var majorityElement = function(nums) {
    const len = nums.length;
    const freqMap = {};

    for (const num of nums) {
        freqMap[num] = (freqMap[num] ?? 0) + 1;
    }

    // const key in freqMap
    // const key of Object.keys(freqMap)
    for (const [num, freq] of Object.entries(freqMap)) {
        if (freq > len / 2) {
            return parseInt(num);
        }
    }
    return -1;
    
};