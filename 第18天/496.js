/*
 * @Descripttion: 496题
 * @Author: 辛顺宁
 * @Date: 2019-11-04 09:55:03
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-04 10:09:04
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 解题思路 遍历2个数组，判断两个元素相等，在nums 2后面寻找元素
var nextGreaterElement = function (nums1, nums2) {
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && j != (nums2.length - 1)) {
        let num = -1
        for (let n = j; n < nums2.length; n++) {
          if (nums2[n] > nums1[i]) {
            // 如果找到
            num = nums2[n]
            break
          }
        }
        res.push(num)
        break
      }
      if (nums1[i] == nums2[j] && j == (nums2.length - 1)) {
        res.push(-1)
      }
    }
  }
  return res
}