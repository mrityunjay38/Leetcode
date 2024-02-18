/**
 * Problem: 1283 https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
 */

/**
 * Solution: T=O(n log maxThreshold)
 */

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

var smallestDivisor = function (nums, threshold) {
  var bs = function (l, r) {
    if (l > r) return l;
    const divisor = l + Math.floor((r - l) / 2);

    let divisionSum = 0;
    for (let i of nums) {
      divisionSum += Math.ceil(i / divisor);
    }

    if (divisionSum <= threshold) return bs(l, divisor - 1);
    else return bs(divisor + 1, r);
  };

  let max = -Infinity;
  for (let i of nums) max = Math.max(max, i);

  return bs(1, max);
};
