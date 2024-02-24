/**
 * Problem: 437 https://leetcode.com/problems/path-sum-iii/
 */

/**
 * Solution: T=O(N)
 * 1. Similar to pre-sum problem
 * 2. A hashmap to keep a record of no. of times current sum or required sum occured while traversing.
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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
  let count = 0;
  let hashmap = {};
  const dfs = (node, sum = 0) => {
    if (!node) return;

    sum += node.val;
    if (sum == targetSum) {
      count++;
    }

    count += hashmap[sum - targetSum] || 0;

    hashmap[sum] ? (hashmap[sum] += 1) : (hashmap[sum] = 1);
    dfs(node.left, sum);
    dfs(node.right, sum);
    hashmap[sum] ? (hashmap[sum] -= 1) : null;
  };

  dfs(root);
  return count;
};
