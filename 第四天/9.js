/*
 * @Descripttion: 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 不将整数转为字符串
 * @Author: 辛顺宁
 * @Date: 2019-09-27 14:34:44
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 14:40:33
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let e = x, s = 0
  while (e != 0) {
    s = s * 10 + e % 10
    e = e / 10
  }
  return s == x
};