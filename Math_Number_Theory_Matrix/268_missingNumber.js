/**
 * Problem: 268 https://leetcode.com/problems/missing-number/
 */

/**
 * Solution: T=O(N)
 * 1. Sum of N numbers =  n(n+1)/2 -  sumOfArray = missing number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let missing = (nums.length * (nums.length + 1)) / 2; // sum of N numbers

  for (let i = 0; i < nums.length; i++) {
    missing -= nums[i];
  }

  return missing;
};
