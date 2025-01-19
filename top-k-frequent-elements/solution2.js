class Solution {
    /**
     * @param {number[]} nums
     * @param {number} n
     * @return {number}
     */
    contarInstancias(nums, n) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] == n)
                count++;
        }
        return count;
    }
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let digitos = [...(new Set(nums))];
        let bucketArr = Array.from({length: nums.length + 1}, () => []);
        let ret = [];

        for(const n of digitos) {
            bucketArr[this.contarInstancias(nums, n)].push(n);
        }

        for (let i = bucketArr.length - 1; i > 0 ; i--) {
            if(bucketArr[i].length == 0)
                continue; 
            for(const n of bucketArr[i]) {
                ret.push(n);
                if(ret.length == k)
                    return ret;
            }   
        }
    }
}