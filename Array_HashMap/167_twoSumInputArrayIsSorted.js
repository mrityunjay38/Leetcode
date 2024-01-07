/**
 * Problem 167 https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * Solution: It is similar to 3Sum problem where unique triplets is expected, but here just [i , j] O(n).
 */

var twoSum = function (nums, target) {
  let i = 0,
    j = nums.length - 1;
  let ans = [];

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      ans = [i + 1, j + 1];
      i++;
      j--;
      while (i < j && nums[i] === nums[i - 1]) i++;
      while (i < j && nums[j] === nums[j + 1]) j--;
    }
  }

  return ans;
};
