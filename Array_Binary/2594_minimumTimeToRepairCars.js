/**
 * Problem: 2594 https://leetcode.com/problems/minimum-time-to-repair-cars/https://leetcode.com/problems/minimum-time-to-repair-cars/
 */

/**
 * Solution: T=O(n log n + log(maxRank) * n) ~ O(n log m)
 */

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */

var repairCars = function (ranks, cars) {
  ranks.sort((a, b) => a - b);
  let l = 1,
    r = ranks[0] * cars ** 2;

  while (l <= r) {
    const t = l + Math.floor((r - l) / 2);
    let carRepairable = 0;

    for (let rank of ranks)
      carRepairable += Math.floor(Math.sqrt(Math.floor(t / rank)));

    if (carRepairable >= cars) r = t - 1;
    else l = t + 1;
  }

  return l;
};
