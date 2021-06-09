---
title: 二叉树的层序遍历
date: 2020-12-27
sidebar: 'auto'
categories:
 - 算法
tags:
 - 栈
 - 算法
 - 二叉树
publish: true
---
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
## 使用递归
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    const res = [];
    const innerOrder = (node, level = 0)=>{
        if(!res[level]){
            res[level] = []
        }
        res[level].push(node.val);
        if(node.left){
            innerOrder(node.left, level+1);
        }
        if(node.right){
            innerOrder(node.right, level+1);
        }
    }
    innerOrder(root);
    return res;
};
```

## 迭代写法
使用队列先进先出的特点，先入队列根节点，后记录下当前队列的长度，此时的长度正好是下一层的个数，递减长度并不断出队列，并把出队列的节点的左右节点入队列
```javascript
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    const queue = [];
    const res = [];
    queue.push(root);
    while(queue.length){
        const arr = [];
        // 记录下当前队列里节点的个数
        let size = queue.length;
        while(size--){
            const curr = queue.shift()
            arr.push(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        res.push(arr);
    }
    return res;
};
```
