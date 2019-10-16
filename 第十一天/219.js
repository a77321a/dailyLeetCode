/*
 * @Descripttion: 给定一个整数数组和一个整数 k，
 判断数组中是否存在两个不同的索引 i 和 j，
 使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k
 * @Author: 辛顺宁
 * @Date: 2019-10-16 17:52:17
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-16 18:14:24
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        if (Math.abs(i - j) <= k) {
          return true
        }
      }
    }
  }
  return false
};
containsNearbyDuplicate([1, 2, 3, 1])