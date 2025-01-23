/**
 * Retorna una copia del string con solo caracteres alfanuméricos
 *
 * @param {string} str
 * @return {string}
 */
function toAlphaNum(str) {
    let ret = "", charcode;
    for(let i = 0; i < str.length; i++) {
        charcode = str.charCodeAt(i);
        if (charcode >= 48 && charcode <= 57 // de 0 a 9
            || charcode >= 65 && charcode <= 90 // de A a Z
            || charcode >= 94 && charcode <= 122 // de a a z 
        ) {
            ret += str[i];
        }
    }
    return ret;
}