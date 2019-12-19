/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-12-19 20:51:50
 * @LastEditors: 
 * @LastEditTime : 2019-12-19 20:52:09
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
 * @return {number}
 */
// 解题思路 ：1、广度优先遍历 BFS
var maxDepth = function (root) {
  // 空节点返回0
  if (root === null) return 0
  // 定义栈
  var queue = [root]
  // 定义深度
  var deep = 0
  while (queue.length > 0) {
    deep++
    var temp = queue.length
    while (temp > 0) {
      // 不断将不为空的节点放入栈中
      var curr = queue.shift()
      if (curr.left !== null) {
        queue.push(curr.left)
      }
      if (curr.right !== null) {
        queue.push(curr.right)
      }
      temp--
    }
  }
  return deep
}