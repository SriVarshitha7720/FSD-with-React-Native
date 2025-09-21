function fun1(){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved(1);
        },1000)
    })
}
function fun2(value){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved(value+1);
        },1000)
    })
}
function fun3(value){
    return new Promise(function (resloved){
        setInterval(function(){
            resloved(value+1);
        },1000)
    })
}
async function Execute(){
    try{
        const result1= await fun1()
        const result2= await fun2(result1)
        const result3= await fun3(result2)
        // console.log(result1);
        // console.log(result2);
        console.log(result3);
    }
    catch (err){
        console.log(err)
    }
}
Execute();