/**
 * Problem: 42 https://leetcode.com/problems/trapping-rain-water/
 */

/**
 * Solution: T=O(n) Two pointer approach + keeping last known max-height for each pointer direction [leftMax, rightMax]
 * Simply subtracting current height with last known max height would give remaining area count, since units or of 1x1 width and height.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0,
    j = height.length - 1,
    lMax = 0,
    rMax = 0,
    ans = 0;

  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] > lMax) lMax = height[i];
      else ans += lMax - height[i];
      i++;
    } else {
      if (height[j] > rMax) rMax = height[j];
      else ans += rMax - height[j];
      j--;
    }
  }
  return ans;
};
