/**
 * Problem: 231 https://leetcode.com/problems/power-of-two/
 */

/**
 * Solution: T=O(log n)
 * 1. Power of 2^x will only lie between 0 to n/2
 * 2. We can run a binary search between a range of [0,n/2]
 * 3. If pow(2,x) equals to n, hence the answer return true
 * 4. Else if pow(2,x) less than n, answer lies on right side of the current pivot
 * 5. Else, to the left side of the current pivot
 * 6. Base case, if x goes outside range and pow(2,x) will always be positive, hence n < 1 = false
 */

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  const bs = (l, r) => {
    if (l > r) return false;
    const x = l + Math.floor((r - l) / 2);
    if (2 ** x == n) return true;
    else if (2 ** x < n) return bs(x + 1, r);
    else return bs(l, x - 1);
  };

  return n < 1 ? false : bs(0, n / 2);
};
