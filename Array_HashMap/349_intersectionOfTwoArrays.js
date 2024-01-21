/**
 * Problem: 349 https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * Solution 1: Similar to merge sort
 * 1. Sort both arrays
 * 2. Use two pointers to find two same element
 * 2.1 If pointer nums1[i] < nums2[j], i++
 * 2.2 If pointer nums2[j] < nums1[i], j++
 * 2.3 nums1[i] === nums2[j], add as intersection and move both pointers
 * 3. Move pointers till no more duplicates for both pointers
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    res = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) i++;
    else if (nums2[j] < nums1[i]) j++;
    else {
      res.push(nums1[i]);
      i++;
      j++;
      while (i < nums1.length && nums1[i] === nums1[i - 1]) i++;
      while (j < nums2.length && nums2[j] === nums2[j - 1]) j++;
    }
  }
  return res;
};
