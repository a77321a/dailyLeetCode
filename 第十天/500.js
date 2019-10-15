/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-15 10:12:17
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-15 10:33:35
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
// 解题思路 判断每个单词首字母是哪一行，然后用该行的字符串去验证每个字符串 如果全都是该行的 那么返回这个字符串
var findWords = function (words) {
  let a = 'qwertyuiop', b = 'asdfghjkl', c = 'zxcvbnm'
  let rule = '', res = []
  for (let i = 0; i < words.length; i++) {
    let flag = true
    for (let j = 0; j < words[i].length; j++) {
      if (j == 0) {
        if (a.indexOf(words[i][j].toLowerCase()) > -1) {
          rule = a.split('')
        }
        if (b.indexOf(words[i][j].toLowerCase()) > -1) {
          rule = b.split('')
        }
        if (c.indexOf(words[i][j].toLowerCase()) > -1) {
          rule = c.split('')
        }
      }
      else {
        if (!rule.includes(words[i][j].toLowerCase())) {
          flag = false
          break
        }
      }
    }
    if (flag) {
      res.push(words[i])
    }
  }
  return res
};
findWords(["Hello", "Alaska", "Dad", "Peace"])