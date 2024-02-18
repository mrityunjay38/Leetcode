/**
 * Problem: 1539 https://leetcode.com/problems/kth-missing-positive-number/
 */

/**
 * Solution: T=O(log n)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
  const bs = (l, r) => {
    if (l > r) return l + k;
    const m = l + Math.floor((r - l) / 2);
    if (arr[m] - m - 1 < k) return bs(m + 1, r);
    else return bs(l, m - 1);
  };

  return bs(0, arr.length - 1);
};
