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
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ret = [];
        for(let i = 0 ; i < strs.length; i++) {
            let listaAnagramas = [];


            if(ret.length !== 0) {
                let encontrado = false;
                for(const anagramas of ret) {
                    if(anagramas.includes(strs[i]))
                        encontrado = true;
                }
                if(encontrado)
                    continue;
            }

            
            listaAnagramas.push(strs[i]);
            for(let j = i+1; j < strs.length; j++) {
                if(this.isAnagram(strs[j], strs[i])) {
                    listaAnagramas.push(strs[j]);
                }
            }

            
            ret.push(listaAnagramas);
        }
        return ret;
    }
}