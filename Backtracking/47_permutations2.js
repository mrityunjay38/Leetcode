/**
 * Problem: 47 https://leetcode.com/problems/permutations-ii/
 */

/**
 * Solution: T=O(N * N!)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  return backtrack(
    0,
    nums.sort((a, b) => a - b)
  );
};

var backtrack = function (index, nums, ans = []) {
  if (index == nums.length) {
    ans.push([...nums]);
    return;
  }

  for (let i = index; i < nums.length; i++) {
    if (i > index && nums[i] == nums[index]) continue;
    [nums[i], nums[index]] = [nums[index], nums[i]];
    backtrack(index + 1, [...nums], ans);
  }

  return ans;
};
