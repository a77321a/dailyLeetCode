/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-07 10:51:43
 * @LastEditors: 
 * @LastEditTime: 2019-11-07 10:56:51
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 解题思路双指针 碰到在t里碰到s里的字符串，则s的指针++，如果s全部遍历完毕 则表示s是t的字串
var isSubsequence = function (s, t) {
  let i = 0, j = 0
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++
    }
    j++
  }
  if (i == s.length) return true
  return false
};
isSubsequence("abc", "ahbgdc")