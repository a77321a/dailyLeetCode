/*
 * @Descripttion: 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符
 * @Author: a77321a
 * @Date: 2020-10-19 15:34:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-19 15:37:02
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
  return sArr.join('') === tArr.join('')
};