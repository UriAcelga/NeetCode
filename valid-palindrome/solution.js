// Usa toAlphaNum.js

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = toAlphaNum(s).toLowerCase();

        if(str.length == 0 && s.length > 0)
            return true;
        else if(str.length == 0) 
            return false;

        for(let i = 0, j = str.length - 1; i < j; i++, j--) {
            if(str[i] !== str[j])
                return false;
        }

        return true;
    }
}
