/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-11 17:32:33
 * @LastEditors: 
 * @LastEditTime: 2019-11-11 17:46:21
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = [...new Set(nums)]
  if (arr.length < 3) {
    return Math.max(...nums)
  }
  let max = Math.max(...arr), j = 3
  while (j) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == max) {
        arr.splice(i, 1)
      }
    }
    max = Math.max(...arr)
    j--
  }
  return Math.max(...arr)
};
thirdMax([1, 2, 2, 5, 3, 5])