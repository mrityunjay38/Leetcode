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
 * Solution: T=O(N), even though solution of #236 will work here as well but Binary Search Tree has added benefit of reducing/eliminating search space.
 * 1. If both p, q are less than current node helps to ignore right of current node.
 * 2. If both p, q are greater than current node, then it helps to ignore left of current node.
 * 3. Else if both are on two different side of current node, hence current node is the lowest common ancestor of p, q;
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
