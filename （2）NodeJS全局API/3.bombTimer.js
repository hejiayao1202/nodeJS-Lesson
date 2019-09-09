function Bomb(){
    this.message="bomb!!!";
}
Bomb.prototype.explode=function(){
    console.log(this);
    console.log(this.message);
}
var bomb=new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);//这是在方法里嵌套了一个方法，所以this指向有问题