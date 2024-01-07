/**
 * Problem: 16 https://leetcode.com/problems/3sum-closest/
 */

/**
 * Solution: Same as 3Sum, just calculat difference between sum and target and set nearest value to target as ans;
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let [closestSum, closestDist] = [target, Infinity];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < closestDist)
        [closestSum, closestDist] = [sum, Math.abs(target - sum)];

      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }

  return closestSum;
};
