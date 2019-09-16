const fs=require("fs");
const http=require("http");
const path=require("path");

http.createServer(function(req,res){
    var readFile=path.join(__dirname,"./data.txt");
    var readStream=fs.createReadStream(readFile);
    readStream.pipe(res);
}).listen(8081);

console.log("server is listening 8081");