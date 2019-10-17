/*
 * @Descripttion: 爬楼梯
 * @Author: 辛顺宁
 * @Date: 2019-10-17 17:33:23
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-17 17:33:33
 */
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function (n) {
  if (n < 2) return n
  let p1 = 1, p2 = 2
  for (let i = 2; i < n; i++) {
    let tmp = p1 + p2
    p1 = p2
    p2 = tmp
  }
  return p2
};