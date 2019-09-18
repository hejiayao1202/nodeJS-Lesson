const fs=require("fs");
const path=require("path");

var fileName=process.argv[2];
var pathName=path.join(__dirname,fileName);

//先判断是否存在
if(fs.existsSync(pathName)){
    var statObj=fs.statSync(pathName);
    if(statObj.isFile()){//如果是文件，则直接删除
        fs.unlinkSync(pathName);
    }else{
        delDir(pathName);//定义一个递归函数
    }
}else{
    console.log("not exist");
}

function delDir(pathName){
    //先判断这个文件夹里有什么文件
    var files=fs.readdirSync(pathName);
    for(var i=0;i<files.length;i++){
        var pathName1=path.join(pathName,files[i]);
        var statObj=fs.statSync(pathName1);
        if(statObj.isFile()){//如果是文件，则直接删除
            fs.unlinkSync(pathName1);
        }else if(statObj.isDirectory()){//是否为目录
            delDir(pathName1);//执行回调函数
        }
    }
    fs.rmdirSync(pathName);//删除文件目录
}