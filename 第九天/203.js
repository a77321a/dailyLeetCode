/*
 * @Descripttion: 删除链表中等于给定值 val 的所有节点。
 * @Author: 辛顺宁
 * @Date: 2019-10-11 09:28:06
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-11 09:34:56
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
 * @param {number} val
 * @return {ListNode}
 */
// 解题思路：1、对于链表只要返回头结点就好。2、递归查找链表元素值是否等于val，如果相等，将上一个节点next指向当前节点的next，当前节点的next置空
var removeElements = function (head, val) {
  if (!head) return head
  head.next = removeElements(head.next, val)
  return head.val == val ? head.next : head
};