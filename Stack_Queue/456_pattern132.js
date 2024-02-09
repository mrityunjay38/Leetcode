/**
 * Problem: 456 https://leetcode.com/problems/132-pattern/
 */

/**
 * Solution: T=O(N)
 * 1. Monotonic Decreasing Stack - Previous largest element - Right-to-Left
 * 2. Example: [(i,1), (j,3), (k, 2)], while i < j < k and 1 < 3 && 2 < 3 : i < k
 * 3. Find k and determine next value in series less than k as i
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var find132pattern = function (nums) {
  const stack = [];
  let k = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < k) return true;
    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      k = stack.pop();
    }
    stack.push(nums[i]);
  }

  return false;
};
