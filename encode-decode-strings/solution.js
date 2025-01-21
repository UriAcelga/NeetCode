class Solution {
    #SEPARADOR = "@";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ret = "";
        if(strs.length == 0)
            return undefined;
        for(const str of strs) {
            ret += str.length + this.#SEPARADOR + str;
        }
        return ret;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ret = []
        let i = 0, j = 0, buffer = "", longPalabra = 0;

        if(str == undefined)
            return ret;

        while(str[i] !== undefined) {
            if(str[i] == this.#SEPARADOR) {
                longPalabra = +buffer;
                buffer = "";
                for(j = i + 1 ; j < i + 1 + longPalabra; j++) {
                    buffer += str[j];
                }
                ret.push(buffer);
                buffer = "";
                i = j;
            } else {
                buffer += str[i];
                i++;
            }
        }
        return ret;
    }
}