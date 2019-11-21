/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-21 14:25:14
 * @LastEditors: 
 * @LastEditTime: 2019-11-21 14:58:41
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let j = 1;
  for (let i = 0; i < A.length - 1; i = i + 2) {
    if ((A[i] & 1) != 0) {
      while ((A[j] & 1) != 0) {
        j = j + 2;
      }
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
  }
  return A
}
sortArrayByParityII([4, 5, 2, 7])