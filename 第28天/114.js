/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 17:35:29
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 17:35:30
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return true
    }

  }
  return false
};