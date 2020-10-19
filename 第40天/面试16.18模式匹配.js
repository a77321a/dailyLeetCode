/*
 * @Descripttion: 你有两个字符串，
 * 即pattern和value。 
 * pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
 * 例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），
 * 该字符串也匹配像"a"、"ab"和"b"这样的模式。但需注意"a"和"b"不能同时表示相同的字符串。
 * 编写一个方法判断value字符串是否匹配pattern字符串。
 * @Author: a77321a
 * @Date: 2020-06-22 10:37:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-22 14:40:06
 */
/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  if (!pattern || pattern.length == 1 || pattern.length == 2) return true
  // flag 存在于第一个字母不同的字母
  let firstword = pattern[0], flag = 0, firstCount = 0, flagIndex = 1, firstIndex = 1
  // 假如第一个是a ,找到第一个b,和下一个a第一次出现
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] != pattern[0]) {
      if (flag == 0) flagIndex = i
      flag++
    } else {
      if (firstCount == 0) firstIndex = i
      firstCount++
    }
  }
  if (flag < 2) return true
  for (let i = 1; i < value.length; i++) {

  }
};

patternMatching("abaa", "dogcatdogdog")