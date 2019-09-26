/*
 * @Descripttion: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @Author: 辛顺宁
 * @Date: 2019-09-25 18:19:33
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 09:21:01
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) return false
  let arr = []
  s = s.split('')
  let map = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  s.forEach(i => {
    if (i == '(' || i == '[' || i == '{') {
      arr.push(i)
    } else {
      if (map[i] == arr[arr.length - 1]) {
        arr.pop()
      } else {
        return false
      }
    }
  })
  if (arr.length == 0) {
    return true
  }
  return false
};