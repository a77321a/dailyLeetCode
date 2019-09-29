/*
 * @Descripttion: 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 15:58:25
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 16:14:59
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    // 今天比昨天大 今天就卖出 如果明天比今天大 今天再买明天在卖 逻辑等同于 =》 第一天买第三天卖赚的钱是一样的
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1]
      console.log(sum)
    }
  }
  return sum
};
maxProfit([7, 1, 5, 3, 6, 4])