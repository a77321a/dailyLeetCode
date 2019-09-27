/*
 * @Descripttion: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 14:31:49
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 15:03:06
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = 0, result = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (max > 0) {
      max += nums[i]
    } else {
      max = nums[i]
    }
    result = Math.max(max, result)
  }
  return result
};