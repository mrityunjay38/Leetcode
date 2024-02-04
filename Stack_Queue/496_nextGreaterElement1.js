/**
 * Problem: 496 https://leetcode.com/problems/next-greater-element-i/
 */

/**
 * Solution: Monotonic decreasing stack, leftToRight O(N)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i])
      map.set(stack.pop(), nums2[i]);
    stack.push(nums2[i]);
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.get(nums1[i]) || -1;
  }

  return nums1;
};
