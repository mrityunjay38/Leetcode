/**
 * Problem: 81 https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */

/**
 * Solution: T=O(logN)
 * 1. Same as #33 but with an optimization if repeation of numbers allowed
 * 2. Optimization: Ignore extream ends, if it is equal to mid, nums[start] == nums[mid] == nums[end]
 * 2.1 binarySearch(start+1, end-1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function (nums, target) {
  function bs(start, end) {
    if (start > end) return false;
    const mid = start + Math.floor((end - start) / 2);

    if (target == nums[mid]) {
      return true;
    }

    if (nums[start] == nums[mid] && nums[mid] == nums[end]) {
      return bs(start + 1, end - 1);
    }

    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid])
        return bs(start, mid - 1);
      else return bs(mid + 1, end);
    } else if (nums[mid] <= nums[end]) {
      if (target <= nums[end] && target > nums[mid])
        return bs(mid + 1, end, nums, target);
      else return bs(start, mid - 1);
    }
  }

  return bs(0, nums.length - 1);
};
