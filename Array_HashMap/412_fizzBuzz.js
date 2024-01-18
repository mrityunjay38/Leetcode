/**
 * Problem: 412 https://leetcode.com/problems/fizz-buzz/
 */

/**
 * Solution: T=O(N)
 */

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";

    if (i % 5 === 0) str += "Buzz";

    if (i % 3 !== 0 && i % 5 !== 0) str = i + "";

    arr.push(str);
  }

  return arr;
};
