/*
 * @Descripttion: 实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
如果不存在，则返回  -1。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 11:38:32
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 17:13:51
 */



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == haystack) return 0
  if (needle.length > haystack.length) return -1
  if (needle == "") return 0
  let arr = haystack.split(needle)
  if (arr.length == 1)
    return -1
  else if (arr[0] == '') {
    return 0
  }
  else if (arr[arr.length - 1] == '') {
    let num = 0
    arr.forEach(i => {
      num = num + i.length
    })
    return num
  } else {
    return arr[0].length
  }
};