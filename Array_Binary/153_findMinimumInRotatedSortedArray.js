/**
 * Problem: 153 https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

/**
 * Solution: T=O(logN)
 * 1. If start > end return min;
 * 2. If start < mid, min = min(min, start) and continue searching in right half
 * 3. If mid < end, min = min(min, mid) and continue search in left half
 * 
 * Note: T=O(nlogN) will still work if <= 10^6
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  const bs = (start, end, min = Infinity) => {
    if (start > end) return min;
    const mid = start + Math.floor((end - start) / 2);

    if (nums[start] <= nums[mid])
      return bs(mid + 1, end, Math.min(min, nums[start]));
    else if (nums[mid] < nums[end])
      return bs(start, mid - 1, Math.min(min, nums[mid]));
  };

  return bs(0, nums.length - 1);
};
