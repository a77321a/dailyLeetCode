/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-20 16:34:49
 * @LastEditors: 
 * @LastEditTime: 2019-11-20 18:30:29
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
  let res = function (left, right) {
    if (!left && !right)//都为NULL
      return true;
    if (!left || !right)//有一个为NULL
      return false;
    if (left.val == right.val)
      return res(left.left, right.right) && ismirror(left.right, right.left);
    return false;
  }
  return res()


};