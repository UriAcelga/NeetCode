/* El agua se calcula del producto n x m donde
 * n = diferencia de los indices de los extremos
 * m = valor del extremo más pequeño
 * 
 * ejemplo
 * si los extremos son i = 0 y j = 2
 * arr[i] = 3 y arr[j] = 4
 * n = 2 (j - i)
 * m = 3 (arr[i] < arr[j])
 * resultado = 6
 * 
 * 
 * El problema parece tener una solución O(n), por lo que debo poder
 * resolverlo pasando una o dos veces por el arreglo.
*/
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let menorExtremo, maxContainer = 0;
        for(let i = 0, j = heights.length - 1; i < j;) {
            menorExtremo = (heights[i] < heights[j]) ? heights[i] : heights[j];
            maxContainer = menorExtremo * (j - i) > maxContainer ? menorExtremo * (j - i) : maxContainer;

            if(heights[i] < heights[j])
                i++;
            else
                j--;
        }
        return maxContainer;
    }
}
