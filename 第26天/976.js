/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-21 15:00:05
 * @LastEditors: 
 * @LastEditTime: 2019-11-21 15:45:45
 */
/**
 * @param {number[]} A
 * @return {number}
 */
// 解题思路 先把A从大到小排列 找到前三个能组成三角形三边的
var largestPerimeter = function (A) {
  A = A.sort(function (a, b) { return b - a })
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] < (A[i + 1] + A[i + 2]) && A[i + 2] > A[i] - A[i + 1]) {
      return A[i] + A[i + 1] + A[i + 2]
    }
  }
  return 0
};