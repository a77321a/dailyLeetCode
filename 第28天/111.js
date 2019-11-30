/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 17:01:34
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 17:06:04
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
var minDepth = function (root) {
  if (!root) {
    // 没有节点
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  if (!root.left || !root.right) {
    return 1 + minDepth(root.left ? root.left : root.right)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};