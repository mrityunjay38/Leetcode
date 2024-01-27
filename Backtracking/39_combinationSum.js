/**
 * Problem: 39 https://leetcode.com/problems/combination-sum/
 */

/**
 * Solution: T=O(N * 2^N)
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  return pickOrNot(0, candidates, target);
};

var pickOrNot = (index, candidates, target, current = [], ans = []) => {
  if (index === candidates.length) {
    if (target === 0) ans.push([...current]);
    return;
  }

  if (candidates[index] <= target) {
    current.push(candidates[index]);
    pickOrNot(index, candidates, target - candidates[index], current, ans);
    current.pop();
  }
  pickOrNot(index + 1, candidates, target, current, ans);

  return ans;
};
