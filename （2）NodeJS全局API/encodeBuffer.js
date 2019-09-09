var username=process.argv[2];
var password=process.argv[3];
console.log("用户名："+username+" 密码："+password);
if(username!=undefined&&password!=undefined){
    var str=username+":"+password;
    var buf=Buffer.from(str,"utf-8");
    console.log("base64加密："+buf.toString("base64"));
}else{
    console.log("用户名或密码不能为空");
}

