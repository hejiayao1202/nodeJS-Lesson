const http=require("http");
const path=require("path");
const url=require("url");
const fs=require("fs");
const queryString=require("querystring");

var chapterList = [
    {
        "chapterId": 1,
        "chapterName": "hello ,这是后台取到的数据",
        "imgPath": "images/1442457564979540.jpeg",
        "chapterDes": "注定，有些路，只能一个人走；有些事，",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 1022
    },
    {
        "chapterId": 2,
        "chapterName": "那些不是事",
        "imgPath": "images/1442201163344838-lp.jpg",
        "chapterDes": "人生，原本就该这样。再大的事，无非是个经历而己。明天的太阳照样升起，就像罗俊杰个人博客​的时候水来土掩，兵来将挡。任何事情都会成为过去，只要有好的心态，就可以面对人生的.",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    },
    {
        "chapterId": 3,
        "chapterName": "只想，留住心中的那份静美",
        "imgPath": "images/1442642178239101-lp.jpg",
        "chapterDes": "在这个鸟语花香的季节,踏着早晨罗俊杰个人博客的一缕光芒在小路间走着,呼吸着这自然的清晰空气，只想，衣袂飘飘，信步于绿荫小道，或俯首听花开，或低眉赏花香，盈脉脉春意，于眼波中...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 202
    },
    {
        "chapterId": 4,
        "chapterName": "所以才会美",
        "imgPath": "images/1442539025939884-lp.jpg",
        "chapterDes": "人，越简单就会越快乐;水，掺杂东西越少才会显得清澈靓丽。大自然越安静,才会体现它的本质。人生就是这样，倘若有运，不用祈求，因为祈求也是无用。倘若无运，无需悲伤，因为悲...",
        "chapterContent": "有人说，生活生活，就是生下来活下去，也有人说，生容易，活容易，生活不容易。有个朋友曾经和我说，这个世界，大多数人都没有生活，他们有的仅仅是生存。我赞同这种说法吧，只是生存，对于我们可能都是一种奢侈。每个人都在努力，努力为着这个本来不属于我们的生活和努力。对于含着金钥匙而成长的人，我们又羡慕又嫉妒。可我们没有想过，他们的先人在斩荆棘的时候，付出的艰辛和艰苦，才有了后代荣华。生活是什么,其实在我看来，生活是一种需要，在你最需要亲人的时候，亲人已经突然不在了。子欲养而亲不待，说得成其深，对于我们是一种思考。他们的离开，对于我们都是一种打击，可也是一种思考。离开时痛苦的，可是生活就是有生老病死，当你一直都习惯存在的人已经离开的时候，慢慢地，你会看透很多，这就是你面对生活所需要的。生活是什么？其实在我看来，生活就是一种打拼，当过年过节的时候你看着别人的父母带着自己的孩子快乐的回家的时候、尔你还只能在大街上流浪的时候。许多游子和打工的人或许都有这种感觉吧，为了赚钱，为了养家。当我们看到留守儿童那迷茫孤寂的眼神，不由得心痛的时候，或许你能理解那份父母为了儿女在外打拼的奔波吧。其实在我看来，生活就是一种漠然，当你真正遇到困难而朋友都不能帮你的时候、怕你还不了钱的时候。你只能自己默默面对这一切，这一切让你十分无奈，可是你明白了一个道理，借给你是道理，不借给你是合理。人之常情，所以，想怪不能怪的时候，你留下的只是无奈。</p><p>生活是什么？</p><p>其实生活就是无奈的活着，不得不无奈的活着。我们活在这个世界上，为的只是寻找一个目标，而生活，给我们的感受，却是无奈与绝望的迷茫。这时候你不能说生活是美好和美满的吧？可是正因为有痛苦，无奈与悲伤，我们才有开心的日子。也正因为有了生存，才有了生活。</p><p>无奈的生活，才给我们无奈的心情，无奈的心情才有了悠然见南山的豁达与开朗，这就是生活，这种生活才会有着无限的魅力，也只有这种魅力才能吸引我们一直向前",
        "publishTimer": "2019-08-19",
        "author": "admin",
        "views": 102
    }
]
var userList = [
    {username: "admin", pwd: "admin"}
]

