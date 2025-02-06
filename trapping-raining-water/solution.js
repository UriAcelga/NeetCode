class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0;
        let L = 0, R = height.length - 1;
        let agua = 0;
        for (let i = 0; i < height.length; i++) {
            if(height[i] > height[max])
                max = i;
        }
        for (let i = 0, j = height.length - 1; i < max || j > max; i++, j--) {
            if(i < max) {
                if(height[i] < height[L]) 
                    agua += ((height[L] - height[i]) > 0) ? height[L] - height[i] : 0;
                else 
                    L = i;
            }
            
            if(j > max) {
                if(height[j] < height[R])
                    agua += ((height[R] - height[j]) > 0) ? height[R] - height[j] : 0;
                else
                    R = j;
            }
        }
        return agua;
    }
}
