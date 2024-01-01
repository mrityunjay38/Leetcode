/**
 * Problem: 1207 https://leetcode.com/problems/unique-number-of-occurrences/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

/**
 * Solution:
 */

var uniqueOccurrences = function (arr) {
  const freqMap = {};
  const reversedFreqMap = {};
  let ans = true;

  for (let i = 0; i < arr.length; i++) {
    if (freqMap[arr[i]]) {
      freqMap[arr[i]] += 1;
    } else {
      freqMap[arr[i]] = 1;
    }
  }

  let arr2 = Object.values(freqMap);

  for (let i = 0; i < arr2.length; i++) {
    if (reversedFreqMap[arr2[i]]) {
      ans = false;
    } else {
      reversedFreqMap[arr2[i]] = "truthy";
    }
  }

  return ans;
};
