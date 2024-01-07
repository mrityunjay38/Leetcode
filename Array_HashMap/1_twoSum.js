/**
 * Problem: 01 https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Solution 1: O(n^2) Brute Force
 */

const twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    const remainderIndex = findRemainder(
      nums.slice(i + 1, nums.length),
      target - nums[i]
    );
    if (remainderIndex > -1) {
      ans = [i, remainderIndex + i + 1];
      break;
    }
  }
  return ans;
};

const findRemainder = (intArray, remainder) => {
  const index = intArray.indexOf(remainder);
  return index;
};

/**
 * Solution 2: O(n) Optimal using hashmap
 */

const twoSum = function (nums, target) {
  const map = new Map();
  let i = 0;

  while (i < nums.length) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
    i++;
  }
};
