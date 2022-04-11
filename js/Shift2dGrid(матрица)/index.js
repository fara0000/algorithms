/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let newArr = grid;
    for(let f = 0; f < k; f++) {

        for(let i = 0; i < grid.length; i++) {
            let n = grid[i].length;
            // console.log(grid[i][n - 1])

            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] !== grid[i][n - 1] && grid[i][j] !== grid[m - 1][n - 1]) {
                    console.log(grid[i][j])
                    newArr[i][j + 1] = grid[i][j];
                } if (grid[i][j] === grid[m - 1][n - 1]) {
                    newArr[0][0] = grid[i][j]
                }
                else if(grid[i][j] === grid[i][n - 1] && grid[i][j] !== grid[m - 1][n - 1]) {
                    // console.log(1)
                    newArr[i + 1][0] = grid[i][j]
                }
            }
        }
    }

    return newArr;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1));
// console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9));