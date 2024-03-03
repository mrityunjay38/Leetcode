/**
 * Problem: 222 https://leetcode.com/problems/count-complete-tree-nodes/
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
 * Solution 1: T=O(N)
 * 1. Straight forward dfs travel and count nodes
 */

var countNodes = function (root) {
  const dfs = (node, count = [0]) => {
    if (!node) return;
    count[0] += 1;
    dfs(node.left, count);
    dfs(node.right, count);

    return count[0];
  };

  return root ? dfs(root) : 0;
};

/**
 * Solution 2: T=O(log^2 N) ~ O(d^2)
 * Return 0 if the tree is empty.
 * Compute the tree depth d.
 * Return 1 if d == 0.
 * The number of nodes in all levels but the last one is (2^d) − 1.
 * The number of nodes in the last level could vary from 1 to 2^d.
 * Enumerate potential nodes from 0 to (2^d) − 1 and perform the binary search by the node index to check how many
 * nodes are in the last level. Use the function exists(idx, d, root) to
 * check if the node with index idx exists.
 * Use binary search to implement exists(idx, d, root) as well.
 * Return (2^d)−1 + the number of nodes in the last level.
 */

var countNodes = function (root) {
  const findDepth = (node) => {
    if (!node) return 0;
    return 1 + findDepth(node.left);
  };

  const nodeExists = (index, depth, node) => {
    let left = 0,
      right = 2 ** depth - 1;
    while (left < right) {
      const pivot = left + Math.floor((right - left) / 2);
      if (index <= pivot) {
        node = node.left;
        right = pivot;
      } else {
        node = node.right;
        left = pivot + 1;
      }
    }

    return node != null;
  };

  if (!root) return 0;
  const depth = findDepth(root) - 1;
  let left = 0,
    right = 2 ** depth - 1;
  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nodeExists(pivot, depth, root)) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  return 2 ** depth - 1 + left;
};
