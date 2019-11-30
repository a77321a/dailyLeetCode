/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2019-11-30 16:52:40
 * @LastEditors: 
 * @LastEditTime: 2019-11-30 16:58:40
 */
/**
 * @param {string} S
 * @return {string}
 */
/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function (S) {
  if (S.indexOf('@') > -1) {
    let name = S.replace(/@.*/g, '')
    return name[0].toLowerCase() + '*****' + name[name.length - 1].toLowerCase() + S.replace(/.*(?=@)/g, '').toLowerCase()
  } else {
    S = S.replace(/\D/g, '')
    return S.length > 10 ? "+" + '**********************'.substr(0, S.length - 10) + "-***-***-" + S.substr(S.length - 4, S.length) : "***-***-" + S.substr(S.length - 4, S.length)

  }
};