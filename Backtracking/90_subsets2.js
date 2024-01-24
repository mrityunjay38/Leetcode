/**
 * Problem: 90 https://leetcode.com/problems/subsets-ii/
 */

/**
 * Solution: T=O(NlogN) + O(N*2^N)
 * 1. Sort to bring every number close to each other
 * 2. Hashmap to check for duplicates
 * 3. Usual backtracking to include or exclude an item
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function (nums) {
  return genSubsets(
    nums.sort((a, b) => a - b),
    0
  );
};

var genSubsets = function (
  nums,
  index,
  subset = [],
  all = [],
  hmap = new Map()
) {
  if (index > nums.length - 1) {
    if (!hmap.has(subset.toString())) all.push([...subset]);
    hmap.set(subset.toString(), true);
    return;
  }

  subset.push(nums[index]);
  genSubsets(nums, index + 1, subset, all, hmap);
  subset.pop();
  genSubsets(nums, index + 1, subset, all, hmap);

  return all;
};
