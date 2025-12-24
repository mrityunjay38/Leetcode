/**
 * Problem: https://leetcode.com/problems/search-in-a-binary-search-tree/description/
 *
 * 1. DFS or BFS, compare if current node val equals given val, return node
 * 2. check if val is less-than current node val, move left
 * 3. else move right.
 * 4. return null if not found or root is null;
 *
 * Worst T=O(N) if skewed tree
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
 * Solution1: DFS using stack, T=O(log N)
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (val === node.val) return node;
    if (val < node.val && node.left) stack.push(node.left);
    else if (val > node.val && node.right) stack.push(node.right);
  }

  return null;
};

/**
 * Solution2: BFS using queue, T=O(log N)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;

  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const node = queue[index++];
    if (val === node.val) {
      return node;
    }

    if (val < node.val && node.left) queue.push(node.left);
    if (val > node.val && node.right) queue.push(node.right);
  }

  return null;
};

/**
 * Solution3: Best optimal -  DFS without recursion, T=O(log N), S=O(1)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;

  while (root) {
    if (val === root.val) return root;
    if (val < root.val) root = root.left;
    else root = root.right;
  }

  return null;
};
