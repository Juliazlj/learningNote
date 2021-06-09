---
title: 字符串编码
date: 2020-12-16
sidebar: 'auto'
categories:
 - 算法
tags:
 - 栈
 - 算法
publish: true
---
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像3a或2[4]的输入。

示例 1：
输入：s = "3[a]2[bc]"
输出："aaabcbc"

示例 2：
输入：s = "3[a2[c]]"
输出："accaccacc"

示例 3：
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"

示例 4：
输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const reg = /[a-zA-Z]+|[0-9]+|\[|\]/g;
    const stack = [];
    const peek = () => stack[stack.length - 1]; 

    while (reg.lastIndex < s.length) {
        let token = reg.exec(s)[0];
        if (token !== ']') {
            // 数字，字母，左括号通通入栈
            stack.push(token);
        } else {
            // 遇到右括号就开始出栈
            let str = '';
            // [] 中间的就是要重复的模式，把它们全部出栈，拼接起来
            while (peek() !== '[') {
                str = stack.pop() + str;
            }
            // 丢掉左括号
            stack.pop();
            // 左括号前面的一定是模式重复的次数
            const num = +stack.pop();
            // 把复制操作后的字符串放回栈中，作为外层 [] 模式的一部分
            stack.push(str.repeat(num));
        }
    }
    return stack.join('');
};
```
