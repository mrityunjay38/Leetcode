/**
 * Problem: 314 https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
 * @return {number[][]}
 */

/**
 * Solution 1: DFS, T=O(N . WlogW)
 * 1. min-max col to avoid sorting and save extra T=O(NlogN)
 * 2. W times to sort column wise nodes.
 */

var verticalOrder = function (root) {
  let axis = new Map();
  let minCol = 0,
    maxCol = 0;
  var dfs = function (node, level = 0, col = 0) {
    if (!node) return;

    if (axis.has(col)) {
      axis.get(col).push([level, node.val]);
    } else {
      axis.set(col, [[level, node.val]]);
    }

    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);
    dfs(node.left, level + 1, col - 1);
    dfs(node.right, level + 1, col + 1);
  };

  if (!root) return [];
  dfs(root);
  let res = [];
  for (let x = minCol; x <= maxCol; x++) {
    const sortedVerticalOrder = axis.get(x).sort((a, b) => a[0] - b[0]);
    res.push(sortedVerticalOrder.map((n) => n[1]));
  }

  return res;
};

/**
 * Solution 2: BFS, T=O(N)
 * 1. Level order traversal using deque operations
 * 2. min-max col to avoid sorting and save T=O(NlogN)
 * 3. Hashmap to keep left-to-right order of insertion
 */

var verticalOrder = function (root) {
  const result = [];

  if (!root) return result;
  const map = new Map();
  let minCol = 0,
    maxCol = 0;
  const deque = [[root, 0]];

  while (deque.length) {
    const [node, col] = deque.shift();
    if (node) {
      if (!map.has(col)) {
        map.set(col, []);
      }

      map.get(col).push(node.val);
      minCol = Math.min(minCol, col);
      maxCol = Math.max(maxCol, col);

      deque.push([node.left, col - 1]);
      deque.push([node.right, col + 1]);
    }
  }

  for (let i = minCol; i <= maxCol; i++) {
    result.push(map.get(i));
  }

  return result;
};
