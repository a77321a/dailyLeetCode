/*
 * @Descripttion: 263题
 * @Author: 辛顺宁
 * @Date: 2019-11-01 18:08:06
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-01 18:27:49
 */
/**
 * @param {number} num
 * @return {boolean}
 */
// 解题思路 
// 如果对2整除 ，就把数字里的2全部除尽
var isUgly = function (num) {
  while (num % 2 == 0 && num != 0) {
    num = num / 2
  }
  while (num % 3 == 0 && num != 0) {
    num = num / 3
  }
  while (num % 5 == 0 && num != 0) {
    num = num / 5
  }
  console.log(num)
  if (num < 1) {
    return false
  }
  return num == 1
};
isUgly(6)