/*
 * @Descripttion:
 * @Author:
 * @Date: 2020-06-19 09:44:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-19 09:44:57
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
  // 双指针解法
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] == s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true

};