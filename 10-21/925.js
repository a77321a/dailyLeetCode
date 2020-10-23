/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-10-21 11:33:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-21 16:27:30
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

var isLongPressedName = function (name, typed) {
  let a = 0
  let b = 0
  let stack = [name[0]]
  let tmp
  if (name == typed) return true
  if (name.length > typed.length) return false
  if (name[0] != typed[0]) return false
  while (a < name.length && b < typed.length) {
    if (stack.length && stack[0] == typed[b]) {
      tmp = typed[b]
      stack.pop()
      a++
      name[a] && stack.push(name[a])
    } else if (typed[b] != typed[b - 1]) {

      return false
    }
    b++
  }
  if (stack.length) {
    return false
  }
  if (b < typed.length) {
    while (b < typed.lenth) {
      if (typed[b] != tmp) return false
    }
  }
  return true
};

isLongPressedName('alex', 'aaleexr')
