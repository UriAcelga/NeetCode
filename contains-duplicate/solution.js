class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let visited = new Set();
        for (const num of nums) {
            if(visited.has(num))
                return true;
            visited.add(num);
        }
        return false;
    }
}