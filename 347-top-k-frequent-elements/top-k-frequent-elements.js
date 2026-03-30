/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// naive: have a map (num -> freq)
// iterate thru map and return top k elements (O(n))

// more optimal, have a map (num -> freq)
// create a histogram[freq] = num; 
// res includes histogram elements from right to left, then return res.slice(0, k);
function topKFrequent(nums, k) {
    const freqMap = {};

    for (const num of nums) {
        freqMap[num] = (freqMap[num] ?? 0) + 1
    }

    // Naive:
    // return Object.entries(freqMap)
    // .sort((a,b) => b[1] - a[1])
    // .map(x => parseInt(x[0]))
    // .slice(0, k);

    // Optimal:
    const histogram = new Array(nums.length + 1).fill(null).map(() => new Array());
    
    for (const pair of Object.entries(freqMap)) {
        const freq = pair[1];
        histogram[freq].push(pair[0]);
    }

    const res = [];
    for (let i = histogram.length - 1; i >= 0; i--) {
        res.push(...histogram[i]);
    }

    return res.map(x => parseInt(x)).slice(0, k);
};