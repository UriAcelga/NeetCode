// Usa numsort.js

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ret = [];
        let sorted = numsort(nums);
        for (let i = 0; i < sorted.length - 2; i++) {
            if(sorted[i] == sorted[i - 1])
                continue;
            for(let j = i + 1, k = sorted.length - 1; j < k;) {
                
                if(-sorted[i] == (sorted[j] + sorted[k])) {
                    let trio = numsort([sorted[i], sorted[j], sorted[k]]); 
                    console.log("Trio: " + trio);
                    //Acá tengo que controlar que el trio que quiero agregar no se haya agregado antes
                    const trioExiste = ret.some(arr => arr.every((value, i) => value == trio[i]));
                    if(!trioExiste)
                        ret.push(trio);
                    j++;
                    k = sorted.length - 1;
                } else if(-sorted[i] > (sorted[j] + sorted[k])) {
                    j++;
                } else if(-sorted[i] < (sorted[j] + sorted[k])) {
                    k--;
                }   
            } 
        }

        return ret;
    }
}
