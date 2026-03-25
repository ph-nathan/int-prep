/**
 * @param {string[]} strs
 * @return {string[][]}
 */

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

