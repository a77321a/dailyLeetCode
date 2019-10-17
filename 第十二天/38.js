/*
 * @Descripttion: 报数
 * @Author: 辛顺宁
 * @Date: 2019-10-17 16:21:11
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-17 17:26:38
 */
/**
 * @param {number} n
 * @return {string}
 */
// 对字符串判断
var countAndSay = function (n) {
  let arr = ''
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      arr = '1'
    } else if (i == 1) {
      arr = '11'
    } else {
      let sum = 0,
        tmp = ''
      let num = arr[0]
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] != num) {
          tmp += sum + num
          num = arr[j]
          sum = 1
        } else {
          sum++
        }
      }
      if (sum != 0) {
        tmp += sum + arr[arr.length - 1]
      }
      arr = tmp
      tmp = ''
    }
  }
  console.log(arr)
  return arr
}