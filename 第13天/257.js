/*
 * @Descripttion: 
 * @Author: 辛顺宁
 * @Date: 2019-10-21 15:52:30
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-21 16:03:55
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
 * @return {string[]}
 */
// 解题思路：二叉树的深度优先遍历
var binaryTreePaths = function (root) {
  if (!root) return []
  if (root.left === null && root.right === null) return [root.val.toString()]
  let left = binaryTreePaths(root.left)
  let right = binaryTreePaths(root.right)
  return left.concat(right).map(item => root.val + '->' + item)
};