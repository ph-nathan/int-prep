/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// Intuition: check if the # of occurences of character of the two words match

// O(NlogN), sorting then compare 2 strings
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}
// O(N) time, O(1) space
function isAnagramv2(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const histogram = new Array(26).fill(0);

    const baseVal = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        const charS = s.charCodeAt(i);
        const charT = t.charCodeAt(i);

        histogram[charS - baseVal]++;
        histogram[charT- baseVal]--;
    } 

    return histogram.every(val => val === 0);
};
// Follow-up

/*
    "If the input space is no longer limited to 26 lowercase English letters, 
    the fixed array approach not optimal because the character set is too massive and sparse. 
    In that case, I would use The Hash Map 
    A Hash Map perfectly handles a massive, unpredictable character set while keeping the time complexity at O(N)"
*/
