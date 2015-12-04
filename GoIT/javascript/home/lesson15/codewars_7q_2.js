var Singleton = function(){

    if(!Singleton._instance) {
        return Singleton._instance = this;
    }

    return Singleton._instance;

};

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2);
obj1.test = 1;
console.log(obj2.test);