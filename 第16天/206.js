/*
 * @Descripttion: 反转一个单链表。
 * @Author: 辛顺宁
 * @Date: 2019-10-11 10:02:28
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-11-01 17:36:51
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
// 解题思路：让头结点指向null 然后指针往后遍历 temp缓存后一个结点
var reverseList = function (head) {
  let pred = null, nNode = head
  while (nNode) {
    let temp = nNode.next
    nNode.next = pred
    pred = nNode
    nNode = temp
  }
  return pred
};