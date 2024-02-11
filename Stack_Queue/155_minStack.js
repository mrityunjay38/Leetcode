/**
 * Problem: 155 https://leetcode.com/problems/min-stack/
 */

/**
 * Solution 1: Stack push / pop / peek on stack, T=O(N) for every peek
 * 1. Maintain variable min at every push.
 * 2. Find next min at every pop
 */

var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min = Infinity;
  for (let i = 0; i < this.stack.length; i++) {
    this.min = Math.min(this.min, this.stack[i]);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Solution 2: Stack push / pop / peek, T=O(1) for any operation
 * 1. Store min for every level of push.
 * 2. Any pop will still allow to peek last min value till current top of the stack.
 */

var MinStack = function () {
  this.stack = [];
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.stack.length) {
    this.stack.push([val, val]);
    return;
  }

  this.min = this.stack.at(-1)[1];
  this.stack.push([val, Math.min(this.min, val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.at(-1)[1];
};
