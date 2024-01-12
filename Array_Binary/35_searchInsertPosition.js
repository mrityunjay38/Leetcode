/**
 * Problem: 35 https://leetcode.com/problems/search-insert-position/
 */

/**
 * Solution: Simple binary search for T=O(logN)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  return searchIndex(nums, target, 0, nums.length - 1);
};

var searchIndex = function (nums, target, start, end) {
  if (start > end) return start;

  const mid = start + Math.floor((end - start) / 2);

  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) return searchIndex(nums, target, start, mid - 1);
  else return searchIndex(nums, target, mid + 1, end);
};
