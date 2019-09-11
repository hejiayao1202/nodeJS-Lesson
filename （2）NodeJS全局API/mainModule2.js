const circle=require("./circleModule2.js");
console.log("输入圆的半径：");
// var r=process.argv[2];
process.stdin.on("data",function(r){
    circle.circumference(r);
    circle.area(r);
    process.exit();
})