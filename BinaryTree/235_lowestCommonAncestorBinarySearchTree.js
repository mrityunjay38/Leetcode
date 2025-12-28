/**
 * Problem: 235 https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/**
 * Solution 1: Recursive traversal leveraging BST ordering
 *
 * Time: O(h), where h is the height of the BST
 * Space: O(h) due to recursion stack
 *
 * 1. If both p and q are smaller than current node, move to left subtree.
 * 2. If both p and q are greater than current node, move to right subtree.
 * 3. Otherwise (they lie on different sides or one equals the current node),
 *    the current node is the lowest common ancestor.
 */

var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (!node) return;
    if (node.val == p.val || node.val == q.val) return node;

    if (p.val > node.val && q.val > node.val) {
      return dfs(node.right);
    } else if (p.val < node.val && q.val < node.val) {
      return dfs(node.left);
    } else return node;
  };

  return dfs(root);
};

/**
 * Solution 2: Iterative traversal leveraging BST ordering
 *
 * Time: O(h), where h is the height of the BST
 * Space: O(1)
 *
 * Same logic as recursive solution, but avoids recursion stack.
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else return root;
  }
};
