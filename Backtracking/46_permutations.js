/**
 * Problem: 46 https://leetcode.com/problems/permutations/
 */

/**
 * Solution: T=O(N * N!)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  return backtrack(0, nums);
};

var backtrack = function (index, nums, ans = []) {
  if (index == nums.length) {
    ans.push([...nums]);
    return;
  }

  for (let i = index; i < nums.length; i++) {
    [nums[i], nums[index]] = [nums[index], nums[i]];
    backtrack(index + 1, nums, ans);
    [nums[i], nums[index]] = [nums[index], nums[i]];
  }

  return ans;
};
