/*
 * @Descripttion: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @Author: 辛顺宁
 * @Date: 2019-09-25 18:19:33
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-25 18:31:00
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) return false
  let l = [], r = []
  s = s.split('')
  s.forEach(i => {
    if (i == '(' || i == '[' || i == '{') {
      l.push(i)
    } else {
      r.push(r)
    }
  })
  r = r.reverse()
  for (let i = 0; i < l.length; i++) {

  }
};