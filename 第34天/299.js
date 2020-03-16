/*
 * @Descripttion: 猜数字游戏
 * @Author: 
 * @Date: 2020-03-16 18:22:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-16 18:29:44
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  secret = secret.split('')
  guess = guess.split('')
  let bulls = 0
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] == guess[i]) {
      secret.splice(i, 1)
      guess.splice(i, 1)
      bulls++
    }
  }
  let cows = 0
  for (let j = 0; j < secret.length; i++) {
    for (let n = 0; n < guess.length; n++) {
      if (secret[j] == guess[n]) {
        cows++
      }
    }
  }
  return `${bulls}A${cows}B`
};