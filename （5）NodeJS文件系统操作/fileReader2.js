const http=require("http");
const fs=require("fs");
const path=require("path");
var arg=process.argv[2];

http.createServer(function(req,res){
    if(arg==undefined){
        fs.open(process.argv[1],"r+",function(err,fd){//fd是文件标识符，fid
            var statObj=fs.statSync(process.argv[1]);//文件信息
            var buf=Buffer.alloc(statObj.size);//把读到的放进去
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){//by是字节个数，buff=buf
                if(err){
                    console.log(err);
                }else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }else{
        var filePath=path.join(__dirname,"./"+arg+".txt");
        if(fs.existsSync(filePath)){
            fs.open(filePath,"r+",function(err,fd){//fd是文件标识符，fid
                var statObj=fs.statSync(filePath);//文件信息
                var buf=Buffer.alloc(statObj.size);//把读到的放进去
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){//by是字节个数，buff=buf
                    if(err){
                        console.log(err);
                    }else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })
            })
        }else{
            res.writeHead(200,{"Content-Type":"text/html'charset=utf-8"})
            res.end("error文件不存在");
        }
    }
    
}).listen(8081);

