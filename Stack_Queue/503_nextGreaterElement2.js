/**
 * Problem: 503 https://leetcode.com/problems/next-greater-element-ii/
 */

/**
 * Solution: T=O(N)
 * 1. Monotonic Decreasing Stack - Next Greater Element - Left-to-Right
 * 2. Circular stack
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var nextGreaterElements = function (nums) {
  const stack = [];
  const res = Array(nums.length).fill(-1);

  for (let i = 0; i < 2 * nums.length - 1; i++) {
    while (
      stack.length > 0 &&
      nums[i % nums.length] > nums[stack[stack.length - 1]]
    ) {
      res[stack.pop()] = nums[i % nums.length];
    }
    stack.push(i % nums.length);
  }

  return res;
};
