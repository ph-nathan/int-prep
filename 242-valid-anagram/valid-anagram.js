/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Intuition: check if the # of occurences of character of the two words match
// frequency -> need a map

function isAnagram(s, t) {
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