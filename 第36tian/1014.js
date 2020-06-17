/*
 * @Descripttion: 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
返回一对观光景点能取得的最高分。
 * @Author:
 * @Date: 2020-06-17 14:04:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-17 14:43:04
 */
/**
 * @param {number[]} A
 * @return {number}
 */
// 硬解
var maxScoreSightseeingPair = function (A) {
  let max = 0
  for (let j = 1; j < A.length; j++) {
    for (let i = 0; i < j; i++) {
      if (j - i > 1000) {
        continue;
      }
      max = A[i] + A[j] + i - j > max ? A[i] + A[j] + i - j : max
    }
  }
  return max
};
var maxScoreSightseeingPair = function (A) {
  // A[i] + A[j] + i - j = A[i] + i + A[j] - j
  // 取 A[i]+i 和 A[j]-j的最大值 并且保证j>i
  let ins = A[0], dec = 0
  for (let i = 1; i < A.length; i++) {
    dec = Math.max(dec, ins + A[i] - i)
    ins = Math.max(ins, A[i] + i)
  }
  return dec
}