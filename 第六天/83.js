/*
 * @Descripttion: 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 09:40:17
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 09:43:34
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  head.next = deleteDuplicates(head.next);
  if (head.val == head.next.val) head = head.next;
  return head;
};