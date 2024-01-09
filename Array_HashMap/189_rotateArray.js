/**
 * Problem: 189 https://leetcode.com/problems/rotate-array/
 */

/**
 *
 * k % n shal give amount of rotations required, even if k > n || k < n
 * 3 % 7 = 3 ~ only 3 rotations
 * 9 % 7 = 2 ~ 1 complete rotation from [0 to 7] and 2 more rotations to complete 9.
 *
 * Solution 1: For Right rotate, T=O(n)
 * 1. Reverse input [0, n]
 * 2. Reverse input [0, k % n]
 * 3. Reverse input [k % n, n]
 */

/**
 * Solution 2: For Left rotate, T=O(n)
 * 1. Reverse input [0, k % n]
 * 2. Reverse input [k % n, n]
 * 3. Reverse input [0, n]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  reverse(nums, 0, nums.length);
  reverse(nums, 0, k % nums.length);
  reverse(nums, k % nums.length, nums.length);
  return nums;
};

const reverse = (arr, start, end) => {
  let i = start,
    j = end - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};
