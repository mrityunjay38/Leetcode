/**
 * Problem: 402 https://leetcode.com/problems/remove-k-digits/
 */

/**
 * Solution: T=O(N)
 * 1. Increasing monotonic stack - Left-to-Right - Next Smaller Integer.
 * 2. Remove from end to make integer value smaller, if k > 0
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function (num, k) {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && num[i] < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    if (!stack.length && num[i] == "0") continue;
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.length ? stack.join("") : "0";
};
