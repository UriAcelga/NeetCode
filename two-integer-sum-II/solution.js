class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0, j = numbers.length - 1; i < j;) {
            if(numbers[i] + numbers[j] == target) {
                return [i+1, j+1];
            } else if(numbers[i] + numbers[j] > target)
                j--;
            else if(numbers[i] + numbers[j] < target)
                i++;
        }
        return [0, 0]
    }
}