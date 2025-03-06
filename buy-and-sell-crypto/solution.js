class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const VALOR_MINIMO = 0;
        let ganancia = 0, gananciaMax = 0;
        let comienzo = VALOR_MINIMO;
        
        for(let i = 0; i < prices.length; i++) {
            if(prices[comienzo] > prices[i]){
                comienzo = i;
            } else {
                ganancia = prices[i] - prices[comienzo];
                gananciaMax = (gananciaMax > ganancia) ? gananciaMax : ganancia; 
            }
        }
        return gananciaMax;
    }
}
