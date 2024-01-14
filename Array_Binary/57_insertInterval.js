/**
 * Problem: 57 https://leetcode.com/problems/insert-interval
 */

/**
 * Solution: 1
 * 1. Linear search in O(n) to insert new interval first into sorted array.
 * 2. Then O(n) to compare and merge intervals, similar to #56 Merge Intervals
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  let isInserted = false;
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] < intervals[i][0]) {
      intervals.splice(i, 0, newInterval);
      isInserted = true;
      break;
    }
  }

  if (!isInserted) {
    intervals.push(newInterval);
  }

  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
    if (!merged.length) {
      merged.push(intervals[i]);
    } else if (intervals[i][0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      );
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
};

/**
 * Solution: 2
 * 1. Binary search in O(log n) to find but O(n) to insert new interval first into sorted array.
 * 2. Then O(n) to compare and merge intervals, similar to #56 Merge Intervals
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  const index = binarySearch(intervals, newInterval, 0, intervals.length - 1);
  intervals.splice(index, 0, newInterval);

  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
    if (!merged.length) {
      merged.push(intervals[i]);
    } else if (intervals[i][0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      );
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
};

const binarySearch = (intervals, newInterval, start, end) => {
  if (start > end) return start;

  const mid = start + Math.floor((end - start) / 2);

  if (newInterval[0] === intervals[mid][0]) {
    return mid + 1;
  } else if (newInterval[0] > intervals[mid][0]) {
    return binarySearch(intervals, newInterval, mid + 1, end);
  } else {
    return binarySearch(intervals, newInterval, start, mid - 1);
  }
};
