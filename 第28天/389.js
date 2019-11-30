/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 18:21:39
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 18:22:12
 */
// 把原字符串出现的字符替换掉 剩下的就是添加的
var findTheDifference = function (s, t) {
  for (let item of s) {
    t = t.replace(item, '')
    console.log(t)
  }
  return t
};