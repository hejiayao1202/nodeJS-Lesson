const path=require("path");
const fs=require("fs");

console.log("创建文件夹：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");//把输入的转成数组
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));//截掉最后两个，是因为在系统中，最后有一个空格和回车
            console.log("文件目录创建成功！！");
            console.log("创建文件：");
            break;
        case "touch":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello file");
            console.log("文件创建成功！！");
            console.log("删除文件：");
            break;
        case "delete":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            console.log("文件删除成功！！");
            break;
        default:
            console.log("something error");
            break;
    }
})