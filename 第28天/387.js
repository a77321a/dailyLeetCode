/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 17:56:56
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 17:56:57
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let word = s[0]
  for (let i in s) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
};
var firstUniqChar = function (s) {
  let arr1 = s.split('')
  for (let i = 0; i < arr1.length; i++) {
    let index = i
    let sum = 0
    let word = arr[i]
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == word) {
        sum++
      }
    }
    if (sum == 1) {
      return index
    }
  }
  return -1
}