http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathName=urlObj.pathname;

    // chapterList
    if(pathName=='/list'){
        showChapterlist(res);
    }else if(pathName=="/getAllList"){
        showAllClist(res);
    }
    // chapter
    else if(pathName=='/detail'){
        showChapter(res);
    }
    else if(pathName=="/allDetail"){
        showAllChapter(req,res);
    }
    // login
    else if(pathName=='/login'){
        showLogin(res);
    }else if(pathName=='/logining'){
        theLogining(req,res);
    }
    // list
    else if(pathName=='/listmanager'){
        showList(res);
    }
    else if(pathName=="/listData"){
        listData(res);
    }
    // addCapter
    else if(pathName=='/addChapter'){
        showAddchapter(res);
    }
    else if(pathName=="/add"){
        addList(req,res);
    }
    // 附加的文件
    else if(pathName.slice(0,4)=='/css'){
        showCss(res,pathName);
    }else if(pathName=='/js/baiduTemplate.js'){
        showJS(res);
    }else if(pathName.slice(0,7)=='/images'){
        showImage(res,pathName);
    }else if(pathName=='/login_bg.jpg'){
        var imgPath=path.join(__dirname,'/login_bg.jpg');
        var imgFile=fs.readFileSync(imgPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imgFile);
    }else if(pathName=='/bg.jpg'){
        var imgPath=path.join(__dirname,'/bg.jpg');
        var imgFile=fs.readFileSync(imgPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imgFile);
    }
}).listen(8083);
console.log("servering");

function showChapterlist(res){
    var clistPath=path.join(__dirname,'/chapterList.html');
    var clistFile=fs.readFileSync(clistPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(clistFile);
}
function showAllClist(res){
    var listStr=JSON.stringify(chapterList);
    res.end(listStr);
}

function showChapter(res){
    var chapterPath=path.join(__dirname,"/chapter.html");
    var chapterFile=fs.readFileSync(chapterPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(chapterFile);
}
function showAllChapter(req,res){
    var urlObject=url.parse(req.url,true);
    for(var i=0;i<chapterList.length;i++){
        if(urlObject.query.chapterId==chapterList[i].chapterId){
            var list=JSON.stringify(chapterList[i]);
            res.end(list);
        }
    }
    
}

function showLogin(res){
    var loginPath=path.join(__dirname,'/login.html');
    var loginFile=fs.readFileSync(loginPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(loginFile);
}
function theLogining(req,res){
    var theData="";
    req.on("data",function(chunk){
        theData+=chunk;
    });
    req.on("end",function(){
        var user=queryString.parse(theData);
        // console.log(user);
        var username=user.username;
        var pwd=user.pwd;
        for(var i=0;i<userList.length;i++){
            if(userList[i].username==username&&userList[i].pwd==pwd){
                res.end("login success");
            }else{
                res.end("login failure");
            }
        }
    })
}

function showList(res){
    var listPath=path.join(__dirname,'/list.html');
    var listFile=fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(listFile);
}
function listData(res){
    var listdata=JSON.stringify(chapterList);
    res.end(listdata);
}

function showAddchapter(res){
    var achapterPath=path.join(__dirname,'/addChapter.html');
    var achapterFile=fs.readFileSync(achapterPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(achapterFile);
}
function addList(req,res){
    var addData="";
    req.on("data",function(chunk){
        addData+=chunk;
    });
    req.on("end",function(){
        var add=queryString.parse(addData);
        var title=add.title;
        var content=add.content;
        var addObj={
            "chapterId": chapterList[chapterList.length-1].chapterId+1,
            "chapterName": title ,
            "imgPath": "",
            "chapterDes": content,
            "chapterContent": content,
            "publishTimer": new Date().toLocaleDateString(),
            "author": "admin",
            "views": 234
        };
        chapterList.push(addObj);
        res.end("add success");
    })
}

function showCss(res,pathName){
    var cssPath=path.join(__dirname,'/css'+pathName.slice(4));
    var cssFile=fs.readFileSync(cssPath);
    res.writeHead(200,{"Content-Type":"text/css"});
    res.end(cssFile);
}

function showJS(res){
    var jsPath=path.join(__dirname,'/js/baiduTemplate.js');
    var jsFile=fs.readFileSync(jsPath);
    res.writeHead(200,{"Content-Type":"text/js"});
    res.end(jsFile);
}

function showImage(res,pathName){
    if(pathName.slice(0,11)=='/images/img'){
        var imagePath=path.join(__dirname,'/images/img'+pathName.slice(11));
        var imageFile=fs.readFileSync(imagePath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imageFile);
    }else{
    var imagePath=path.join(__dirname,'/images'+pathName.slice(7));
    var imageFile=fs.readFileSync(imagePath);
    res.writeHead(200,{"Content-Type":"image/jpg"});
    res.end(imageFile);
    }
}
/**
 * 1.页面呈现：访问特定资源路径显示对应页面
 * 2.博客列表：数据从服务器来获取，jquery ajax从服务端获取数据 $.get("",function(){动态拼接})
 * 3.阅读全文：在jquery ajax里生成阅读全文超链接http://localhost:8083/detail?chapterId=+拼接内容,打开文章详情页
 * 4.详情页：再发一次请求$.get() 根据chapterId获取内容
 * 
 * 后台就是提交表单 post处理
*/

