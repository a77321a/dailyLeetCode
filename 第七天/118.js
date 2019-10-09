/*
 * @Descripttion: 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * @Author: 辛顺宁
 * @Date: 2019-10-09 10:07:02
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-09 10:13:30
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = [];   //创建一维数组（用作外层，储存所有数据）
  for (let i = 0; i < numRows; i++) {   //numRows 为变量，用于存储用户输入的行数
    arr[i] = new Array(i + 1);   //对每行创建一个长度为i+1的数组，用于存储每行的数据
  }
  for (let i = 0; i < numRows; i++) {
    // 计算每个值装进数组中
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {    //每行第1个和最后1个值为1
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];    //计算和值，本行的值是上1行对应列的数与其前一个数相加的结果
      }
    }
  }
  return arr
};