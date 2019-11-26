/*
 * @Descripttion: 107 题
 * @Author: 
 * @Date: 2019-11-26 13:59:30
 * @LastEditors: 
 * @LastEditTime: 2019-11-26 14:25:03
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  // 定义一个栈
  let stack = [root]
  // 结果数组
  let result = []
  // 层级
  let level = []
  // 临时栈
  let stack_tmp = []
  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      // 当前要操作的栈
      const cur = stack[i]
      // 存入当前层级
      level.push(cur.val)
      // 如果有左、右子树 把左、右子树存入临时栈
      if (cur.left) {
        stack_tmp.push(cur.left)
      }
      if (cur.right) {
        stack_tmp.push(cur.right)
      }
    }
    // 结果数组存入当前层级的值
    result.push(level)
    // 让正式栈等于临时栈、重新进入while循环
    stack = stack_tmp

    level = []
    stack_tmp = []
  }
  // 由于层级是从上到下push的  倒置数组就是正确的输出
  return result.reverse()
};
