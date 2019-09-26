/*
 * @Descripttion: 实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
如果不存在，则返回  -1。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 11:38:32
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 11:38:48
 */



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == '') return 0
  haystack = haystack.split('')
  needle = needle.split('')
  let len = needle.length
};