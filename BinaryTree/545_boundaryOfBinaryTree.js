/**
 * Problem: 545 https://leetcode.com/problems/boundary-of-binary-tree/
 */

/**
 * Solution: T=O(N)
 * 1. Add left non-leaf as boundary
 * 2. Add leaves
 * 3. Add right non-leaf as boundary in reverse
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

var boundaryOfBinaryTree = function (root) {
  var leftPath = function (node, path = []) {
    if (!node) return;

    if (node.left) {
      path.push(node.val);
      leftPath(node.left, path);
    } else if (node.right) {
      path.push(node.val);
      leftPath(node.right, path);
    }
  };

  var rightPath = function (node, path = []) {
    const stack = [];
    if (!node) return;

    if (node.right) {
      stack.push(node.val);
      rightPath(node.right, path);
    } else if (node.left) {
      stack.push(node.val);
      rightPath(node.left, path);
    }

    for (let i = stack.length - 1; i >= 0; i--) {
      path.push(stack[i]);
    }
  };

  var leaves = function (node, path = []) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      path.push(node.val);
    }
    leaves(node.left, path);
    leaves(node.right, path);
  };

  const boundary = [];
  if (root.left || root.right) boundary.push(root.val);
  leftPath(root.left, boundary);
  leaves(root, boundary);
  rightPath(root.right, boundary);
  return boundary;
};
