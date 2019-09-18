const http=require("http");
const fs=require("fs");
const path=require("path");
var arg=process.argv[2];
// var path1=path.join(__dirname,"./fileReader1.js"); 获取当前路径可以用process.argv[1]
/**
    * fs.readFile()是一个异步方法，执行到该句不会等待文件读取完成，
    * 就直接执行后面的语句，但是回调函数是等到文件读取完成之后才执行的，
    * 如果有的语句涉及回调函数里的内容，那么也要写到回调函数里
*/ 

http.createServer(function(req,res){
    if(arg==undefined){
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);//判断是否非空，是否有异常
            }else{
                res.writeHead(200,{"Content-Type":"text/html'charset=utf-8"})
                res.end(data.toString());//写到外边，执行res.end()文件还读取不完;data是二进制
            }
        })
    }else{
        var filePath=path.join(__dirname,"./"+arg+".txt");
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200,{"Content-Type":"text/html'charset=utf-8"})
                    res.end(data.toString());
                }
            })
        }else{
            res.writeHead(200,{"Content-Type":"text/html'charset=utf-8"})
            res.end("error文件不存在");
        }
    }
    
}).listen(8081);

