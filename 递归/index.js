function fib(n){
    if(n === 1 || n === 0 )return 1
    return fib(n-1) + fib(n -2 )
}
// fib 的时间复杂度为 O(fib(n))

function hanno(n,a,b,c){
    if ( n  ===1 ){
        console.log(a + " > " + c)
        return
    }
    hanno(n-1,a,c,b)
    console.log(a + " > " + c)
    hanno(n-1,b,a,c)
}
function swap(arr,a,b){
    [arr[a],arr[b]] = [arr[b],arr[a]]
}
function arrange(arr,k){
    let len = arr.length
    if (k >= len-1){
        console.log(arr)
        return
    }
    for(let i = k ;i < len ; i++){
        swap(arr,k,i)
        arrange(arr,k+1)
        swap(arr,k,i)
    }
}
function search(arr,l,r,t){
    if(l > r)
        return -1

    let m  = Math.floor((l + r)/2)
    if(arr[m]===t) return m

    else{
       if(t < arr[m])
           return  search(arr,l, m-1,t)
        if(arr[m] < t)
           return  search(arr,m+1,r,t)
    }
}

