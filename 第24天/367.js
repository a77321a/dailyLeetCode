/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-18 10:30:20
 * @LastEditors: 
 * @LastEditTime: 2019-11-18 10:33:58
 */
/**
 * @param {number} num
 * @return {boolean}
 */
// 不使用内置函数 求是否是完全平方数
// 从1-num/2中寻找一个数的平方等不等于这个数就可以了
var isPerfectSquare = function (num) {
  if (num == 1) return true
  for (let i = 0; i <= parseInt(num / 2); i++) {
    if (i * i == num) {
      return true
    }
  }
  return false
};
isPerfectSquare(9)