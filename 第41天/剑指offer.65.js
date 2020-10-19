/*
 * @Descripttion: 不用加减乘除算加法
 * @Author:
 * @Date: 2020-06-23 11:19:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-23 15:44:12
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (a !== 0) {
    let temp = (a ^ b);
    a = (a & b) << 1;
    b = temp;
  }
  return b
};