/**
 * Problem: 662 https://leetcode.com/problems/maximum-width-of-binary-tree/
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
 * @return {number}
 */

/**
 * Solution1: T=O(N)
 * 1. Idea is to index each node level and col wise.
 * Example:
 *          (1)
 *         /   \
 *       (2)   (3)
 * 2. Every left node will be (2*col) as per last node's col value.
 * 3. Every right node will be (2*col+1) as per last node's col value.
 *
 * !Important, since answer lies in range 1 to 32-bit signed integer
 * Hence, after every (2*32 - 1) we need to either have a data type to support big integers or reset indexing
 * Trick: Use mod = 2*32 - 1 to stop overflow and reset indexing
 *
 * Distance calc = last_index - first_index + 1, as 0 based indexing is followed
 */

var widthOfBinaryTree = function (root) {
  const map = new Map();
  let max = 1;
  const MOD = 2 ** 32 - 1;
  const dfs = (node, level, col) => {
    if (!node) return;

    if (!map.has(level)) {
      map.set(level, col);
    }

    const firstCol = map.get(level);
    max = Math.max(max, col - firstCol + 1);
    dfs(node.left, level + 1, (2 * col) % MOD);
    dfs(node.right, level + 1, (2 * col + 1) % MOD);
  };

  dfs(root, 0, 0);
  return max;
};

/**
 * Solution2: BFS, T=O(N)
 * 1. indexing each node, starting with 0 or 1
 * 2. keeping a pointer index to point current node in the queue
 * 3. calculate size of current level
 * 4. firstIndex = index of first node in the level
 * 5. loop, normalize index by substracting first index to [0,1,2....]
 * 6. calculate max width by lastIndex + 1 as after normlization first index will always be 0, hence no need for lastIndex - firstNormalizedIndex + 1
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let result = 0;
  if (!root) return result;

  const queue = [[1, root]];
  let index = 0;

  while (index < queue.length) {
    const size = queue.length - index;
    let [firstIndex, _] = queue[index];
    let lastIndex = firstIndex;

    for (let i = 0; i < size; i++) {
      const [idx, node] = queue[index++];
      const normalizedIdx = idx - firstIndex;
      lastIndex = normalizedIdx;

      if (node.left) queue.push([2 * normalizedIdx, node.left]);
      if (node.right) queue.push([2 * normalizedIdx + 1, node.right]);
    }

    result = Math.max(result, lastIndex + 1);
  }

  return result;
};
