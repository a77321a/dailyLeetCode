/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-03 10:59:23
 * @LastEditors: 
 * @LastEditTime: 2019-12-03 11:06:33
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = l1
  let b = l2
  let result = new ListNode(null)
  let curr = result
  let jin = 0
  while (a || b) {
    let x = a ? a.val : 0
    let y = b ? b.val : 0
    let sum = x + y + jin
    jin = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (a) a = a.next
    if (b) b = b.next
  }
  if (jin > 0) {
    curr.next = new ListNode(jin)
  }
  return result.next
};