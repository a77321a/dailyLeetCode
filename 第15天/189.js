/*
 * @Descripttion: 旋转数组 LeetCode 189题
 * @Author: 辛顺宁
 * @Date: 2019-10-31 14:42:36
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-31 17:03:32
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解题思路
// 1、移动K次，数组最后的K个元素会到数组的头部，剩下的元素往后移动K位
// length - k 的数怎么存
var rotate = function (nums, k) {
  k = k % nums.length
  if (k === 0 || nums.length < 2) return nums
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  console.log(nums)
  return nums
};
var rotate = function (nums, k) {
  k = k % nums.length
  if (k === 0 || nums.length < 2) return nums
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  return nums
};
rotate([1, 2, 3, 4, 5, 6, 7], 3)