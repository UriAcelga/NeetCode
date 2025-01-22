import { numsort } from "../numsort.js";

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sortedNums = nums;
        numsort(sortedNums);

        let number = undefined;
        let i = 0, longest = 0, len = 0;
        while(sortedNums[i] !== undefined) {
            if(number == undefined) {
                number = sortedNums[i];
                len++;
                if(len > longest)
                    longest = len;
            } else if(sortedNums[i] == number) {
                
            } else if(sortedNums[i] == number + 1) {
                number++;
                len++;
                if(len > longest)
                    longest = len;
            } else {
                number = sortedNums[i];
                len = 1;
            }
            i++;
        }
        
        return longest;
    }
}