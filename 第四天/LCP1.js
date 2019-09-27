/*
 * @Descripttion: 小A 和 小B 在玩猜数字。
 小B 每次从 1, 2, 3 中随机选择一个，
 小A 每次也从 1, 2, 3 中选择一个猜。
 他们一共进行三次这个游戏，请返回 小A 猜对了几次？
 * @Author: 辛顺宁
 * @Date: 2019-09-27 14:14:44
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 14:17:06
 */
/**
 * @param {number[]} guess 小A 每次的猜测
 * @param {number[]} answer 小B 每次的选择
 * guess和answer的长度都等于3
 * @return {number}
 */
var game = function (guess, answer) {
  let res = 0
  for (let i = 0; i < 3; i++) {
    if (guess[i] == answer[i]) {
      res++
    }
  }
  return res
};