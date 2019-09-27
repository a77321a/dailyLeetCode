/*
 * @Descripttion: 给定一个排序数组和一个目标值，在数组中找到目标值，
 并返回其索引。
 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 14:13:27
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 14:25:09
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[0] > target) return 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
    if (nums[i] < target && nums.length - i < 2) {
      return nums.length
    }
  }
};