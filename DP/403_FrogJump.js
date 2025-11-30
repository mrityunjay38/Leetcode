/**
 * Problem: 403 https://leetcode.com/problems/frog-jump/
 */

/**
 * Solution: T=O(n^2) with memoization, else recursive would achieve O(3^n) exponential.
 * For DP, maintaining Object [key, value] where key could be maintained for 1D, 2D, 3D indexing
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */

var canCross = function (stones) {
  // 2D array
  const dp = {};

  // stone hash map [stone, index]
  const stoneMap = stones.reduce((map, stone, index) => {
    map[stone] = index;
    return map;
  }, {});

  function cross(currentIndexOfStone, prevJump) {
    if (currentIndexOfStone === stones.length - 1) {
      return true;
    }

    //memoized
    const dpIdx = `${currentIndexOfStone}${prevJump}`;
    if (dpIdx in dp) {
      return dp[dpIdx];
    }

    let result = false;

    for (let nextJump = prevJump - 1; nextJump <= prevJump + 1; nextJump++) {
      if (nextJump > 0) {
        const nextStone = stones[currentIndexOfStone] + nextJump;
        if (nextStone in stoneMap) {
          result = result || cross(stoneMap[nextStone], nextJump);
        }
      }
    }
    //memoize result
    return (dp[`${currentIndexOfStone}${prevJump}`] = result);
  }

  // minimum base case
  if (stones[1] !== 1) return false;
  return cross(0, 0);
};
