
    var x=18;
    new Promise(function(resloved,rejected){
        var x=18;
        if(x==18){
            console.log("Eligible")
             resloved();
        }
        else{
            console.log("Not Eligible")
            rejected();
        }  
  });