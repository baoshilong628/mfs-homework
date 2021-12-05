# 问答题
## 什么是二叉树？定义是什么？
一棵二叉树要么是空树 要么是一颗根节点具有最多两个子树的树 ，其子树也构成二叉树

## 什么是孩子，父亲，兄弟，祖先，后继，叶子节点？

节点的直接子节点 称为孩子

节点的直接父节点称为 父亲

节点的同层、具有相同父节点的节点称为兄弟

节点所在树的根节点到该节点路径上的所有节点称为 祖先

节点所构成树的所有非根节点称为后继

没有子节点的节点称为叶子节点

## 什么是完全二叉树？什么是满二叉树？

满二叉树是一个二叉树 其具有 2^n - 1个节点  n 为树的高度

完全二叉树从上到下 从左到右构成部分或整个满二叉树
## 前序遍历，中序遍历，后续遍历中，知道哪几个可以推出整个树结构？

前序和中序 中序和后序

# 【选做题】请自学堆，回答下面问题

#堆是一种什么样的数据结构？

堆是一颗完全二叉树

有最大堆和最小堆

最大堆的每个节点的父节点大于其两个子节点

最小堆则相反

如何建堆？

```javascript
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
}
function heapify(arr,len,root){
    if(root  >= len)
        return
    let largest = root
    let left = root * 2 +1
    let right = left * 2 +2
    
    if(left < len && arr[largest] < arr[left])
        largest = left
    if(right < len && arr[largest] < arr[right])
        largest = right
    if(largest !== root){
        swap(arr,largest,root)
        heapify(arr,len,largest)
    }
}

function buildMaxHeap(arr){
    let len = arr.length
    if(len = 0 )return arr
    let m = Math.floor(len/2)
    while (m >=0){
        heapify(arr,len,m)
        m--
    }
}
```
Sift-up和Sift-down 算法各是如何工作的？

```javascript
function shift_up(arr){
    let k = arr.length
    while (k > 1 && arr[k-1] > arr[Math.floor(k/2) -1]){
        swap(arr,k-1,Math.floor(k/2) -1)
        k = Math.floor(k/2)
    }
}
function shift_down(arr){
    heapify(arr,arr.length-1,0)
}
```

# 代码题
## 请实现树的四种遍历（前序遍历，中序遍历，后续遍历，层序遍历）
```javascript
function pre(tree,node,len){
    let left  = node *2 +1
    let right = node * 2 +2
    console.log(tree[node])
    if(left < len)pre(tree,left,len)
    if(right < len)pre(tree,right,len)
}

function middle(tree,node,len){
    let left  = node *2 +1
    let right = node * 2 +2
    if(left < len)middle(tree,left,len)
    console.log(tree[node])
    if(right < len)middle(tree,right,len)
}
function post(tree,node,len){
    let left  = node *2 +1
    let right = node * 2 +2
    if(left < len)middle(tree,left,len)
    if(right < len)middle(tree,right,len)
    console.log(tree[node])
}
function floor(tree){
    if(tree == null) return
    queue = [tree]
    while (queue.length >0){
        let item  =queue.first()
        console.log(item.value)
        if(item.left != null)
            queue.push(item)
        if(item.right != null)
            queue.push(item)
        queue.shift()
    }
}
```
## 请写一个递归函数实现求解树的高度
```javascript
function treeHeight(tree){
    if(tree==null) return 0 
    let leftHeight = treeHeight(tree.left)
    let rightHeight = treeHeight(tree.right)
    return Math.max(leftHeight, rightHeight)+1
}
```
## 请实现一个函数，判断一个树是否是平衡二叉树
平衡二叉树（Self-balancing binary search tree）又被称为AVL树（有别于AVL算法），且具有以下性质：它是一 棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
```javascript
function treeHeight(tree){
    if(tree==null) return 0 
    let leftHeight = treeHeight(tree.left)
    let rightHeight = treeHeight(tree.right)
    return Math.max(leftHeight, rightHeight)+1
}
function isAVL(tree){
    if (tree == null)return true
    let leftHeight = treeHeight(tree.left)
    let rightHeight = treeHeight(tree.right)
    if(Math.abs(leftHeight - rightHeight)>1)
        return false
    return isAVL(tree.left)&& isAVL(tree.right)
}
```
## 【选做题】请实现堆排序
```javascript
function heapSort(arr){
    let len = arr.length;
    if(len <=1) return
    function heapify(root){
        if(root >= len) return
        let left = root * 2 +1
        let right = root * 2 +2
        let largest = root
        if(left < len && arr[largest] < arr[left])
            largest = left
        if(right < left && arr[largest] < arr[right])
            largest = right
        if(largest != root){
            swap(arr,largest,root)
            heapify(largest)
        }
    }
    let m = Math.floor(len/2)
    while (m>=0){
        heapify(m)
        m--
    }
    let k = 0
    while (len > 0){
        swap(arr,0,len-1)
        heapify(0)
        len--
    }
}
```