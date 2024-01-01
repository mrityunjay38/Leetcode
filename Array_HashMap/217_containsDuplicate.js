/**
 * Problem: 217 https://leetcode.com/problems/contains-duplicate
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Solution:
 */

var containsDuplicate = function (nums) {
  let ans = false;
  const freqMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (freqMap[nums[i]]) ans = true;
    else freqMap[nums[i]] = 1;
  }

  return ans;
};
