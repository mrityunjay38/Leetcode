/**
 * Leetcode problem: https://leetcode.com/problems/kth-smallest-element-in-a-bst
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
 * Solution 1: Iterative inorder traversal
 * Time: O(H + K), Space: O(H)
 *
 * 1. Inorder traversal of a BST (left → root → right) visits nodes in sorted order.
 * 2. We simulate inorder traversal using a stack.
 * 3. We push nodes while moving left to defer processing until their left subtree is done.
 * 4. Each pop from the stack gives the next smallest element.
 * 5. We decrement k on each visit and stop when k reaches 0.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return root.val;
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const curr = stack.pop();
    if (--k === 0) {
      return curr.val;
    }

    root = curr.right;
  }
};

/**
 * Solution 2: Full inorder traversal
 * Time: O(N), Space: O(N)
 *
 * 1. Perform inorder traversal of the BST to generate a sorted array.
 * 2. Return the element at index k - 1 (1-indexed).
 * 3. This is a simple but non-optimal approach.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  function inorder(root, inorder = []) {
    if (!root) return inorder;
    const stack = [];

    while (true) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        if (!stack.length) break;
        const node = stack.pop();
        inorder.push(node.val);
        root = node.right;
      }
    }

    return inorder;
  }

  const inorderArr = inorder(root);
  return inorderArr[k - 1];
};
