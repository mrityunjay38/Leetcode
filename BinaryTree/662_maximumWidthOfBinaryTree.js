/**
 * Problem: 662 https://leetcode.com/problems/maximum-width-of-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 * Solution: T=O(N)
 * 1. Idea is to index each node level and col wise.
 * Example:
 *          (1)
 *         /   \
 *       (2)   (3)
 * 2. Every left node will be (2*col) as per last node's col value.
 * 3. Every right node will be (2*col+1) as per last node's col value.
 *
 * !Important, since answer lies in range 1 to 32-bit signed integer
 * Hence, after every (2*32 - 1) we need to either have a data type to support big integers or reset indexing
 * Trick: Use mod = 2*32 - 1 to stop overflow and reset indexing
 *
 * Distance calc = last_index - first_index + 1, as 0 based indexing is followed
 */

var widthOfBinaryTree = function (root) {
  const map = new Map();
  let max = 1;
  const MOD = 2 ** 32 - 1;
  const dfs = (node, level, col) => {
    if (!node) return;

    if (!map.has(level)) {
      map.set(level, col);
    }

    const firstCol = map.get(level);
    max = Math.max(max, col - firstCol + 1);
    dfs(node.left, level + 1, (2 * col) % MOD);
    dfs(node.right, level + 1, (2 * col + 1) % MOD);
  };

  dfs(root, 0, 0);
  return max;
};
