/**
 * Problem: 739 https://leetcode.com/problems/daily-temperatures/
 */

/**
 * Solution: T=O(N)
 * Classic Decreasing monotonic stack - Next Greater Element - Left-To-Right
 * Distance between current temperature and next greater temperature
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  const stack = [];
  const ans = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      ans[stack[stack.length - 1]] = i - stack.pop();
    }
    stack.push(i);
  }

  return ans;
};
