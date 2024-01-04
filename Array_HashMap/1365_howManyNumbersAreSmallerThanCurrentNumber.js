/**
 * Problem: 1365 https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/**
 * Solution:
 * 1. Sorted array O(nLogn)
 * 2. Generate a hashmap [num:index] as per sorted array O(n) to generate O(1) access
 * 3. Update original array with the index of sorted array elements
 *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const map = new Map();

  for (let i = 0; i < sortedNums.length; i++)
    if (!map.has(sortedNums[i])) map.set(sortedNums[i], i);

  for (let i = 0; i < nums.length; i++) nums[i] = map.get(nums[i]);

  return nums;
};
