/*
 * @Descripttion: 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 如果不存在最后一个单词，请返回 0 。
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 15:04:26
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 15:18:48
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  if (s)
    s = s.split(' ')
  if (s.length > 0) {
    return s[s.length - 1].length
  }
  return 0
};