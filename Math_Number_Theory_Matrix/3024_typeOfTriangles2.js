/**
 * Biweekly Contest 123
 * Problem: 3024 https://leetcode.com/contest/biweekly-contest-123/problems/type-of-triangle-ii/
 */

/**
 * Solution: T=O(NLogN)
 * 1. After sort if num[0] + num[1] <= num[2], triangle can not be formed as sum of any two sides has to be greater than third side.
 * 2. If all sides are equal, "Equilateral",
 * 3. If any two sides are equal, "Isosceles"
 * 4. Else "Scalene"
 */

/**
 * @param {number[]} nums
 * @return {string}
 */

var triangleType = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums[0] + nums[1] <= nums[2]) return "none";
  else if (nums[0] === nums[1] && nums[1] === nums[2]) return "equilateral";
  else if (nums[0] === nums[1] || nums[1] === nums[2]) return "isosceles";
  else return "scalene";
};
