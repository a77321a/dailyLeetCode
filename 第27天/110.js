/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-26 15:46:58
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 13:58:22
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
var isBalanced = function (root) {
  // 
  if (!root) return true
  const dfs = root => {
    if (!root) return 0
    return 1 + Math.max(dfs(root.left), dfs(root.right))
  }
  if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) {
    return false
  } else {
    if (isBalanced(root.left) && isBalanced(root.right)) {
      return true
    } else {
      return false
    }
  }
};