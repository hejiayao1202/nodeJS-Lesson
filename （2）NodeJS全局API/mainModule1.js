const circle=require("./circleModule1.js");
console.log("输入圆的半径：");
// var r=process.argv[2];
process.stdin.on("data",function(r){
    console.log(circle.circleFun(r));
    process.exit();
})