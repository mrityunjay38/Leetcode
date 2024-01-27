/**
 * Problem: 77 https://leetcode.com/problems/combinations/
 */

/**
 * Solution:
 * 1. Include current number, goto next number.
 * 2. If current set has k elements, push as an answer.
 * 3. Exclude current number, goto next number.
 * 4. Backtrack only till current number is less than or equal to number n.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  return backtrack(1, n, k);
};

var backtrack = function (start, n, k, current = [], ans = []) {
  if (current.length == k) {
    ans.push([...current]);
    return;
  }

  if (start <= n) {
    current.push(start);
    backtrack(start + 1, n, k, current, ans);
    current.pop();
    backtrack(start + 1, n, k, current, ans);
  }

  return ans;
};
