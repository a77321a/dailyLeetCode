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
// 解题思路 判断一个链表是不是回文链表
// 因为回文字符串是从两头开始判断

// 思路特别直接，循环读数然后头尾对比。
// 肯定连快都算不上，不过是个解法罢了。
var isPalindrome = function (head) {
  // 定义一个栈，将链表的value存入
  let stack = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  // 接下来就是简单的判断
  while (stack.length) {
    // 从头到位删除
    // for循环对比也可以
    if (stack.pop() != stack.shift()) return false
  }
  return true
};

//  进阶On