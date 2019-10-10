/*
 * @Descripttion: 快乐数
 * @Author: 辛顺宁
 * @Date: 2019-10-10 16:17:00
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-10 16:21:32
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// 解题思路 会出现4 -> 20循环 只要出现重复数字 说明就不会变成快乐数 使用set。has 可以判断
var isHappy = function (n) {
  let map = new Set(), m = n
  n = n + ''
  while (m != 1) {
    sum = 0
    for (let i = 0; i < n.length; i++) {
      m += n[i] * n[i]
    }
    n = m + ''
    if (map.has(m)) return false
    map.add(m)
  }
  return true
};