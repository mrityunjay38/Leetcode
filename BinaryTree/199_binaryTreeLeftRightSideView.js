/**
 * Problem: 199 https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */

/**
 * Solution: DFS - T=O(N)
 * 1. Inverse pre-order traversal (root-right-left)
 * 2. Update hashmap for first time level encounter
 */

var rightSideView = function (root) {
  const map = new Map();
  const dfs = (node, level) => {
    if (!node) return;

    if (!map.has(level)) map.set(level, node.val);
    if (node.right) dfs(node.right, level + 1);
    if (node.left) dfs(node.left, level + 1);
  };

  const result = [];
  if (!root) return result;
  dfs(root, 0);

  map.forEach((val, key) => {
    result.push(val);
  });

  return result;
};

/** Solution
 * Problem: xxx Binary Tree Left Side View, T=O(n)
 * GFG - https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1
 */

// DFS
var leftSideView = function (root) {
  const map = new Map();
  const dfs = (node, level) => {
    if (!node) return;

    if (!map.has(level)) {
      map.set(level, node.data);
    }

    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  };

  const result = [];
  if (!root) return result;
  dfs(root, 0);

  map.forEach((val, key) => {
    result.push(val);
  });

  return result;
};

//BFS
class Solution {
  leftView(root) {
    const result = [];
    if (!root) return result;

    const queue = [root];
    let index = 0;

    while (index < queue.length) {
      const size = queue.length - index;
      const level = new Array(size);

      for (let i = 0; i < size; i++) {
        const node = queue[index++];

        if (i === 0) result.push(node.data);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    return result;
  }
}

/** Solution3: Level order traversal with BFS - Iterative T=O(n)
 * 1. Travel from left-to-right
 * 2. push last element from each level into ans
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function (root) {
  const ans = [];
  if (!root) return ans;

  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const size = queue.length - index;
    const level = new Array(size);

    for (let i = 0; i < size; i++) {
      const node = queue[index++];
      level[i] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(level[level.length - 1]);
  }

  return ans;
};
