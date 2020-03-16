/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-01-09 18:08:40
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-09 18:14:02
 */
function getNum (str) {
  let res = []
  let key = 0
  let temp = ''

  for (let i of str) {
    if (i == parseInt(i)) {
      temp = temp + '' + i
      console.log(temp)
    } else {
      if (temp != '') {
        res.push(temp)
      }
      temp = ''
    }
  }
  if (temp != '') {
    res.push(temp)
  }
  console.log(res)
}
getNum('wewe123123wewqe123')
