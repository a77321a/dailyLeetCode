/*
 * @Descripttion: 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * @Author: 辛顺宁
 * @Date: 2019-10-11 09:56:52
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-11 10:01:26
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 解题思路：判断字符出现的位置是否相等
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false
    }
  }
  return true
};