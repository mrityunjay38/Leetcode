/**
 * Problem: 863 https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

/**
 * Solution1: T=(O(N) + O(N)) ~ O(N)
 * 1. Create graph by adding parent node to each node.
 * 2. Store each node as result for every (k - x = 0) distance as an answer.
 */

var distanceK = function (root, target, k) {
  const addParent = (node, parent) => {
    if (!node) return;
    node.parent = parent;
    addParent(node.left, node);
    addParent(node.right, node);
  };
  addParent(root, null);

  const visited = new Map(),
    result = [];
  const dfs = (node, distance) => {
    if (!node || visited.has(node.val)) return;
    visited.set(node.val, true);
    if (distance == 0) {
      result.push(node.val);
      return;
    }

    dfs(node.parent, distance - 1);
    dfs(node.left, distance - 1);
    dfs(node.right, distance - 1);
  };

  dfs(target, k);
  return result;
};

/**
 * Better/Optimal and interiew friendly
 * Solution2: BFS, T=O(N)
 * 1. First mark parents for each node, convert into graph and maintain hashmap to map child --> parent relation
 * 2. use target as starting point
 * 3. traverse left, right, upward (parent) for current node and check if already visited to avoid infinte loop since tree is now a graph
 * 4. everytime we go into next iteration, means we have traversed 1-distance away in left, right, parent directions by pushing them into queue
 * 5. if distance equals k, break. We found all the k distant nodes left in the queue.
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const hash = new Map();
  function addParent(root) {
    const queue = [root];
    hash.set(root, null);

    while (queue.length) {
      const node = queue.pop();
      if (node.left) {
        node.left.parent = node;
        hash.set(node.left, node);
        queue.push(node.left);
      }

      if (node.right) {
        node.right.parent = node;
        hash.set(node.right, node);
        queue.push(node.right);
      }
    }
  }

  const kthNodes = [];
  const visited = new Map();
  function kthDistanceNodes(root, target, k) {
    if (!root) return;

    const queue = [target];
    visited.set(target, true);
    let index = 0,
      distance = 0;

    while (index < queue.length) {
      const size = queue.length - index;

      if (distance === k) break;
      distance++;

      for (let i = 0; i < size; i++) {
        const node = queue[index++];

        if (node.left && !visited.has(node.left)) {
          queue.push(node.left);
          visited.set(node.left, true);
        }

        if (node.right && !visited.has(node.right)) {
          queue.push(node.right);
          visited.set(node.right, true);
        }

        if (hash.get(node) && !visited.has(hash.get(node))) {
          queue.push(hash.get(node));
          visited.set(hash.get(node), true);
        }
      }
    }

    while (index < queue.length) {
      kthNodes.push(queue[index++].val);
    }
  }

  addParent(root);
  kthDistanceNodes(root, target, k);
  return kthNodes;
};
