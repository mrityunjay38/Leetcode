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
 * Solution2: BFS Level Order Traversal, T=O(N), S=O(N)
 *
 * Serialize:
 * - Perform level order traversal
 * - Append node value to string
 * - Use a special marker (e.g. "N") for null nodes
 *
 * Deserialize:
 * 1. Split serialized string into an array
 * 2. Use an index pointer to iterate over values
 * 3. Create root from first value and push into queue
 * 4. While queue is not empty:
 *    - Pop current node
 *    - If next value is not "N", create left node and enqueue
 *    - If next value is not "N", create right node and enqueue
 * 5. Return root
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "";

  const string = [];
  const queue = [root];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index++];
    if (node == null) {
      string.push("N");
      continue;
    }
    string.push(`${node.val}`);
    queue.push(node.left);
    queue.push(node.right);
  }

  return string.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;

  const values = data.split(",");
  let i = 0;
  let qIndex = 0;

  const root = new TreeNode(parseInt(values[i++], 10));
  const queue = [root];

  while (qIndex < queue.length) {
    const node = queue[qIndex++];

    // Left
    if (values[i] !== "N") {
      node.left = new TreeNode(parseInt(values[i], 10));
      queue.push(node.left);
    }
    i++;

    // Right
    if (values[i] !== "N") {
      node.right = new TreeNode(parseInt(values[i], 10));
      queue.push(node.right);
    }
    i++;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
