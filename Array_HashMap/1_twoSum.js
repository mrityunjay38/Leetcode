/**
 * Problem: 01 https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Solution:
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
