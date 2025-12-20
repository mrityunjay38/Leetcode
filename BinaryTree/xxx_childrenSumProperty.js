/**
 * GFG - https://www.geeksforgeeks.org/problems/children-sum-parent/1
 * 
 * Given the root of a binary tree, determine whether the tree satisfies the Children Sum Property. In this property, each non-leaf node must have a value equal to the sum of its left and right children's values. A NULL child is considered to have a value of 0, and all leaf nodes are considered valid by default.
 * Return true if every node in the tree satisfies this condition, otherwise return false.
 */

/**
 * Solution1: DFS, T=O(N)
 * At every node, we do exactly three things:
 * Base case
 * If leaf → valid
 * Local check for left and right, if null consider them 0 value
 * Parent value equals sum of children
 * Recursive validation
 * Left subtree valid
 * Right subtree valid
 * If all nodes satisfy this → tree satisfies Children Sum Property.

 * @param {Node} root
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  isSumProperty(root) {
    function dfs(root) {
      if (!root) return true;

      if (root.left == null && root.right == null) return true;

      const left = root.left ? root.left.data : 0;
      const right = root.right ? root.right.data : 0;

      if (left + right !== root.data) return false;

      return dfs(root.left) && dfs(root.right);
    }
    return dfs(root);
  }
}
