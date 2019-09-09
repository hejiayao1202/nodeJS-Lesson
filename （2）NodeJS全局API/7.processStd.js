var obj={};
var message=["Name","Email","QQ","Mobile"];
var i=1;
console.log(message[0]+":");
//接受进程输入,每次按回车就会执行这个回调函数
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        //退出这个进程
        process.exit();
    }else{
        console.log(message[i++]+":");
    }
})