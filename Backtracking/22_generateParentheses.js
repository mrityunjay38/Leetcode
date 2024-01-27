/**
 * Problem: 22 https://leetcode.com/problems/generate-parentheses/
 */

/**
 * Solution: DFS + Backtracking
 * 1. Keep including and excluding "(" till start is less than n;
 * 2. Keep including and excluding ")" till end is less than start;
 */

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  return generate(0, 0, n);
};

var generate = function (start, end, size, current = [], ans = []) {
  if (current.length == 2 * size) {
    ans.push(current.join(""));
    return;
  }

  if (start < size) {
    current.push("(");
    console.log("b: ", current);
    generate(start + 1, end, size, current, ans);
    current.pop();
  }

  if (start > end) {
    current.push(")");
    console.log("a: ", current);
    generate(start, end + 1, size, current, ans);
    current.pop();
  }

  return ans;
};
