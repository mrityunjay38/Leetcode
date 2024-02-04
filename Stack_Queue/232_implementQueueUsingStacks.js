/**
 * Problem: 232 https://leetcode.com/problems/implement-queue-using-stacks/
 */

/**
 * Solution 1: Using single array
 */

var MyQueue = function () {
  this.arr = [];
  return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.arr.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.arr[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !!!this.arr.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * Solution 2: Using 2 stack/array
 */

var MyQueue = function () {
  this.stack_1 = [];
  this.stack_2 = [];
  return this;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack_1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stack_2.length)
    while (this.stack_1.length) this.stack_2.push(this.stack_1.pop());
  return this.stack_2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.stack_2.length)
    while (this.stack_1.length) this.stack_2.push(this.stack_1.pop());
  return this.stack_2[this.stack_2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return Math.max(this.stack_1.length, this.stack_2.length) == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
