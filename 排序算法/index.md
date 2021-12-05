# 问答题
## 常见的排序算法有哪7种？平均，最小，最大时间复杂度各是什么？
1. 冒泡排序 平均 n^2 最好 n 最差 n^2
2. 插入排序 平均 n^2 最好 n 最差 n^2
3. 选择排序 平均 n^2 最好 n^2 最差 n^2
4. 希尔排序 平均 nlog^2n 最好 n 最差 nlog^2n 
5. 堆排序  平均 nlog^2n 最好 nlog^2n 最差 nlog^2n
6. 归并排序 平均 nlog^2n 最好 nlog^2n 最差 nlog^2n
7. 快速排序 平均 nlog^2n 最好 nlog^2n 最差 n^2
## 希尔排序为什么要使用插入排序作为每一轮的排序算法？它和插入排序有什么区别？
希尔排序利用间隔序列优化插入排序 当数据排序较好时插入排序能够更快地排序

希尔排序通过间隔使插入排序从广到小的视角优化排序结构，使得插入排序交换数据有较宽步长

步长的选择影响希尔排序的时间复杂度
## 快速排序算法流程是什么？什么时候会达成最差时间复杂度？
1. 取得pivot
2. 将数组比pivot小的放左边 比 pivot大的 放 右边
3. 对pivot 左右数组重复1.2 直到数组小于2个元素

基于特定pivot的选择策略(最左值)以下情况导致最差
1. 数组完全倒序
2. 数组数据相同 或已经排好序

#代码
```javascript
let arr = [5,4,3,2,1]

function bubble(arr){
    let len = arr.length
    for(let  i=0 ; i < len-1; i++)
        for(let j=0; j <len-1-i ;j++)
            if(arr[j]>arr[j+1])
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
}
function insertSort(arr,gap){
    let len  = arr.length
    let pre,curr
    for (let i = gap; i< len;i++){
        pre = i -gap
        curr = arr[i]
        while (pre >=0  && curr < arr[pre]){
            arr[pre + gap ] = arr[pre]
            pre -=gap
        }
        arr[pre+gap] = curr
    }
}
function selectSort(arr){
    let len  = arr.length
    let minIndex
    for(let i = 0 ; i< len -1 ;i++){
        minIndex = i
        for(let j = i+1;j<len ;j++ ){
            if(arr[j]< arr[minIndex])
                minIndex = j
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
}
function shellSort(arr){
    let len  = arr.length
    let gap = 1
    while (gap < len/3)
        gap = gap * 3 +1

    for(;gap>0;gap = Math.floor(gap/3))
        insertSort(arr,gap)
}

function quickSort(arr,l,r) {
    if(l >= r) return
    let [s,e] = [l,r]
    let m = arr[s]
    while (s <  e){
        while (s < e && m <= arr[e]) e--
        arr[s] = arr[e]
        while (s < e && arr[s] <= m) s++
        arr[e] = arr[s]
    }
    arr[s] = m
    quickSort(arr,l,s)
    quickSort(arr,s+1,r)
}
function quickSortHelper(arr) {
    quickSort(arr,0,arr.length-1)
}
function heapSort(arr){
    let len  = arr.length
    function swap(a,b){
        [arr[a],arr[b]] = [arr[b],arr[a]]
    }
    function makeHeap(i){
        let left = 2*i +1
        let right = 2*i +2
        let largest  = i
        if(left < len  && arr[left] > arr[largest])
            largest =left
        if(right < len && arr[right] > arr[largest])
            largest = right
        if(largest !== i){
            swap(largest,i)
            makeHeap(largest)
        }
    }

    for(let i = Math.floor(len/2) ; i>= 0;i--)
        makeHeap(i)

    for(let i = len -1 ;i >0;i--){
        swap(0,i)
        len --
        makeHeap(0)
    }
}
function mergeSort(arr){
    if(arr.length <2) return arr

    let mid = Math.ceil(arr.length/2)
    let left = arr.splice(0,mid)
    let right = arr.splice(-mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left, right) {
    let res = []
    while (left.length && right.length){
        if(left[0]< right[0])
            res.push(left.shift())
        else
            res.push(right.shift())
    }
    while (left.length)res.push(left.shift())
    while (right.length)res.push(right.shift())
    return res
}

```