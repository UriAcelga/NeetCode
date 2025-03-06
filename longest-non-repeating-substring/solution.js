class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let chars = new Map();
        let comienzo = 0;
        let maxLong = 1, long = 0;
        for(let i = 0; i < s.length; i++) {
            if(chars.has(s[i]) && chars.get(s[i]) >= comienzo) {
                //longitud del substring: diferencia entre el repetido y el comienzo
                maxLong = (maxLong > i - comienzo) ? maxLong : i - comienzo;
                comienzo = chars.get(s[i]) + 1;
                long = long - comienzo + 1;
                if(long < 1)
                    long = 1;
                chars.set(s[i], i);
            } else {
                long++;
                chars.set(s[i], i);
            }
        }
        maxLong = (maxLong > long) ? maxLong : long;
        return (s.length == 0) ? 0 : maxLong;
    }
}
