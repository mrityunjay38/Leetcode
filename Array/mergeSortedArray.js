/**
 * Problem: https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * Solution:
 */

var merge = function (nums1, x, nums2, y) {
  let idx = 0;
  let idy = 0;
  const arr = [];

  while (idx < x && idy < y) {
    if (nums1[idx] <= nums2[idy]) {
      arr.push(nums1[idx]);
      ++idx;
    } else {
      arr.push(nums2[idy]);
      ++idy;
    }
  }

  while (idx < x) {
    arr.push(nums1[idx]);
    ++idx;
  }

  while (idy < y) {
    arr.push(nums2[idy]);
    ++idy;
  }

  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i];
  }
};
