/**
 * Problem: 987 https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** Solution1: DFS T=O(n log(n))
 * 1. simple dfs preorder traversal
 * 2. sort by col
 * 3. sort by row if not same rows, else sort by values
 *
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const row_col = new Map();

  function dfs(root, row = 0, col = 0) {
    if (!root) return;

    if (!row_col.has(col)) {
      row_col.set(col, [[row, root.val]]);
    } else {
      let rowArr = row_col.get(col);
      rowArr.push([row, root.val]);
      row_col.set(col, rowArr);
    }
    dfs(root.left, row + 1, col - 1);
    dfs(root.right, row + 1, col + 1);
  }

  dfs(root);
  let ans = [],
    sortedByCol = [];

  for (const [key, value] of row_col) {
    sortedByCol.push([key, value]);
  }

  sortedByCol = sortedByCol.sort((a, b) => a[0] - b[0]);

  for (const [key, value] of sortedByCol) {
    const sortedByRow = value.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });
    ans.push(sortedByRow.map(([row, val]) => val));
  }

  return ans;
};
