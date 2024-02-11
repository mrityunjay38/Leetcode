/**
 * Problem: 581 https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

/**
 * Solution: T=O(N)
 * 1. Find lower and upper bound using monotonic increasing / decreasing stack
 * 2. return distance between them
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
  let start = nums.length,
    end = 0;

  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
      start = Math.min(start, stack.pop());
    }
    stack.push(i);
  }

  stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      end = Math.max(end, stack.pop());
    }
    stack.push(i);
  }

  return end - start > 0 ? end - start + 1 : 0;
};
