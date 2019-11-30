/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 17:46:32
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 17:49:32
 */
// 如果两个串有相交  
// 把两个串分三部分   
// [a前一段], [交点], [a后一段]
// [b前一段],[交点],[b后一段]
// 那么[a前一段] + [交点] + [a后一段] + [b前一段] =[b前一段] + [交点] + [b后一段] + [a前一段]
// 走过的路程是相等的 而且刚好到交点位置
var getIntersectionNode = function (headA, headB) {
  let top = headA
  let bottom = headB
  while (top != bottom) {
    if (top) {
      top = top.next
    } else {
      top = headB
    }
    if (bottom) {
      bottom = bottom.next
    } else {
      bottom = headA
    }
  }
  return bottom
};