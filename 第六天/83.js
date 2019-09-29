/*
 * @Descripttion: 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 09:40:17
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 14:38:09
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
 * 判断节点或下一个节点存不存在
 * 如果此节点值等于下一个节点值 把下一个节点的next指针挂载到当前节点
 *  
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  head.next = deleteDuplicates(head.next);
  if (head.val == head.next.val) head = head.next;
  return head;
};