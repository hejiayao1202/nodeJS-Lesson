const events=require("events");//原生模块
const EventEmitter=events.EventEmitter;//events里的一个函数

function Dog(name,energy){
    EventEmitter.call(this);//把EventEmitter里的this指向换成dog的this指向
    this.name=name;
    this.energy=energy;

}
Dog.prototype.__proto__=EventEmitter.prototype;//把EventEmitter prototype方法继承过来

module.exports=Dog;