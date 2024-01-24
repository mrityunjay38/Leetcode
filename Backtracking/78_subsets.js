/**
 * Problem: 78 https://leetcode.com/problems/subsets/
 */

/**
 * Solution: T=O(N * 2^N), since each item can have two options and so on at every step during its exection.
 * 1. Simple backtracking approach to include or exclude an item.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  return genSubsets(nums, 0);
};

var genSubsets = function (nums, index, subset = [], all = []) {
  if (index > nums.length - 1) {
    all.push([...subset]);
    return;
  }

  subset.push(nums[index]);
  genSubsets(nums, index + 1, subset, all);
  subset.pop();
  genSubsets(nums, index + 1, subset, all);

  return all;
};
