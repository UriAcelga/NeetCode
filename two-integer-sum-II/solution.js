class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length - 1; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if(numbers[j] > (target - numbers[i]))
                    break;
                else if(numbers[j] == (target - numbers[i]))
                    return [i+1, j+1];
            }
        }
        return [0, 0]
    }
}