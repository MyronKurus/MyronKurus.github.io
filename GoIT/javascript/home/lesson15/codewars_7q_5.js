var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function(str) {
    this._str = str;
};

MyNamespace.MyClass.prototype.sayHello = function() {
    return this._str;
};

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello();

console.log(myObject.sayHello());
console.log(phrase);