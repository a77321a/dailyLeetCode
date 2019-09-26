/*
 * @Descripttion: 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 11:38:58
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 11:39:11
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};