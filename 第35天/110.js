/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-03-18 17:33:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-18 17:59:49
 */
//
var transArr = (arr) => {
  let temp = arr[0]
  let start = arr[0]
  let res = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - temp == 1) {
      temp = arr[i]
    } else {
      if (start == temp) {
        res.push(`${start}`)
      } else {
        res.push(`${start}~${temp}`)
      }
      temp = arr[i]
      start = arr[i]
    }
  }
  if (temp == start) {
    res.push(`${start}`)
  }
  if (temp > start) {
    res.push(`${start}~${temp}`)
  }
  console.log(res.join(','))
  return res.join(',')
}
function get (arr) {
  let nextItem, subArr;
  var result = [];
  for (var j = 0; j < arr.length; j++) {
    let item = arr[j];
    let lastItem;
    if (nextItem === item) {
      if (subArr.indexOf('~') < 0) {
        subArr.push('~');
      }
      subArr[2] = nextItem;
      nextItem++;
      continue;
    }
    subArr = [item];
    nextItem = ++item;
    result.push(subArr);
  }
  console.log(result)
  return result;
}
transArr([1, 2, 3, 4, 6, 8, 9, 11, 12, 14, 15, 18, 19, 20, 5])
get([1, 2, 3, 4, 6, 8, 9, 11, 12, 14, 15, 18, 19, 20, 5])
