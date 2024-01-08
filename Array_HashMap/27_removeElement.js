/**
 * Problem: 27 https://leetcode.com/problems/remove-element/
 */

/**
 * Solution: T=O(n) Simple two pointer problem. Remember last location of an occurance and replace with non-target.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return j;
};
