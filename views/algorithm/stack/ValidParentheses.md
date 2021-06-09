---
title: 有效的括号
date: 2020-12-14
sidebar: 'auto'
categories:
 - 算法
tags:
 - 栈
 - 算法
publish: true
---
给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。

有效字符串需满足：
+ 左括号必须用相同类型的右括号闭合。
+ 左括号必须以正确的顺序闭合。
+ 注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例2:
输入: "()[]{}"
输出: true

示例3:
输入: "(]"
输出: false

示例4:
输入: "([)]"
输出: false

示例5:
输入: "{[]}"
输出: true

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 存储栈
    const stk = [];
    // 游标
    let index = 0;
    const keyMap = {
        '(':')',
        '[':']',
        '{':'}'
    }
    while(index < s.length){
        const chart = s.slice(index,index+1);
        index++;
        if('([{'.indexOf(chart)>-1){
            stk.push(chart);
        }else{
            const popChart = stk.pop();
            if(keyMap[popChart] !== chart){
                return false;
            }
        }
    }
    return !stk.length
}
```
