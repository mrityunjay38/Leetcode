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

/**
 * Solution 2: Two pointer comparison O(n), since array is already sorted in non-decreasing order.
 */

var removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
