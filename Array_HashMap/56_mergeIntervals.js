/**
 * Problem 56 https://leetcode.com/problems/merge-intervals/
 */

/**
 * Solution 1: T=O(nLogn) Simply sorted by start time and previous end time comparison to store or extend.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const overlaps = [];

  for (let i = 0; i < intervals.length; i++) {
    if (!overlaps.length) {
      overlaps.push(intervals[i]);
    } else if (intervals[i][0] <= overlaps[overlaps.length - 1][1]) {
      overlaps[overlaps.length - 1][1] = Math.max(
        overlaps[overlaps.length - 1][1],
        intervals[i][1]
      );
    } else {
      overlaps.push(intervals[i]);
    }
  }
  return overlaps;
};
