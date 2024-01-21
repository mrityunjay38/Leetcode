/**
 * Problem: 287 https://leetcode.com/problems/find-the-duplicate-number/
 */

/**
 * Solution 1: T=O(N), S=O(N)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return nums[i];
    else map[nums[i]] = true;
  }
};

/**
 * Solution 2: Cycle identification algo, example: Floyd's algo.
 */
