/*
 * @Descripttion: 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * @Author: 辛顺宁
 * @Date: 2019-10-09 09:57:49
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-10-09 09:59:43
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root == null) return false
  // 每次递归让sum减去节点的值 如果到叶子节点 sum刚好等于0 那么返回true
  if (!root.left && !root.right) return sum - root.val == 0
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};