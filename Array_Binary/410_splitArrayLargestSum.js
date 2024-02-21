/**
 * Problem: 410 https://leetcode.com/problems/split-array-largest-sum/
 */

/**
 * Solution: T=O(N) + O(N*log S) ~ O(N log S), where N is the length of array, S is sum of integers
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var splitArray = function (nums, k) {
  const allot = (num) => {
    let kk = 1,
      sum = 0;
    for (let x of nums) {
      if (sum + x <= num) {
        sum += x;
      } else {
        kk++;
        sum = x;
      }
    }
    return kk;
  };

  const bs = (l, r) => {
    if (l > r) return l;
    const num = l + Math.floor((r - l) / 2);
    if (allot(num) <= k) {
      return bs(l, num - 1);
    } else {
      return bs(num + 1, r);
    }
  };

  let totalSum = 0;
  let maxNum = -Infinity;
  for (let x of nums) {
    maxNum = Math.max(maxNum, x);
    totalSum += x;
  }

  return bs(maxNum, totalSum);
};
