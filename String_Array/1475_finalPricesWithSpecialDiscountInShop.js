/**
 * Problem: 1475 https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 */

/**
 * Solution: Monotonic Increasing Stack
 * 1. Similar to: Next Smaller element
 * 2. Iteration: Left-to-Right
 * 3. Current_price = prices[current] - prices[next_smaller], if prices[j] <= prices[i]
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function (prices) {
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] <= stack[stack.length - 1][1]) {
      prices[stack[stack.length - 1][0]] -= prices[i];
      stack.pop();
    }
    stack.push([i, prices[i]]);
  }
  return prices;
};
