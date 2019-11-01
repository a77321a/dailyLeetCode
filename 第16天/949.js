/*
 * @Descripttion: LeetCode 949题 
 * @Author: 辛顺宁
 * @Date: 2019-11-01 14:56:10
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-01 15:47:18
 */
/**
 * @param {number[]} A
 * @return {string}
 */
// 解题思路：最大时间 ab:cd  a只能是 0 1 2 ,c:0-5,d:0-9 
// b:特殊 在a是2的时候只能是0 1 2 3 其余是0-9
// 所以找到最大的数字给b
// 第二大超过5的给d、不超过给c
// 穷举
// 2、生成所有数字，然后对比
var largestTimeFromDigits = function (A) {
  let arr = [], a = '', b = '', c = '', d = ''
  A = A.sort((a, b) => b - a)
  while (A.length) {
    for (let i in A) {
      if (A[i] == 2) {
        a = A[i]
        A.splice(i, 1)
      }
    }
  }
};
largestTimeFromDigits([1, 2, 3, 4])