/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Naive: anagrams have the same form sorted
// -> use it as key to group anagram together
function groupAnagrams(strs) {
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
