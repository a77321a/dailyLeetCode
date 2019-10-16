/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-16 17:46:06
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-16 17:51:13
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//解题思路1： 利用es6 set新特性
// 解题思路2：排序后判断（与去重同理）
// 解题思路3：转字符串后indexof（与去重同理）
var containsDuplicate = function (nums) {
  let off = new Set([...nums])
  if (off.size == nums.length)
    return false
  return true
};