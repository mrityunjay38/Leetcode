/**
 * Leetcode problem: https://leetcode.com/problems/delete-node-in-a-bst/description/
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
 * Solution1: DFS without recursion, T=O(log N), worst=O(N) for skewed tree
 * Space = O(1)
 * 
 * 1. If root is null, return null.
 * 2. Traverse the tree using BST property (left/right) to find the node to delete.
 * 3. Once the node is found:
   - If it has no children, delete and return null.
   - If it has only one child, delete and return that child.
 * 4. If the node has two children:
   - Choose either the right subtree or the left subtree to promote.
 * 5. If right subtree is promoted:
   - Connect it to the parent of the deleted node.
   - Find the leftmost node of the right subtree and attach the left subtree there.
 * 6. If left subtree is promoted:
   - Connect it to the parent of the deleted node.
   - Find the rightmost node of the left subtree and attach the right subtree there.
 * 
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {
  // Base case: empty tree
  if (!root) return null;

  // Special handling: deleting root when it has 0 or 1 child
  // Simply return the existing child (or null)
  if (key === root.val && (!root.left || !root.right)) {
    return root.left ? root.left : root.right;
  }

  // curr -> node being traversed
  // prev -> parent of curr
  let curr = root;
  let prev = null;

  // Step 1: Traverse the BST to find the node to delete
  while (curr) {
    // Move left if key is smaller
    if (key < curr.val) {
      prev = curr;
      curr = curr.left;
    }

    // Move right if key is larger
    else if (key > curr.val) {
      prev = curr;
      curr = curr.right;
    }

    // Step 2: Node to delete is found
    else {
      let leftSubtree = curr.left;
      let rightSubtree = curr.right;

      // Case 1: Node has only left child
      // Replace curr with its left subtree
      if (!rightSubtree) {
        if (prev.left === curr) prev.left = leftSubtree;
        else prev.right = leftSubtree;
        break;
      }

      // Case 2: Node has only right child
      // Replace curr with its right subtree
      if (!leftSubtree) {
        if (prev.left === curr) prev.left = rightSubtree;
        else prev.right = rightSubtree;
        break;
      }

      // Case 3: Node has two children
      // Promote right subtree
      // Attach left subtree to the leftmost node of right subtree

      // Handle root deletion separately (no parent)
      if (!prev) {
        root = rightSubtree;
      }
      // Connect promoted subtree to parent
      else if (prev.left === curr) {
        prev.left = rightSubtree;
      } else {
        prev.right = rightSubtree;
      }

      // Find leftmost node in right subtree (inorder successor)
      let temp = rightSubtree;
      while (temp.left) {
        temp = temp.left;
      }

      // Attach left subtree to inorder successor
      temp.left = leftSubtree;
      break;
    }
  }

  // Return updated root
  return root;
};
