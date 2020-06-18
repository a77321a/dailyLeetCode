/*
 * @Descripttion: 另一种思路
 * @Author:
 * @Date: 2020-06-18 15:56:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 17:01:57
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
  let res = [[new TreeNode(headNode)]]
  let tempNum = ''
  let countLine = 1
  let tempCountLine = 0

  for (let i = headNode.length + 1; i < S.length; i++) {
    if (S[i] != '-') {
      tempNum += S[i]
    } else if (S[i - 1] != '-') {
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
        tempCountLine = countLine
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
    } else {
      countLine++
    }
  }
  console.log(tempCountLine, countLine)
  if (countLine && tempNum) {
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
recoverFromPreorder("10-7--8")