/*
 * @Descripttion: 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 09:48:03
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 14:39:39
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 首先暴力硬解 把nums1数组后面的内容替换为nums2 然后排序
 * 
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }
  return nums1.sort(function (a, b) { return a - b })
};