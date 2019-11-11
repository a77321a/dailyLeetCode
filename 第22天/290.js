/*
 * @Descripttion: 290题
 * @Author: 
 * @Date: 2019-11-11 17:17:12
 * @LastEditors: 
 * @LastEditTime: 2019-11-11 17:30:50
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 解题思路，首先判断pattern 将pattern映射到str上
var wordPattern = function (pattern, str) {
  str = str.split(' ')
  if (str.length !== pattern.length) { return false }
  for (let i = 0; i < pattern.length; i++) {
    console.log(pattern.indexOf(pattern[i]))
    if (pattern.indexOf(pattern[i]) !== str.indexOf(str[i])) {
      return false
    }
  }
  return true
};
wordPattern("abba", "dog cat cat dog")