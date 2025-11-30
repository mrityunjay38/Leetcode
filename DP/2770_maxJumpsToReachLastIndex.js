/**
 * Problem: 2770 https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/description/
 */

/**
 * Solution: O(n^2) using 1D memoized DFS
 * Approach:
 * 1. Starting from index 0, recursively compute the maximum number of valid jumps needed to reach the last index.
 * 2. A jump from i to j is valid if |nums[j] - nums[i]| <= target.
 * 3. For every valid next position j, compute 1 + (max jumps from j).
 * 4. Take the maximum of all these values — store it in dp[i] to avoid re-computation.
 * 5. If dp[0] is negative (meaning no valid path reaches the end), return -1.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const dp = {};

  function jump(currPos) {
    if (currPos === nums.length - 1) return 0;

    if (currPos in dp) return dp[currPos];

    let result = -Infinity;
    for (let nextPos = currPos + 1; nextPos < nums.length; nextPos++) {
      if (Math.abs(nums[nextPos] - nums[currPos]) <= target) {
        const computeJump = jump(nextPos);
        result = Math.max(result, 1 + computeJump);
      }
    }

    return (dp[currPos] = result);
  }

  const maxJumps = jump(0);
  return maxJumps < 0 ? -1 : maxJumps;
};
