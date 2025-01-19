class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
        let digitos = new Set();
        let ret = [];
        for (let i = 0; i < nums.length; i++) {
            digitos.add(nums[i]);

            if(freq.has(nums[i])) 
                freq.set(nums[i], freq.get(nums[i]) + 1);    
            else
                freq.set(nums[i], 1);
        }


        digitos = [...digitos];
        for (let i = 0; i < digitos.length - 1; i++) {
            for(let j = i + 1; j < digitos.length; j++) {
                if(freq.get(digitos[i]) < freq.get(digitos[j])) {
                    let aux = digitos[i];
                    digitos[i] = digitos[j];
                    digitos[j] = aux;
                }
            }
            
        }

        for (let i = 0; i < k; i++) {
            ret.push(digitos[i]);            
        }

        return ret;

    }
}