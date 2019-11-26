/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-26 13:56:23
 * @LastEditors: 
 * @LastEditTime: 2019-11-26 13:58:55
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 解题思路 找到中位数，使用递归来完成树
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.lenngth === 1) {
    return new TreeNode(nums[0]);
  }
  //寻找右中位数
  let mid = Math.floor((nums.length) / 2);
  // 生成节点
  const node = new TreeNode(nums[mid]);
  // 数组左半边
  let left = nums.slice(0, mid);
  // 数组右半边
  let right = nums.slice(mid + 1);
  // 左子树 都比根小
  node.left = sortedArrayToBST(left);
  // 右子树 都比根大
  node.right = sortedArrayToBST(right);
  return node;
}