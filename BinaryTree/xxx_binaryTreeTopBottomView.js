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
 * Solution1: BFS Top View, T=O(N) using deque operations
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
 * Solution2: DFS top view, T=nO(log n)
 */

class Solution {
  topView(root) {
    const colMap = new Map();
    function dfs(root, col, row) {
      if (!root) return;

      if (!colMap.has(col)) {
        colMap.set(col, [[row, root.data]]);
      } else {
        const currNodes = colMap.get(col);
        currNodes.push([row, root.data]);
        colMap.set(col, currNodes);
      }

      dfs(root.left, col - 1, row + 1);
      dfs(root.right, col + 1, row + 1);
    }

    dfs(root, 0, 0);

    let sortedByCol = [];
    for (const [key, value] of colMap) {
      sortedByCol.push([key, value]);
    }

    sortedByCol = sortedByCol.sort((a, b) => a[0] - b[0]);

    let ans = [];
    for (const [key, value] of sortedByCol) {
      const sortedByRow = value.sort((a, b) => a[0] - b[0]);
      ans.push(sortedByRow[0][1]);
    }

    return ans;
  }
}

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
