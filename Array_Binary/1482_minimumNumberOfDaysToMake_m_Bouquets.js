/**
 * Problem: 1482 https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 */

/**
 * Solution: T=O(n log days)
 */

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var minDays = function (bloomDay, m, k) {
  var possible = function (day) {
    let count = 0;
    let bouquets = 0;

    for (let i of bloomDay) {
      if (i <= day) count++;
      else (bouquets += Math.floor(count / k)), (count = 0);
    }

    bouquets += Math.floor(count / k);
    return bouquets >= m;
  };

  var bs = function (l, r) {
    if (l > r) return l;
    const day = l + Math.floor((r - l) / 2);

    if (possible(day)) return bs(l, day - 1);
    else return bs(day + 1, r);
  };

  let minDay = Infinity,
    maxDay = -Infinity;

  for (let i of bloomDay) {
    minDay = Math.min(minDay, i);
    maxDay = Math.max(maxDay, i);
  }

  return m * k > bloomDay.length ? -1 : bs(minDay, maxDay);
};
