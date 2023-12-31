/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * Solution:
 */

const maxProfit = function (prices) {
  let maxDiff = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxDiff = Math.max(maxDiff, prices[i] - minPrice);
    }
  }

  return maxDiff;
};
