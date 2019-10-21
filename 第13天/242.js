
/*
 * @Descripttion: 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。（LeetCode 242题）
 * @Author: 前端每日算法
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  return s.split('').sort().join('') == t.split('').sort().join('')
};