console.log("当前进程运行所在的操作系统平台："+process.platform);
console.log("当前进程的id："+process.pid);
console.log("当前执行程序的可执行文件路径："+process.argv[0]);
console.log("当前执行程序的脚本文件路径："+process.argv[1]);
console.log("进程的当前工作目录："+process.cwd());
console.log("V8引擎内存分配："+process.memoryUsage().heapTotal+"内存正在使用大小："+process.memoryUsage().heapUsed);
