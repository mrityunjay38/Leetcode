/**
 * Problem: 541 https://leetcode.com/problems/reverse-string-ii
 */

/**
 * Solution: T=O(N/2) ~ O(N)
 * Reverse first k characters for every i + (k*2) window.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
  s = s.split("");

  let i = 0;
  while (i < s.length) {
    reverse(s, i, Math.min(i + k, s.length) - 1);
    i += k * 2;
  }

  return s.join("");
};

var reverse = (s, start, end) => {
  if (start > end) return;
  [s[start], s[end]] = [s[end], s[start]];
  reverse(s, start + 1, end - 1);
  return s;
};
