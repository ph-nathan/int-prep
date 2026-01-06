// Find out about shared methods between array and string
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const len = strs.length;

    if (!len) {
        return "";
    }

    let common = Array.from(strs[0]);
    for (let i = 1; i < strs.length; i++) {
        const curr = strs[i];

        const maxLen = Math.max(curr.length, common.length);
        
        for (let j = 0; j < maxLen; j++) {
            if (curr[j] === common[j]) {
                continue;
            }
            common.splice(j); // same as common = common.slice(0, j);
            break;
        }
    }

    return common.join('');
};