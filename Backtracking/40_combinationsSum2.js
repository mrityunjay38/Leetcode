/**
 * Problem: 40 https://leetcode.com/problems/combination-sum-ii/
 */

/**
 * Solution: https://leetcode.com/problems/combination-sum-ii/solutions/4636055/javascript-simple-intuition/
 * Concepts used:
 * 1. Sorting
 * 2. Hashmap
 * 3. Pruning
 * 4. Backtrack / Recursion
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  return backtrack(
    0,
    candidates.sort((a, b) => a - b),
    target
  );
};

var backtrack = function (
  index,
  candidates,
  target,
  hmap = new Map(),
  combo = [],
  ans = []
) {
  if (index == candidates.length) {
    if (target == 0) {
      const key = combo.toString();
      if (!hmap.has(key)) ans.push([...combo]);
      hmap.set(key, true);
    }
    return;
  }

  if (candidates[index] <= target) {
    combo.push(candidates[index]);
    backtrack(
      index + 1,
      candidates,
      target - candidates[index],
      hmap,
      combo,
      ans
    );
    combo.pop();
  }

  while (
    index < candidates.length - 1 &&
    candidates[index] === candidates[index + 1]
  ) {
    index++;
  }

  backtrack(index + 1, candidates, target, hmap, combo, ans);

  return ans;
};
