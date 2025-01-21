/*
Para este ejercicio se pide una solución en O(n) que no involucre división
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ret = Array.from({ length: nums.length }, () => 1);
        let prodAnterior = 1, prodPosterior = 1;
        for (let i = 0; i < nums.length; i++) {
            ret[i] = prodAnterior;
            prodAnterior *= nums[i];
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            ret[j] *= prodPosterior;
            prodPosterior *= nums[j];
        }
        return ret;
    }
}
