/**
 * Problem: 80 https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/**
 * Solution: T=O(N), using two pointer approach since array is already sorted.
 */

var removeDuplicates = function (nums) {
  let i = 1,
    j = 1,
    count = 1;

  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) count++;
    else count = 1;

    if (count === 2) nums[j++] = nums[i];

    i++;
  }

  return j;
};
