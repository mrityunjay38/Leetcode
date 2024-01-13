/**
 * Problem: 34 https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */

/**
 * Solution: Using recursive binary search.
 * 1. Two times binary search on same array
 * 1.1 One for just lower bound than target
 * 1.2 Another for just upper bound than target
 * 2. If element found, continue search to its lower bound or upper bound.
 * 2.1 If found, return index as an index or return mid if not found ie: -1;
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [
    binarySearch(nums, target, 0, nums.length - 1, "left"),
    binarySearch(nums, target, 0, nums.length - 1, "right"),
  ];
};

const binarySearch = (nums, target, start, end, direction) => {
  if (start > end) return -1;

  const mid = start + Math.floor((end - start) / 2);

  if (target === nums[mid]) {
    const index =
      direction === "left"
        ? binarySearch(nums, target, start, mid - 1, direction)
        : binarySearch(nums, target, mid + 1, end, direction);
    return index === -1 ? mid : index;
  } else if (target > nums[mid]) {
    return binarySearch(nums, target, mid + 1, end, direction);
  } else {
    return binarySearch(nums, target, start, mid - 1, direction);
  }
};
