/**
 * Problem: 15 https://leetcode.com/problems/3sum/
 */

/**
 * Solution 1: Three pointers [i, j, k] to find [sum = 0 ~ triplet]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i - 1] === nums[i]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return triplets;
};
