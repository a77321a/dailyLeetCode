/*
 * @Descripttion: 你是一个专业的小偷，
 计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，
能够偷窃到的最高金额。
 * @Author: 辛顺宁
 * @Date: 2019-10-10 15:25:38
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-10 16:16:53
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let sum = []
  if (nums.length == 0)
    return 0;
  if (nums.length == 1)
    return nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum[i] = 0
  }
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      sum[0] = nums[0]
    }
    else if (i == 1) {
      sum[1] = Math.max(nums[0], nums[1])
    }
    else {
      sum[i] = Math.max(nums[i] + sum[i - 2], sum[i - 1])
    }
  }
  return sum[sum.length - 1]
};
rob([1, 2, 3, 1])
