var time=600;
var sec=0;
const interval=setInterval(function(){
    time=time-1;
    sec=sec-1;
    // console.log(parseInt(time/60));
    // console.log(600%60);
    // clearInterval(setInterval(5000));
    document.getElementsByClassName("minute")
    document.getElementsByClassName("minute")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText=time%60;
    
},1000);
console.log(interval);