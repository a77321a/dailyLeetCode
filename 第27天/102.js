/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-26 14:22:20
 * @LastEditors: 
 * @LastEditTime: 2019-11-26 14:22:31
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
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let stack = [root]
  let tmp_stack = []
  let level = []
  let result = []
  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      const cur = stack[i]
      level.push(cur.val)
      if (cur.left) {
        tmp_stack.push(cur.left)
      }
      if (cur.right) {
        tmp_stack.push(cur.right)
      }
      result.push(level)
      stack = tmp_stack
      tmp_stack = []
      level = []
    }
  }
  return result
};