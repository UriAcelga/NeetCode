class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0, len = 0;
        let numsSet = new Set(nums);

        for (const n of numsSet) {
            if(numsSet.has(n - 1)) {
                len = 0;
            } else {
                len = 1;
                while(numsSet.has(n + len)) {
                    len++;
                }
                if(longest < len)
                    longest = len;
            }
            
        }

        return longest;
    }
}
