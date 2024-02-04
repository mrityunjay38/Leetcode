/**
 * Weekly Contest 383
 * Problem: 3028 https://leetcode.com/contest/weekly-contest-383/problems/ant-on-the-boundary/
 */

/**
 * Solution: T=O(N)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var returnToBoundaryCount = function (nums) {
  let sum = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum == 0) {
      count++;
    }
  }

  return count;
};
