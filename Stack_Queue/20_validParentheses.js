/**
 * Problem: 20 https://leetcode.com/problems/valid-parentheses/
 */

/**
 * Solution: Stack based implementation to keep a track of open and closing brackets.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
      if (stack[stack.length - 1] == map[s[i]]) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length ? false : true;
};
