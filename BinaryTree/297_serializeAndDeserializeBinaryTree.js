/**
 * Problem: 297 https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Solution 1: T=O(N), S=O(N)
 * 1. DFS and generate preorder, leaf can be represented as anything unique ~ "null"
 * 2. Construct binary tree from preorder traversal using an iterator to point current node in the string or input
 *
 * Example:           1
 *                  /   \
 *                 2     3
 *                     /   \
 *                    4     5
 *
 * Preorder: [1, 2, null, null, 3, 4, null, null, 5, null, null]
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const preorder = [];
  const generatePreorder = (node) => {
    if (!node) {
      preorder.push("null");
      return;
    }
    preorder.push(node.val);
    generatePreorder(node.left);
    generatePreorder(node.right);
  };
  generatePreorder(root);
  return JSON.stringify(preorder);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const serialTree = JSON.parse(data);
  let pstart = 0;
  const constructBinaryTree = () => {
    if (serialTree[pstart] === "null") {
      pstart++;
      return null;
    }
    const root = new TreeNode(serialTree[pstart++]);
    root.left = constructBinaryTree();
    root.right = constructBinaryTree();
    return root;
  };
  return constructBinaryTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Solution 2:
 */

var serialize = function (root) {
  return JSON.stringify(root);
};

var deserialize = function (data) {
  return JSON.parse(data);
};
