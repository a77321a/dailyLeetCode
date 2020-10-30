/*
 * @Descripttion: 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * @Author: a77321a
 * @Date: 2020-10-29 15:23:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-29 15:23:45
 */
// 解题思路：使用hashmap 判断出现次数 对出现次数去重
var uniqueOccurrences = function (arr) {
  let keyMap = {}
  for (let i in arr) {
    keyMap[`${arr[i]}`] ? keyMap[`${arr[i]}`]++ : keyMap[`${arr[i]}`] = 1
  }
  let res = []
  for (let k in keyMap) {
    res.push(keyMap[k])
  }
  return res.length == [...new Set(res)].length
};