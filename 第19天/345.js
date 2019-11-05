/*
 * @Descripttion: 345题
 * @Author: 
 * @Date: 2019-11-05 17:16:58
 * @LastEditors: 
 * @LastEditTime: 2019-11-05 17:46:52
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 解题思路 双指针 一个从前往后，一个从后往前，
var reverseVowels = function (s) {
  let obArr = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U']
  s = s.split('')
  let i = s.length - 1
  let j = 0
  while (i >= 0 && j < i) {
    if (obArr.includes(s[i])) {
      // 后面的找到了 寻找j指针
      if (obArr.includes(s[j])) {
        // 后面的找到了 寻找j指针
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        console.log(s)
        i--
        j++
      } else {
        j++
      }
    } else {
      i--
    }
  }
  return s.join('')
};
reverseVowels('leetcode')