/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-11-04 18:28:04
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-04 18:28:15
 */
var intersect = function (nums1, nums2) {
  var ai = 0, bi = 0;
  var result = []
  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) { ai++; }
    else if (a[ai] > b[bi]) { bi++; }
    else {
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }
  return result;
}