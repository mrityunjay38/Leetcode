/**
 * GFG - https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1
 */

/**
 * @param {Node} root

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * Solution: BFS Top View, T=O(N) using deque operations
 */

var topView = function (root) {
  const result = [];
  if (!root) return result;

  const map = new Map();
  const deque = [[root, 0]];
  let minCol = 0,
    maxCol = 0;

  while (deque.length) {
    const [node, col] = deque.shift();
    if (!map.has(col)) {
      map.set(col, node.data);
    }

    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);

    if (node.left) {
      deque.push([node.left, col - 1]);
    }

    if (node.right) {
      deque.push([node.right, col + 1]);
    }
  }

  for (let x = minCol; x <= maxCol; x++) {
    result.push(map.get(x));
  }

  return result;
};

/**
 * Solution: BFS Bottom View, T=O(N) using deque operations
 */

var bottomView = function (root) {
  const result = [];
  if (!root) return result;

  const map = new Map();
  const deque = [[root, 0]];
  let minCol = 0,
    maxCol = 0;

  while (deque.length) {
    const [node, col] = deque.shift();
    map.set(col, node.data);

    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);
    if (node.left) deque.push([node.left, col - 1]);
    if (node.right) deque.push([node.right, col + 1]);
  }

  for (let x = minCol; x <= maxCol; x++) {
    result.push(map.get(x));
  }

  return result;
};
