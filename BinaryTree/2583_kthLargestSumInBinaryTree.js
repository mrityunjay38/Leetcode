/**
 * Leetcode problem: https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree
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
 * Solution1: T=O(N + H log H), S=O(N)
 * 1. We traverse level by level, generate a sum of each level
 * 2. sort level sum array in decreasing order
 * 3. return -1 if k > level order sum else, kth - 1 sum since k is 1 indexed value
 * 4. else we may sort array into increasing order and return arr[length - k]
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  if (!root) return -1;

  const levelSums = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSums.push(sum);
  }

  levelSums.sort((a, b) => b - a);

  return k > levelSums.length ? -1 : levelSums[k - 1];
};
