/*
 * @Descripttion:24. 两两交换链表中的节点
 * @Author:
 * @Date: 2020-06-20 10:25:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-20 11:17:38
 */
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
// 给定 1->2->3->4, 你应该返回 2->1->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 解题思路 1->2->3
var swapPairs = function (head) {
  if (!head) return null
  let firstNode = head.next ? head.next : head
  let headNode = head
  while (headNode) {
    // 存储当前节点的next 如果没有next headNode就是最后一个节点 
    let tempNode = headNode.next ? headNode.next : headNode
    //  如果是偶数个链表  tempNode.next存在那么tempNode.next.next一定存在 奇数个就直接取 tempNode.next
    let templateMiddleNode = tempNode.next ? tempNode.next.next ? tempNode.next.next : tempNode.next : null
    //   缓存要交换的next节点
    let tempNext = tempNode.next
    //     2           1
    tempNode.next = headNode
    // 当前节点与后面交换完的节点相连   1->2->3->4   第一次交换后 1和4要相连 因为最后结果是2-1-4-3
    headNode.next = templateMiddleNode
    // headNode指向中间缓存的节点（第奇数个）    
    headNode = tempNext
  }
  return firstNode
};