/*
 * @Descripttion:给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @Author:
 * @Date: 2020-06-20 14:22:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-20 15:21:23
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 1 2 3 4 5
var removeNthFromEnd = function (head, n) {
  let slow = head, fast = head
  let slowIndex = 0, fastIndex = n
  while (fast.next) {
    if (n == 1 && !fast.next.next) {
      fast.next = null
      return head
    }
    // 1->2->3->4->5
    fast = fast.next
    // 0->1->2->3->4->5
    slowIndex++
    //  0             2
    if (slowIndex > fastIndex) {
      // 1->2->3
      slow = slow.next
    }
  }
  //   slowIndex  4    slow 3
  if (slowIndex >= fastIndex) {
    // if (slow == head) {
    //   head = head.next
    //   return head
    // } else {
    slow.next = slow.next.next
    return head
    // }
  }
  head = head.next
  return head
};