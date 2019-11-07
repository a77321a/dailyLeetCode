/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-07 11:22:05
 * @LastEditors: 
 * @LastEditTime: 2019-11-07 11:41:21
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 解题思路：收到钱先记录，收到10块给5块，收20先给10块，10块没有再给15
var lemonadeChange = function (bills) {
  if (bills[0] != 5) return false
  let five = 0, ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five += 5
    }
    else if (bills[i] == 10) {
      if (five < 5) {
        return false
      }
      five -= 5
      ten += 10
    }
    else {
      if (five < 5) {
        return false;
      }
      if (five < 15 && ten < 10) {
        return false;
      }
      if (five > 15 && ten < 10) {
        five -= 15;
        continue;
      }
      ten -= 10;
      five -= 5;
    }
  }
  return true
};