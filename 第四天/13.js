/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-09-27 14:55:45
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 15:33:24
 */
/*
 * @Descripttion: 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
通常情况下，罗马数字中小的数字在大的数字的右边。
但也存在特例，例如 4 不写做 IIII，而是 IV。
数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * @Author: 辛顺宁
 * @Date: 2019-09-27 14:55:45
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-27 14:56:10
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  s = s.split('')
  let res = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (map[s[i]] >= map[s[i + 1]]) {
      res += map[s[i]]
    } else {
      res -= map[s[i]]
    }
  }
  return res + map[s[s.length - 1]]
};