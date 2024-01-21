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

/**
 * Solution 3: Two pointer comparison O(n), since array is already sorted in non-decreasing order.
 */

var removeDuplicates = function (nums) {
  let i = 1,
    j = 1,
    count = 1;

  while (i < nums.length) {
    if (nums[i] == nums[i - 1]) count++;
    else count = 1;

    if (count === 1) nums[j++] = nums[i];

    i++;
  }

  return j;
};
