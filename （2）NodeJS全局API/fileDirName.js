const http=require("http");
const fs=require("fs");
const path=require("path");

var server=http.createServer(function(req,res){
    var htmlPath=path.join(__dirname,"/views/view.html");//获取路径
    console.log(htmlPath);

    var htmlContent=fs.readFileSync(htmlPath);//读取html里的内容

    res.writeHead(200,{"Content-Type":"text/html"});//写入
    res.write(htmlContent);
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");