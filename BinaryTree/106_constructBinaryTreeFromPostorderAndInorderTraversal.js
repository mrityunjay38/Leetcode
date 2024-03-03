/**
 * Problem: 106 https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

/**
 * Solution: T=O(N)
 * !Important unique binary tree can only be constructed given both inorder - pre/postorder
 * 1. Generate hashmap to lookup distance or number of nodes between two points.
 * 2. Last node in postorder will always be root.
 * 3. We look up for root position inside inorder and find out number of elements on left and right.
 * 4. Repeat the process to construct tree recursivly.
 */

var buildTree = function (inorder, postorder) {
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  const constructBinaryTree = (
    pstart = 0,
    pend = postorder.length - 1,
    istart = 0,
    iend = inorder.length - 1
  ) => {
    if (pstart > pend || istart > iend) return null;
    const root = new TreeNode(postorder[pend]);
    const iroot = inorderMap.get(root.val);
    const leftNodes = iroot - istart;
    root.left = constructBinaryTree(
      pstart,
      pstart + leftNodes - 1,
      istart,
      iroot - 1
    );
    root.right = constructBinaryTree(
      pstart + leftNodes,
      pend - 1,
      iroot + 1,
      iend
    );
    return root;
  };

  return constructBinaryTree();
};
