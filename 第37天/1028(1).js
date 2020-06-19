/*
 * @Descripttion: 另一种思路
 * @Author:
 * @Date: 2020-06-18 15:56:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-19 09:09:25
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
var recoverFromPreorder = function (S) {
  if (!S) return null

  if (S.indexOf('-') < -1) {
    return [[new TreeNode(S)]]
  }
  // 二维数组，res[i] 存放第i层节点
  let res = [[new TreeNode(headNode)]]
  let tempNum = ''
  let countLine = 1
  let tempCountLine = 0

  for (let i = headNode.length + 1; i < S.length; i++) {
    // 是数字的时候
    if (S[i] != '-') {
      tempNum += S[i]
      //结束数字的第一个 - 
    } else if (S[i - 1] != '-') {
      if (res[countLine]) {
        res[countLine].push(new TreeNode(tempNum))
        // 判断当前横线数与上一个横线数 
        // 如果当前大，那么当前节点是上一层最后一个的左子树
        if (tempCountLine > countLine) {
          res[countLine - 1][res[countLine - 1].length - 1].right = res[countLine][res[countLine].length - 1]
        }
        // 如果相等，那么当前节点跟上一层最后一个是兄弟关系 就是上上个的右子树
        else if (tempCountLine == countLine) {
          res[countLine - 1][res[countLine - 1].length - 1].right = res[countLine][res[countLine].length - 1]
        }
        // 如果当前小，那么当前节点是countLine 最近一个上级节点的右节点
        else {
          res[countLine - 1][res[countLine - 1].length - 1].left = res[countLine][res[countLine].length - 1]
        }
        // 缓存
        tempCountLine = countLine
        // 置空 重新计数
        countLine = 0
      } else {
        res[countLine] = [new TreeNode(tempNum)]
        // console.log('tempNum=' + tempNum)

        res[countLine - 1][res[countLine - 1].length - 1].left = res[countLine][res[countLine].length - 1]
        tempCountLine = countLine
        countLine = 0
      }
      tempNum = ''
      countLine++
    }
    // 前面都是-
    else {
      countLine++
    }
  }
  // 最后一个节点 因为最后没有 - 所以这两个会一直存在
  if (countLine && tempNum) {
    // 同上逻辑
    if (res[countLine]) {
      res[countLine].push(new TreeNode(tempNum))
      if (tempCountLine > countLine) {
        res[countLine - 1][res[countLine - 1].length - 1].right = res[countLine][res[countLine].length - 1]
      }
      else if (tempCountLine == countLine) {
        res[countLine - 1][res[countLine - 1].length - 1].right = res[countLine][res[countLine].length - 1]
      }
      else {
        res[countLine - 1][res[countLine - 1].length - 1].left = res[countLine][res[countLine].length - 1]
      }
    } else {
      res[countLine] = [new TreeNode(tempNum)]
      res[countLine - 1][res[countLine - 1].length - 1].left = res[countLine][res[countLine].length - 1]
    }
  }
  return res[0][0]
};