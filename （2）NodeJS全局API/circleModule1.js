function circleFun(r){
        var circunference= function(r){
            return 2*r*Math.PI;
        }
        var area=function(r){
            return r*r*Math.PI;
        }
        return{
            circunference:circunference(r),
            area:area(r)
        }
}

module.exports={
    circleFun:circleFun
}