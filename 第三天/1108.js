/*
 * @Descripttion: 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
 * 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
 * @Author: 辛顺宁
 * @Date: 2019-09-25 18:02:12
 * @LastEditors: 辛顺宁
 * @LastEditTime: 2019-09-25 18:03:56
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split('.').join('[.]')
};