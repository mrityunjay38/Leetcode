/**
 * Problem: 350 https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * Solution 1: Similar to merge sort
 * 1. Sort both arrays
 * 2. Use two pointers to find two same element
 * 2.1 If pointer nums1[i] < nums2[j], i++
 * 2.2 If pointer nums2[j] < nums1[i], j++
 * 2.3 nums1[i] === nums2[j], add as intersection and move both pointers since duplicates are allowed
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
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
    }
  }

  return res;
};

/**
 * Solution 2: For example, if more than 2 arrays needs to be merged then hashmap approach would be better
 */
