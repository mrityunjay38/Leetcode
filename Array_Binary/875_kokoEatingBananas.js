/**
 * Problem: 875 https://leetcode.com/problems/koko-eating-bananas/
 */

/**
 * Solution: T=O(nlogM), n=length of piles, m = max of piles
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  piles.sort((a, b) => a - b);

  var bs = function (l, r) {
    if (l > r) return l;

    const k = l + Math.floor((r - l) / 2);
    let totalTime = 0;

    for (let pile of piles) totalTime += Math.ceil(pile / k);

    if (totalTime <= h) return bs(l, k - 1);
    else return bs(k + 1, r);
  };

  return bs(1, piles.at(-1));
};
