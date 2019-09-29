/*
 * @Descripttion: 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * @Author: 辛顺宁
 * @Date: 2019-09-29 14:39:57
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 14:48:51
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root.left == null && root.right == null) return true
  if (!root.left || !root.right) return false
  if (root.left.val == root.right.val) {
    return isSymmetric(root.left) && isSymmetric(root.right)
  }
};