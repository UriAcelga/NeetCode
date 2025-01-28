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
        let menor, distancia, maxContainer = 0;
        for(let i = 0; i < heights.length - 1; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                menor = (heights[i] < heights[j]) ? heights[i] : heights[j];
                distancia = j - i;
                maxContainer = (menor * distancia > maxContainer) ? menor * distancia : maxContainer;
                    
                
            }
        }
        return maxContainer;
    }
}
