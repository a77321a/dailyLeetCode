/*
 * @Descripttion: 1047. 删除字符串中的所有相邻重复项
 * @Author: 辛顺宁
 * @Date: 2019-11-04 18:04:19
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-04 18:21:56
 */
/**
 * @param {string} S
 * @return {string}
 */
// 执行用时: 84 ms, 在所有 javascript 提交中击败了93.91 % 的用户
// 内存消耗:42.7 MB, 在所有 javascript 提交中击败了100.00%的用户
// 解题思路，将字符串每个字符与栈顶元素比较，如果相同则去除栈顶元素
var removeDuplicates = function (S) {
  let shed = []
  for (let i = 0; i < S.length; i++) {
    if (shed[shed.length - 1] == S[i]) {
      shed.pop()
    }
    else {
      shed.push(S[i])
    }
  }
  return shed.join('')
};
// 方法2递归，每次遍历字符串 查找是否有相邻相等字符串
