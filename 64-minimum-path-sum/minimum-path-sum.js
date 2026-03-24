/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
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