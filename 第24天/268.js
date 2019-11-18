/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-18 10:17:56
 * @LastEditors: 
 * @LastEditTime: 2019-11-18 10:27:21
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解题思路：0-n的数出现了n个 缺一个 
// 1.排序 满足 i+1 = i
// 2.求和
var missingNumber = function (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return nums.length * (nums.length + 1) / 2 - sum
};