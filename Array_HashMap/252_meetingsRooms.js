/**
 * Problem: 252 https://leetcode.com/problems/meeting-rooms/
 */

/**
 * Solution: T=O(nLog(N)), simple overlap check after sorting.
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

var canAttendMeetings = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
