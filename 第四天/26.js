/*
 * @Descripttion: 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @Author: 辛顺宁
 * @Date: 2019-09-27 15:35:00
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 15:44:10
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1)
      i++
    }
  }
  return nums.length
};