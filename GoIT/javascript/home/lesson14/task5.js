function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};


var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("Яблуко");
speedy.found("Горіх");

console.log( speedy.food.length ); 
console.log( lazy.food.length ); 