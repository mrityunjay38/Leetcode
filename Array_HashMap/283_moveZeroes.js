/**
 * Problem: 283 https://leetcode.com/problems/move-zeroes/
 */

/**
 * Solution: T=O(n) By swapping non-zero to front with first encountered zero of current cycle;
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums, currentIndex = 0) {
  if (currentIndex === nums.length - 1) return;

  if (!nums[currentIndex]) {
    for (let i = currentIndex + 1; i < nums.length; i++) {
      if (nums[i]) {
        [nums[currentIndex], nums[i]] = [nums[i], nums[currentIndex]];
        break;
      }
    }
  }

  moveZeroes(nums, ++currentIndex);
};
