/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
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