/*
 * @Descripttion: 453题
 * @Author: 
 * @Date: 2019-11-15 17:30:50
 * @LastEditors: 
 * @LastEditTime: 2019-11-15 17:35:15
 */
// 解题思路 n-1个数自增 相当于其中一个数自减
// 例如[1,2,3,4,5]
// 先让5自减4次 等于1 就是操作4次
// 然后4 自减3次  等于1 操作3次 ...
var minMoves = function (nums) {
  let min = Math.min(...nums)
  let res = 0
  nums.forEach(i => {
    res += i - min
  })
  return res
};