/*
 * @Descripttion: 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 15:12:19
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 15:58:19
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0], max = 0,
  for (let i = 1; i < prices.length; i++) {
    // 第i天表示第i天卖出
    for (let j = 0; j < i; j++) {
      // 第j天表示第j天买入
      if (prices[i] > prices[j]) {
        // 如果卖出价格大于买入价格 记录差值 求出每次卖出的最大差值
        max = Math.max(max, prices[i] - prices[j])
      }
    }
  }
  return max
};