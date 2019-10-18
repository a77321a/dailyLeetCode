/*
 * @Descripttion: 数组相交
 * @Author: 辛顺宁
 * @Date: 2019-10-17 17:37:07
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-18 18:31:50
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        arr.push(nums1[i])
        console.log(1)
      }
    }
  }
  dw
  return [...new Set(arr)]
};
intersection([1, 2, 2, 1], [2, 2])