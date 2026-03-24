/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// Intuition: check if the # of occurences of character of the two words match

// Naive: O(NlogN), sorting then compare 2 strings
function isAnagramv0(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS === sortedT;
}

// Frequency related to Map -> O(N) time and space
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const freqMap = new Map();
    for (let i = 0 ; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        freqMap.set(charS, (freqMap.get(charS) ?? 0) + 1);
        freqMap.set(charT, (freqMap.get(charT) ?? 0) - 1);

    }

    // how to convert map values to array
    // .values() return iterable object, loop thru using for of
    return [...freqMap.values()].every(val => val === 0);
}

// O(N) time, O(1) space
function isAnagramv2(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // 26 lowercase characters
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
