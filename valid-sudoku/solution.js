class Solution {
    
    /**
     * @param {number} i
     * @param {number} j
     * @return {character[][]}
     */
    getPositionsToCheckByIndexes(i,j) {
        let rowsToCheck, colsToCheck;
        let ret = [];
        if(i == 0 || i == 3 || i == 6) {
            // no need to check any position within the box
            rowsToCheck = 0;
        } else if(i == 1 || i == 4 || i == 7) {
            // need to check positions at i-1
            rowsToCheck = -1;
        } else { // i == 2 || i == 5 || i == 8
            //need to check positions at i-2 and i-1
            rowsToCheck = -2;
        }

        if(j == 0 || j == 3 || j == 6) {
            //would need to check digits at j+1 and j+2 cells at designated rows
            colsToCheck = [1,2];
        } else if(j == 1 || j == 4 || j == 7) {
            //would need to check digits at j-1 and j+1 cells at designated rows
            colsToCheck = [-1,1];
        } else { // j == 2 || j == 5 || j == 8
            //would need to check digits at j-2 and j-1 cells at designated rows
            colsToCheck = [-2,-1];
        }

        for (let ii = -1; ii >= rowsToCheck; ii--) {
            for (const jj of colsToCheck) {
                ret.push([i + ii, j + jj]);
            }
            
        }
        return ret;
    }

    /**
     * @param {Map} rowDigits
     * @return {Map}
     */
    refreshRowDigits() {
        return Array.from({length: 10}, () => false);
    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROW_COUNT = board.length;
        const COL_COUNT = board[0].length;

        let rowDigits = this.refreshRowDigits()

        let temp = Array.from({length: 9}, () => []);
        for (let i = 0; i < ROW_COUNT; i++) {
            for (let j = 0; j < COL_COUNT; j++) {
                if(board[i][j] == '.')
                    continue;

                if(temp[j].includes(board[i][j]) || rowDigits[+board[i][j]])
                    return false;

                temp[j].push(board[i][j]);
                rowDigits[+board[i][j]] = true;

                for(const pos of this.getPositionsToCheckByIndexes(i, j)) {
                    if(board[i][j] == board[pos[0]][pos[1]])
                        return false;
                }
            }
            rowDigits = this.refreshRowDigits();
            
        }

        return true;
    }
}