/*
 * @Descripttion: 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * @Author: 辛顺宁
 *  
 * @Date: 2019-09-29 11:06:20
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-29 11:11:24
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p.val != q.val) return false
  if (p == null && q == null) return true
  if (p && q) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
};
var isSameTree = function (p, q) {
  if (p == null && q == null)
    return true;
  if (p == null || q == null)
    return false;
  if (p.val == q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  return false;
};