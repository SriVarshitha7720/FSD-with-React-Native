function fun1(){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved();
        },1000)
    })
}
function fun2(value){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved();
        },1000)
    })
}
function fun3(value){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved();
        },1000)
    })
}

fun1().then(function(){
    console.log("Fun-1 completed");

fun2().then(function(){
    console.log("Fun-2 completed")

fun3().then(function(){
    console.log("Fun-3 completed")
})
})
})