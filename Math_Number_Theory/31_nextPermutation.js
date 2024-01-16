/**
 * Problem: 31 https://leetcode.com/problems/next-permutation
 */

/**
 * Solution: Example: [2,1,5,4,3,0] --> [2,3,0,1,4,5]
 * 1. Find fixed digits (longest fixed sequence) by moving from right to left where nums[i] < nums[i+1], i as pivot point;
 * 2. If there's no sequence, means it is last of the possible permutation in series.
 * 2.1 Simply return reversed
 * 3. Replaced pivot with lowest but greater than nums[pivot];
 * 3.1 Reverse/sort everything from [pivot+1, nums.length-1];
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
  let fixedIndex = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      fixedIndex = i;
      break;
    }
  }

  if (fixedIndex === -1) return reverse(nums, 0, nums.length - 1);

  for (let i = nums.length - 1; i > fixedIndex; i--) {
    if (nums[i] > nums[fixedIndex]) {
      [nums[i], nums[fixedIndex]] = [nums[fixedIndex], nums[i]];
      break;
    }
  }

  return reverse(nums, fixedIndex + 1, nums.length - 1);
};

var reverse = (nums, start, end) => {
  if (start > end) return nums;
  [nums[start], nums[end]] = [nums[end], nums[start]];
  return reverse(nums, start + 1, end - 1);
};
