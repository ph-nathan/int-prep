/**
 * @param {string[]} strs
 * @return {string}
 */
// Learning Points:
// - slice / splice
// - sort alphabetically

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

// More efficient naive
function longestCommonPrefix(strs) {
    let common = strs[0];

    for (const str of strs) {
        for (let i = 0; i < common.length; i++) {
            if (common[i] !== str[i]) {
                common = common.slice(0, i);
                break;
            }
        } 
    }

    return common;
};

// Optimal: By sorting the strings alphabetically, 
// the two least common strings get pushed to the two ends
function longestCommonPrefixv2(strs) {
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