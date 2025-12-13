/**
 * Problem: 103 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */

/**
 * Solution: T=O(N) * O(K)
 * 1. Dequeue ideal for maintaining O(N)
 * 2. Array results into extra O(K) traversal to append element to front
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
 * Solution1
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
  const levels = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (levels[level]) {
      level % 2 == 0
        ? levels[level].push(node.val)
        : (levels[level] = [node.val, ...levels[level]]);
    } else {
      levels[level] = [node.val];
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);
  return levels;
};

/**
 * Solution2: T=O(N)
 * 1. preorder
 * 2. maintain leftToRight flip flag
 * 3. loop while current index in the queue < queue.length
 * 4. elements before current index are processed, remaining unprocessed
 * 5. calculate size to allocate for remaining level elements
 * 6. find position of current node to put at the right index
 * 7. when leftToRight true, simply put elements at [i=0...size-1]
 * 8. when leftToRight false, place from right most index, 0,1,2,3 -> 3,2,1,0 i.e [(size-1) - i]
 */

var zigzagLevelOrder = function (root) {
  const result = [];
  if (!root) return result;

  const queue = [root];
  let index = 0,
    left2Right = true;

  while (index < queue.length) {
    const size = queue.length - index;
    const level = new Array(size);

    for (let i = 0; i < size; i++) {
      const node = queue[index];
      index += 1;
      const pos = left2Right ? i : size - 1 - i;
      level[pos] = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
    left2Right = !left2Right;
  }

  return result;
};
