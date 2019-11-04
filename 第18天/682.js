/*
 * @Descripttion: 682. 棒球比赛
 * @Author: 辛顺宁
 * @Date: 2019-11-04 10:10:48
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-04 11:40:07
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
// 解题思路 将每一轮得分存入数组 然后加起来比较清晰，直接 遍历判断加起来也可以
var calPoints = function (ops) {
  let nums = []
  for (let i = 0; i < ops.length; i++) {
    if (isFinite(ops[i])) {
      nums.push(ops[i])
    } else {
      if (ops[i] == 'C') {
        nums.pop()
      }
      if (ops[i] == 'D') {
        nums.push((nums[nums.length - 1] * 2))
      }
      if (ops[i] == '+') {
        nums.push(Number(nums[nums.length - 1]) + Number(nums[nums.length - 2]))
      }
    }
  }

  let sum = 0
  for (let j in nums) {
    sum += Number(nums[j])
  }
  return sum
};
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])