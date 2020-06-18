/*
 * @Descripttion:第1028题
 * @Author:
 * @Date: 2020-06-18 14:21:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 15:55:53
 */
// 我们从二叉树的根节点 root 开始进行深度优先搜索。
// 在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），
// 然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。
// 根节点的深度为 0）。
// 如果节点只有一个子节点，那么保证该子节点为左子节点。
// 给出遍历输出 S，还原树并返回其根节点 root。

// 输入："1-2--3--45-5--6--7"
// 输出：[1,2,5,3,45,6,7]
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
var recoverFromPreorder = function (S) {
  // let headNode = new TreeNode(S[0])
  let res = [S[0]]
  let tempNum = ''
  let countLine = 1
  let tempCountLine = 1
  for (let i = 2; i < S.length; i++) {
    if (S[i] != '-') {
      tempNum += S[i]
    } else if (S[i - 1] != '-') {
      if (res[countLine]) {
        res[countLine].push(tempNum)

        tempCountLine = countLine
        countLine = 0
      } else {
        res[countLine] = [tempNum]
        tempCountLine = countLine
        countLine = 0
      }
      tempNum = ''
      countLine++
    } else {
      countLine++
    }
  }
  if (countLine && tempNum) {
    if (res[countLine]) {
      res[countLine].push(tempNum)

      countLine = 0
    } else {
      res[countLine] = [tempNum]
      countLine = 0
    }
  }

};
recoverFromPreorder("1-2--3---4-5--6---7")
