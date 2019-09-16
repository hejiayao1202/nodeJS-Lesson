const Dog=require("./dog.js");//js后缀可以不写
var dog1=new Dog("taidi",4);
var dog2=new Dog("zangao",8);

function barkFun(){
    console.log(this.name+"barked! energy:"+this.energy);
}

dog1.on("bark",barkFun);//定义事件
dog2.on("bark",barkFun);
var intervalId=setInterval(function(){
    if(dog1.energy>0){
        dog1.emit("bark");
        dog2.emit("bark");
    }else{
        dog1.emit("bark");
        intervalId.unref();
    }
    dog1.energy=dog1.energy-1;
    dog2.energy=dog2.energy-1;
},1000);
