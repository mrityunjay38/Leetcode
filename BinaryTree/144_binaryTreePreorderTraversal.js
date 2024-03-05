/**
 * Problem: 144 https://leetcode.com/problems/binary-tree-preorder-traversal/
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

var preorderTraversal = function (root) {
  const preorder = (node, order = []) => {
    if (!node) return order;

    order.push(node.val);
    preorder(node.left, order);
    preorder(node.right, order);

    return order;
  };

  return preorder(root);
};

/**
 * Solution 2: T=O(N), S=O(1) if order is printed directly but since a variable is used to store, hence S=O(N)
 */

/**
 * Initialize the root as the current node curr.
 * While curr is not NULL, check if curr has a left child.
 * If curr does not have a left child, print curr and update it to point to the node on the right of curr.
 * Else, make curr the right child of the rightmost node in curr's left subtree.
 * Print curr and update curr to this left node.
 */

var preorderTraversal = function (root) {
  const preorder = [];
  let node = root;
  while (node) {
    if (!node.left) {
      preorder.push(node.val);
      node = node.right;
    } else {
      let pre = node.left;
      while (pre.right !== null && pre.right !== node) {
        pre = pre.right;
      }
      if (pre.right === node) {
        pre.right = null;
        node = node.right;
      } else {
        pre.right = node;
        preorder.push(node.val);
        node = node.left;
      }
    }
  }
  return preorder;
};
