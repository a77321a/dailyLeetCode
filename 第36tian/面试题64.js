/*
 * @Descripttion:求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * @Author:
 * @Date: 2020-06-17 11:41:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-17 11:41:42
 */
var sumNums = function (n) {
  return n && sumNums(n - 1) + n
};