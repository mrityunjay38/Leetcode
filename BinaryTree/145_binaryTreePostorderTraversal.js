/**
 * Problem: 145 https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

/**
 * Solution: T=O(N)
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

var postorderTraversal = function (root) {
  const postorder = (node, order = []) => {
    if (!node) return order;

    postorder(node.left, order);
    postorder(node.right, order);
    order.push(node.val);

    return order;
  };

  return postorder(root);
};
