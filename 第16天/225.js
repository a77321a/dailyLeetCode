/*
 * @Descripttion: LeetCode 225题
 * @Author: 辛顺宁
 * @Date: 2019-11-01 17:39:53
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-01 18:02:47
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  return []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this[this.length] = x
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let su = this[this.length - 1]
  this.length = this.length - 1
  return su
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this[this.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.length == 0 ? true : false
};