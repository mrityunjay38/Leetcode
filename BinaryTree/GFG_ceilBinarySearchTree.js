/**
 * GFG - https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1
 * 
 You are given a root binary search tree and an integer x . Your task is to find the Ceil of x in the tree.
Note: Ceil(x) is a number that is either equal to x or is immediately greater than x.
If Ceil could not be found, return -1.
 */

/**
 * Solution1: Simple binary search on a BST tree, best: T=O(log N), worst would be T=O(N) for skewed BST
 * Ceil(x): an integer equal to x or immediate greater than x
 * 1. simple left or right search by reducing scope
 * 2. if x is lesser than current node, means we need to go further left to the reducing side
 * 3. when moving to further left, ceil would be the current greater node before we move to lesser value node on the left
 * 4. else if x greater than current node, we simply move right
 * 5. if current node equals x, ceil(x) = x, hence stop searching and return
 * 6. if we reach to a leaf without finding any matching node value, we return last ceil value
 * @param {Node} root
 * @param {number} x
 * @returns {number}
 */
/*
class Node {
   constructor(data) {
       this.data = data;
       this.left = null;
       this.right = null;
   }
}
*/
class Solution {
  findCeil(root, x) {
    let ceil = -1;

    while (root) {
      if (x < root.data) {
        ceil = root.data;
        root = root.left;
      } else if (x > root.data) {
        root = root.right;
      } else {
        return x;
      }
    }

    return ceil;
  }
}
