/*
 * @Description: 实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去
 * @Author: 辛顺宁
 * @Date: 2019-09-28 12:00:43
 * @LastEditTime: 2019-09-28 12:07:54
 * @LastEditors: Do not edit
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for(let i = 0;i<50000;i++){
        let min = i * i
        let max = (i+1)*(i+1)
        if(x == min){
            return i
        }
        if(x>min && x<max){
            return i
        }
    }
};
mySqrt(4)