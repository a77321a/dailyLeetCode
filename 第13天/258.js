/*
 * @Descripttion: 各位相加
 * @Author: 辛顺宁
 * @Date: 2019-10-21 16:18:38
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-21 16:18:58
 */
/**
 * @param {number} num
 * @return {number}
 */
// 如不循环 则是找规律
var addDigits = function (num) {
  return 1 + (num - 1) % 9;
};