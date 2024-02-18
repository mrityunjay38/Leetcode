/**
 * Problem: 1011 https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */

/**
 * Solution: T=O(n log n)
 */

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var shipWithinDays = function (weights, days) {
  const ship = (capacity) => {
    let dayCount = 1;
    let loaded = 0;
    for (let w of weights) {
      if (loaded + w > capacity) {
        dayCount++;
        loaded = w;
      } else loaded += w;
    }
    return dayCount;
  };

  const bs = (l, r) => {
    if (l > r) return l;
    const w = l + Math.floor((r - l) / 2);
    if (ship(w) <= days) return bs(l, w - 1);
    else return bs(w + 1, r);
  };

  let totalWeight = 0;
  let maxWeight = -Infinity;
  for (let w of weights) {
    totalWeight += w;
    maxWeight = Math.max(maxWeight, w);
  }

  return bs(maxWeight, totalWeight);
};
