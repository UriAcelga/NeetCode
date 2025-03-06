class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let L = 0, R = height.length - 1;
        let maxL = 0, maxR = 0;
        let agua = 0;
        
        while(L <= R) {
            if(maxL <= maxR) {
                if(maxL > height[L]) {
                    agua += maxL - height[L]; 
                } else {
                    maxL = height[L];
                }

                L++;
            }
            else {
                if(maxR > height[R]) {
                    agua += maxR - height[R]; 
                } else {
                    maxR = height[R];
                }
                R--;
            }
        }
        return agua;
    }
}
