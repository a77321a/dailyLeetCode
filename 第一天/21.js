/*
 * @Descripttion:将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @Author: 辛顺宁
 * @Date: 2019-09-26 09:27:41
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-26 09:34:08
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
var mergeTwoLists = function (l1, l2) {
  let dummy = { val: 0, next: null };
  const d = dummy;
  while (l1 || l2) {
    if (!l2 || (l1 && l1.val < l2.val)) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  return d.next;
};