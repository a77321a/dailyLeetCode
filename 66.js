/*
 * @Descripttion: 
 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 15:22:52
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 15:41:39
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[0] == 0) return [1]
  // digits = Number(digits.join(''))
  // return (digits + 1)..toString().split('')
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  return [].concat([1], digits)
};