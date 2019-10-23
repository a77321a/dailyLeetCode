/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-22 19:13:34
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-23 10:13:29
 */

/*
 * @Descripttion: 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
 * 同时保持非零元素的相对顺序。（LeetCode 284题）
 * @Author: 前端每日算法
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// i：慢指针  j：快指针
var moveZeroes = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (0 != nums[j]) {
      nums[i] = nums[j]
    }
  }
  for (let p = i; p < nums.length; p++) {
    nums[p] = 0
  }
  return nums

};