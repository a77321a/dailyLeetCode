/*
 * @Descripttion: 404题
 * @Author: 
 * @Date: 2019-12-17 17:41:38
 * @LastEditors: 
 * @LastEditTime: 2019-12-17 17:44:46
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
// 解题思路：二叉树两种思路：迭代、递归
// 此题我们使用递归：
// 找到所有的左叶子节点
// 判断当前节点的左子树下是否有左叶子（这样的判断可以不用再去验证找到的叶子节点是否为左叶子）
// 然后相加即可
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }
  let sum = 0
  let addLeft = (node) => {
    if (node.left && (!node.left.left && !node.left.right)) {
      sum += node.left.val
    }
    if (node.right) {
      addLeft(node.right)
    }
    if (node.left) {
      addLeft(node.left)
    }
  }
  addLeft(root)
  return sum
};