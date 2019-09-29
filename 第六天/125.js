/*
 * @Descripttion: 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 16:15:06
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 16:34:53
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.split('')
  let arr = []
  s.forEach(i => {
    if (i >= 'a' && i <= 'z') {
      arr.push(i)
    }
    if (i >= 'A' && i <= 'Z') {
      arr.push(i)
    }
    if (i >= '0' && i <= '9') {
      arr.push(i)
    }
  })
  s = arr.join('').toLowerCase()
  console.log(s)
  if (s == s.split('').reverse().join('')) {
    return true
  }
  return false

};
isPalindrome("a.")