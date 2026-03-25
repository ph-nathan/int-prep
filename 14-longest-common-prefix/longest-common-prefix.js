/**
 * @param {string[]} strs
 * @return {string}
 */
// Learning Points:
// - slice / splice
// 
// Naive:
// Compare strings one at a time, keep a common string 
function longestCommonPrefixv0(strs) {
    let common = strs[0];

    for (const str of strs) {
        const minLen = Math.min(common.length, str.length);
        common = common.slice(0, minLen);
        for (let i = minLen - 1; i >= 0; i--) {
            if (str[i] !== common[i]) {
                common = common.slice(0, i);
            }
        } 
    }

    return common;
};

function longestCommonPrefix(strs) {
    strs.sort();

    const first = strs[0];
    const last = strs[strs.length - 1];
    
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            return first.slice(0, i);
        }
    }
    return first;  
}