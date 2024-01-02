/**
 * Problem: 169
 */

/**
 * Solution: Used Map to store -1 to 1 integers, T=O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();
  let maxEle = -Infinity;
  const halfLength = parseInt(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if (map.get(nums[i]) > halfLength) maxEle = nums[i];
    } else map.set(nums[i], 1);
  }

  return maxEle;
};
