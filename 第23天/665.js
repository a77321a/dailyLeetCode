/*
 * @Descripttion: 665题
 * @Author: 
 * @Date: 2019-11-15 16:15:26
 * @LastEditors: 
 * @LastEditTime: 2019-11-15 17:21:22
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 解题思路：如果仅修改一个数字 只要判断 nums[i] > nums[i+1]最多只有一个数字
// 如果出现峰顶
// 当i-1<i+1,让i=i+1
// 当i-1>i+1,让i+1=i
// 当i-1=i+1,让i=i+1
// 当i-1存在且i-1>i+1，就让i+1=i，否则让i=i+1
var checkPossibility = function (nums) {
  let res = 0, i = 0, boo = true
  // if (nums[0] > nums[1]) {
  //   nums[0] = nums[1]
  //   res++
  // }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      res++;
      if (res > 1) {
        break;
      }
      if (i - 1 >= 0 && nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  console.log(res <= 1)
  return res <= 1
};
checkPossibiliti([3, 3, 2, 3])
// [5, 4, 2, 3]
// [1, 5, 4, 6, 7, 10, 8, 9]
// [3,3, 2, 3]
// [2, 3, 3, 2, 4]
//  0  1  2  3  4