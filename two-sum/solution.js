class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapVisitados = new Map();
        let diferencia;
        for(let i = 0; i < nums.length; i++) {
            diferencia = target - nums[i];
            if(mapVisitados.has(diferencia))
                return [mapVisitados.get(diferencia), i];
            mapVisitados.set(nums[i], i);
        }
        return [0,0];
    }
}