function dosth(para,callback){
    setTimeout(()=>{
        callback(null,para * para)
    },1000)
}
let dosthPromise = para => new Promise(resolve => {
    dosth(para,(err,data)=>{
        resolve(data)
    })
})

function* serialGenerator(){
    for (let i =0 ;i<10 ;i++){
        let data = yield dosthPromise(i) //将异步函数控制权交给外界 ，从外界获取上次异步函数的的执行结果

        //get data and do more thing here
        console.log(data)
    }
}

function run(iter) {
    function next(err,data){
        let {value:task,done:isDone} =iter.next(data)
        if(isDone)return
        task.then(result => {
            next(null,result)
        })
    }
    next()
}

run(serialGenerator())