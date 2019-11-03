/*
 * @Description: 1221题
 * @Author: 辛顺宁
 * @Date: 2019-11-03 12:39:27
 * @LastEditTime: 2019-11-03 12:48:13
 * @LastEditors: Do not edit
 */
/**
 * @param {string} s
 * @return {number}
 */
// 记录R第一个字符，碰到一样的就++，不同的就--直到完全匹配等于0 说明是一个平衡字符串
var balancedStringSplit = function(s) {
    let res = 0,first = s[0],sum = 0
    for(let i =1;i<s.length;i++){
        if(s[i] == first){
            sum ++
        }else{
            sum --
        }
        if(sum==0) res++
    }
    return res
};