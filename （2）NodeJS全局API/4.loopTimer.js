var timer=setInterval(function loop(){
    console.log("I will loop forever!");
},500);
setTimeout(function(){
    console.log("Game Over");
    clearInterval(timer);
},5000);