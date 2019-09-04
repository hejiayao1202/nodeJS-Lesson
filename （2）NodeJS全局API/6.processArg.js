var argv=process.argv[2];
if(argv==undefined || argv=="-h"){
    console.log("请输入数学运算式");
}else{
    console.log(argv+"="+eval(argv));
}