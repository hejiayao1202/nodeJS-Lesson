const http=require("http");
const fs=require("fs");
const path=require("path");
var arg=process.argv[2];

http.createServer(function(req,res){
    if(arg==undefined){
        var reader=fs.createReadStream(process.argv[1]);//流读取，不是一次性读取
        reader.pipe(res);//管道
    }else{
        var filePath=path.join(__dirname,"./"+arg+".txt");
        if(fs.existsSync(filePath)){
            var reader=fs.createReadStream(filePath);//流读取
            reader.pipe(res);
        }else{
            res.writeHead(200,{"Content-Type":"text/html'charset=utf-8"})
            res.end("error文件不存在");
        }
    }
    
}).listen(8081);

