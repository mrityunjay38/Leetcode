/**
 * Problem: 209 https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * Solution: T=O(N)
 * 1. Sliding window
 * 2. If sum >= target, take minimum of(min, current)
 * 3. Decrease window size by subtracting [i] and the distance between [i,j]
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
  let sum = 0,
    i = 0,
    min = Infinity;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i++];
    }
  }

  return min == Infinity ? 0 : min;
};
