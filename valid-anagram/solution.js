class Solution {
    /**
     * @param {string} s
     * @return {number[]}
     */
    stringToUTF16(s) {
        let utf_codes = [];
        for(let i = 0; i < s.length; i++) {
            utf_codes.push(s.charCodeAt(i));    
        }
        return utf_codes;
    }
    /**
     * @param {number[]} a
     * @param {number[]} b
     * @return {boolean}
     */
    arraysAreEqual(a, b) {
        if(a.length !== b.length)
            return false;

        for(let i = 0; i < a.length ; i++) {
            if(a[i] !== b[i])
                return false;
        }
        return true;
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let aux1 = this.stringToUTF16(s).sort();
        let aux2 = this.stringToUTF16(t).sort();
        return this.arraysAreEqual(aux1, aux2);
    }
}