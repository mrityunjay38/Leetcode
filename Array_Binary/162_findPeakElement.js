/**
 * Problem: 162 https://leetcode.com/problems/find-peak-element/
 */

/**
 * Solution: T=O(logN)
 *   /\      /\
 *  /  \/\  /
 * /      \/
 *
 * if mid > mid + 1, peak on left
 * else peak on right
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
  const bs = (low, high) => {
    if (low == high) return low;
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] > nums[mid + 1]) return bs(low, mid);
    else return bs(mid + 1, high);
  };

  return bs(0, nums.length - 1);
};
