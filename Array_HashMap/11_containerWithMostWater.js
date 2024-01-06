/**
 * Problem: 11 https://leetcode.com/problems/container-with-most-water/
 */

/**
 * Solution: T=O(n) Two pointer i=0, j=length-1, move towards each other calculating area and maxArea;
 */

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let maxArea = 0;
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    if (height[i] <= height[j]) i++;
    else j--;
  }

  return maxArea;
};
