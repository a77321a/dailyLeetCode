/*
 * @Descripttion: 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 15:43:11
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 15:56:07
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = parseInt(Number(a), 2)
  b = parseInt(Number(b), 2)
  return (a + b).toString(2)
};