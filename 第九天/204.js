/*
 * @Descripttion: 统计所有小于非负整数 n 的质数的数量。
 * @Author: 辛顺宁
 * @Date: 2019-10-11 09:36:53
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-11 09:52:19
 */
/**
 * @param {number} n
 * @return {number}
 */
//解题思路：质数只能被1和本身整除，1不是质数；
//设置变量flag，j,j最大为i的平方根，当i能整除j则break，否则为质数，count++
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};