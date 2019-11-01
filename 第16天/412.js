/*
 * @Descripttion: leetCode 412题  
 * @Author: 辛顺宁
 * @Date: 2019-11-01 15:53:18
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-01 16:00:11
 */
/**
 * @param {number} n
 * @return {string[]}
 */
// 解题思路整除
var fizzBuzz = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i - 1] = 'FizzBuzz'
    }
    else if (i % 3 == 0 && i % 5 != 0) {
      arr[i - 1] = 'Fizz'
    }
    else if (i % 5 == 0 && i % 3 != 0) {
      arr[i - 1] = 'Buzz'
    } else {
      arr[i - 1] = i.toString()
    }
  }
  return arr
};