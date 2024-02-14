/**
 * Problem: 704 https://leetcode.com/problems/binary-search/
 */

/**
 * Solution: T=O(logN), simple binary search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target > nums[mid]) left = mid + 1;
    else if (target < nums[mid]) right = mid - 1;
    else return mid;
  }

  return -1;
};
