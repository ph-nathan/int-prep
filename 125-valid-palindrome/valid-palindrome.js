/**
 * @param {string} s
 * @return {boolean}
 */
function isAlphaNumericChar (char) {
    const unicodeVal = char.charCodeAt(0);
    return (unicodeVal <= 57 && unicodeVal >= 48) 
    || (unicodeVal <= 90 && unicodeVal >= 65) 
    || (unicodeVal <= 122 && unicodeVal >= 97);
} 
var isPalindrome = function(s) {
    const charArr = [...s];
    const filtered = charArr.filter(x => isAlphaNumericChar(x)).map(x => x.toLowerCase());
    let l = 0;
    let r = filtered.length - 1;

    while (l <= r) {
        if (filtered[l] !== filtered[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}