/**
 * Problem: 4 https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * Solution: O(m+n) as arrays are already sorted.
 * If even, (arr[mid-1] + arr[mid]) / 2 = median
 * else odd, arr[mid] = median
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let arr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }

  if (Math.floor(arr.length % 2)) return arr[Math.floor(arr.length / 2)];
  else return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};
