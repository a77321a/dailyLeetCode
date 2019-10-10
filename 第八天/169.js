/*
 * @Descripttion: 寻找众数
 * @Author: 辛顺宁
 * @Date: 2019-10-10 15:03:20
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-10 15:12:50
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解题思路：因为众数出现次数是 > 2/n 所以 假设第一个数就是众数,碰到不一样的数就减一 如果最后 大于零就是 等于就换个数
var majorityElement = function (nums) {
  let num = 0, res = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == res) {
      num++
    } else {
      if (num == 0) {
        res = nums[i]
      } else {
        num--
      }
    }
  }
  console.log(res)
  return res
};
majorityElement([3, 2, 3])