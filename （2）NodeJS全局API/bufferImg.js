const http=require("http");
const path=require("path");
const fs=require("fs");

http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.png");
    var imgBuffer=fs.readFileSync(imgPath);
    var dataUri=imgBuffer.toString("base64");

    var imgSrc="data:image/png;base64,"+dataUri;
    var htmlStr="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'></body>"+"</html>";

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();

}).listen(8081);

console.log("server is listening 8081");