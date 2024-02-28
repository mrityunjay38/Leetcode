/**
 * Problem: 236 https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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
 * Solution: T=O(N)
 * 1. !Important: Node comparision is asked not value
 * 2. If left tree and right tree return a node matching criteria of p & q, hence means current node is the lowest common node (ancester)
 */

var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (!node) return;

    if (node.val == p.val || node.val == q.val) {
      return node;
    }

    const l = dfs(node.left);
    const r = dfs(node.right);

    if (!l) return r;
    else if (!r) return l;
    else return node;
  };

  return dfs(root);
};
