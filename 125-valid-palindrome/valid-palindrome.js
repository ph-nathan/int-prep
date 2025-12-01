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
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let l = 0;
    let r = s.length - 1;

    while (l <= r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}