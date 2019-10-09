/*
 * @Descripttion: 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
说明:
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * @Author: 辛顺宁
 * @Date: 2019-10-09 11:00:32
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-09 11:10:17
 */
/**
 * 输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let arr = [], index1 = 0, index2 = 1
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length && j != i; j++) {
      if (numbers[i] < target && numbers[j] < target) {
        if (numbers[i] + numbers[j] == target) {
          index1 = i
          index2 = j
        }
      }
    }
  }
  return index1 > index2 ? [index2 + 1, index1 + 1] : [index1 + 1, index2 + 1]
};
twoSum([5, 25, 75], 100)