/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-06-18 17:21:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 19:40:58
 */
var merge = function (A, m, B, n) {
  let res = []
  let x = 0
  let i = 0, j = 0
  while (x < m + n) {
    if (A[i] == 0) {
      res.push(B[j])
      j++
    }
    else if (A[i] > B[j]) {
      res.push(B[j])
      j++
    } else {
      res.push(A[i])
      i++
    }
    x++
  }
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)