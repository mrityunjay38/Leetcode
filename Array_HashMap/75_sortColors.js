/**
 * Problem: 75 https://leetcode.com/problems/sort-colors/
 */

/**
 * Solution 1: Straight forward .sort with a comparator.
 */

/**
 * Solution 2: T=O(n), two pointer approach with a third pointer to keep a reference of start/mid/end.
 * Reference -  Dutch Flag Problem
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let start = 0,
    mid = 0,
    end = nums.length - 1;

  while (mid <= end) {
    if (nums[mid] === 0) {
      [nums[mid], nums[start]] = [nums[start], nums[mid]];
      start++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[end]] = [nums[end], nums[mid]];
      end--;
    } else {
      mid++;
    }
  }
  return nums;
};
