/*
 * @Descripttion: 
 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

 * @Author: a77321a
 * @Date: 2020-10-19 15:39:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-21 15:41:17
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length != B.length) return false
  let bIndex = 0
  let cArr = [], arr = A.split('')
  while (bIndex < B.length) {
    let curIndex = -1
    if (B[bIndex] != A[bIndex])

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] == B[bIndex]) {
    //     curIndex = i
    //   }
    // }

  }
};