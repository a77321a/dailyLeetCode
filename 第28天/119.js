/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 17:08:42
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 17:24:11
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ys = []
  ys[0] = [1]
  ys[1] = [1, 1]
  for (let i = 2; i < rowIndex + 1; i++) {
    const subArr = [];
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        subArr.push(ys[i - 1][j - 1] + ys[i - 1][j]);
      } else {
        subArr.push(1);
      }
    }
    ys.push(subArr);
  }
  return ys[rowIndex]
};