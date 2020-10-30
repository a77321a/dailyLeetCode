/*
 * @Descripttion: 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
  换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
  以数组形式返回答案。
 * @Author: a77321a
 * @Date: 2020-10-26 16:32:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-26 17:59:27
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let len = nums.length
  let max = Math.max(...nums)          // 找到最大值
  let counts = Array(max + 1).fill(0)  // 根据最大值生成0 - max的数组, 用于记录数字出现的次数
  nums.forEach(t => counts[t]++)       // 统计nums中数组出现次数
  let obj = {
    0: 0     // 题目限制了0 <= nums[i], 所以不会有比0小的数
  }
  for (let i = 1; i <= max; i++) {
    obj[i] = obj[i - 1] + counts[i - 1] // 记录比当前数小的次数
  }
  return nums.map(t => obj[t])
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3])