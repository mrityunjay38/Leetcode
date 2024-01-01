/**
 * Problem: 26 https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/*

/**
 * Solution: Used Set to store ordered integers 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  const uniqueNums = [...new Set(nums)];
  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }
  return uniqueNums.length;
};
