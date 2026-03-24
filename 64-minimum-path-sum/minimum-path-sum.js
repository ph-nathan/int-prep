/*
    Approach 1: Top-down DP:
    Start at the end (minSum(bottom_right) then solve for smaller sub-problems)
*/
 
function minPathSumv0(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const memo = new Array(rows).fill(null).map(x => new Array(cols).fill(null));
    memo[0][0] = grid[0][0];

    function minSum(r, c) {
        if (r < 0 || c < 0) {
            return Infinity;
        }

        if (memo[r][c] !== null) {
            return memo[r][c];
        }

        memo[r][c] = Math.min(minSum(r - 1, c), minSum(r, c - 1)) + grid[r][c];
        return memo[r][c];
    }
    return minSum(rows - 1, cols - 1);
}

/*
    Approach 2: Bottom-up DP:
    Start at the top-left and loop thru table to find min sum at bottom right
*/

function minPathSum(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = new Array(rows).fill(null).map(x => new Array(cols).fill(0));

    dp[0][0] = grid[0][0];

    // all positions in first row is only reachable from direct left
    for (let c = 1; c < cols; c++) {
        dp[0][c] = grid[0][c] + dp[0][c - 1];
    }

    // all positions in first col is only reachable from direct top 
    for (let r = 1; r < rows; r++) {
        dp[r][0] = grid[r][0] + dp[r - 1][0];
    }
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c];
        }
    }

    return dp[rows - 1][cols - 1];
}