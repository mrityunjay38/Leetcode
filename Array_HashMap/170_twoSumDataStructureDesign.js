/**
 * Problem:  170 https://leetcode.com/problems/two-sum-iii-data-structure-design/
 */

/**
 * Solution: Simple two sum implementation as a JavaScript class/prototype using hashmap / array in O(n).
 */

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var TwoSum = function () {
  this.array = [];
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.array.push(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (target) {
  const map = new Map();
  let i = 0;

  while (i < this.array.length) {
    if (map.has(target - this.array[i])) {
      return true;
    } else {
      map.set(this.array[i], i);
    }
    i++;
  }
  return false;
};
