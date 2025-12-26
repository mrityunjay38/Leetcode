/**
 * GFG - https://www.geeksforgeeks.org/problems/implementing-floor-in-bst/1
 * 
Given a root binary search tree and an integer x, complete the function that returns the floor of x in the BST.
Note: The floor of x is defined as the greatest value in the tree that is less than or equal to x.
If no such value exists, return -1
 */

/**
 * Solution1: Simple binary search on a BST tree, best: T=O(log N), worst would be T=O(N) for skewed BST
 * Floor(x): an integer equal to x or immediate lesser than x
 * 1. simple left or right search by reducing scope
 * 2. if x is lesser than current node, means we need to go further left to the reducing side
 * 3. when moving to further right, floor would be the current lesser node before we move to greater value node on the right
 * 4. else if x less than current node, we simply move left
 * 5. if current node equals x, floor(x) = x, hence stop searching and return
 * 6. if we reach to a leaf without finding any matching node value, we return last floor value
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
  findFloor(root, x) {
    let floor = -1;

    while (root) {
      if (x < root.data) {
        root = root.left;
      } else if (x > root.data) {
        floor = root.data;
        root = root.right;
      } else {
        return x;
      }
    }

    return floor;
  }
}
