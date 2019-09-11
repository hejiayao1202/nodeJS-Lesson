function circumference(r){
    console.log("圆的周长："+2*r*Math.PI);
}
function area(r){
    console.log("圆的面积："+r*r*Math.PI);
}

module.exports={
    circumference:circumference,
    area:area
}