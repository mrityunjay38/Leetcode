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

const twoSum = (nums, target) => {
  const ans = [],
    hash = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in hash) {
      ans.push(hash[diff]);
      ans.push(i);
    }
    hash[nums[i]] = i;
  }
  return ans;
};
