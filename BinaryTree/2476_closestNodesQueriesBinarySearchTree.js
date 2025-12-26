/**
 * Leetcode problem: https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/description/
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
/**
 * Solution: Inorder Traversal + Binary Search, Time= O(N + Q log N)
 *
 * 1. A BST can be skewed, making per-query traversal O(N) in the worst case.
 * 2. With Q queries, this degrades to O(Q × N).
 * 3. To avoid this, we convert the BST into a sorted array using inorder traversal in O(N).
 * 4. For each query, we perform binary search to find the closest smaller and larger values.
 * 5. During binary search (or BST traversal):
 * 6. If we move left, the current value is a candidate for the smallest value ≥ query[i], 
 *    so we update the upper bound and continue searching left.
 * 7. If we move right, the current value is a candidate for the largest value ≤ query[i],
 *    so we update the lower bound and continue searching right.
 * 8. If we find an exact match, both bounds are equal to the query value.

 *
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  function inorder(root, arr = []) {
    if (!root) return arr;
    const stack = [];
    while (true) {
      if (root !== null) {
        stack.push(root);
        root = root.left;
      } else {
        if (!stack.length) {
          break;
        }
        const node = stack.pop();
        arr.push(node.val);
        root = node.right;
      }
    }
    return arr;
  }

  function binarySearch(arr, searchVal, minI = -1, maxI = -1) {
    if (!arr.length) return [minI, maxI];

    let low = 0,
      high = arr.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (searchVal < arr[mid]) {
        maxI = arr[mid];
        high = mid - 1;
      } else if (searchVal > arr[mid]) {
        minI = arr[mid];
        low = mid + 1;
      } else {
        minI = maxI = searchVal;
        return [minI, maxI];
      }
    }

    return [minI, maxI];
  }

  let result = [];
  const inorderArr = inorder(root);

  for (let i = 0; i < queries.length; i++) {
    const [minI, maxI] = binarySearch(inorderArr, queries[i]);
    result.push([minI, maxI]);
  }
  return result;
};
