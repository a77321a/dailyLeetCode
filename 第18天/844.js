/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-11-04 11:49:22
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-04 13:59:33
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let sArr = [], tArr = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] == '#') {
      sArr.pop()
    } else {
      sArr.push(S[i])
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] == '#') {
      tArr.pop()
    } else {
      tArr.push(T[i])
    }
  }
  console.log(sArr, tArr)
  return sArr.join('') === tArr.join('')
};
backspaceCompare("a#c", 'b')