/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** Solution1: BFS, T=O(N)
 * 1. Each iteration, index points to first node in the row
 * 2. Consider it as the leftMost for current row
 * 3. repeat till reached last row
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  if (!root) return;

  const queue = [root];
  let index = 0;
  let leftMost = root.val;

  while (index < queue.length) {
    const levelStart = index;
    const levelEnd = queue.length;

    leftMost = queue[levelStart].val;

    for (let i = index; i < levelEnd; i++) {
      const node = queue[index++];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return leftMost;
};
