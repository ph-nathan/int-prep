/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Naive: anagrams have the same form sorted
// -> use it as key to group anagram together
function groupAnagramsv1(strs) {
    const groups = {};
    
    for (const str of strs) {
        const key = (str.split('').sort()).join('');

        if (groups[key] === undefined) {
            groups[key] = [];
        }
        groups[key].push(str);
    }

    return Object.values(groups);
   
};

// eficient instead of using sorted, can use histogram string as key



function groupAnagrams(strs) {
    const groups = {};

    for (const str of strs) {
        const histogram = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            histogram[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // arr numbers -> string
        const key = histogram.join(',');

        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    }

    return Object.values(groups);

}