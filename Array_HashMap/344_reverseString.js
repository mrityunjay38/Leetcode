/**
 * Problem: 344 https://leetcode.com/problems/reverse-string
 */

/**
 * Solution 1: Recursive solution ~ but does its callstack comes under O(1) memory space?
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  return reverseStr(s, 0, s.length - 1);
};

var reverseStr = function (s, start, end) {
  if (start >= end) return;

  [s[start], s[end]] = [s[end], s[start]];
  reverseStr(s, start + 1, end - 1);

  return s;
};

/**
 * Solution 2: While loop solution ~ O(1) memory space
 */

var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};
