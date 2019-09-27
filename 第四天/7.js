/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-09-27 14:21:41
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 14:35:11
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x = 0) return 0
  let boolean = true
  x = (Math.abs(x)) + ''
  if (x < 0) {
    boolean = false
  }
  let arr = x.split('')
  let whr = []
  arr.forEach(i => {
    whr.unshift(i)
  })
  let res = boolean ? Number(whr.join('')) : Number('-' + whr.join(''))
  if (res > (Math.pow(2, 31) - 1) || res < Number('-' + Math.pow(2, 31))) {
    return 0
  }
  return res
};