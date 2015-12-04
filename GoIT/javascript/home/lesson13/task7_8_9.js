function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

//task 7
function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var foodMax = power / 100;

    this.addFood = function(items) {
        if (!this._enabled) {
            throw new Error("холодильник вимкнений");
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if ((food.length + arguments.length) <= foodMax) {
                    food.push(arguments[i]);
                } else {
                    throw new Error("надто багато їжі");
                };
            };
        };

    };

    this.getFood = function() {
        return food.slice();
    };

    
		//task 8
    this.filterFood = function(crit) {
        return food.filter(crit);
    };

    this.removeFood = function(item) {
        if (food.indexOf(item) > -1) {
            food.splice(food.indexOf(item), 1)
        };
    };
    
		//task 9  
    var parentDisable = this.disable;
    this.disable = function() {
        if (!food.length) {
            parentDisable();
        } else {
            throw new Error("Спочатку звільни холодильник");
        };
    };

};








var fridge = new Fridge(500);
fridge.enable();
//fridge.addFood("котлета");
//fridge.addFood("сік", "зелень");
//fridge.addFood("повидло", "пиріг", "торт"); // помилка, надто багато їжі

var fridgeFood = fridge.getFood();
console.log(fridgeFood);


fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сік",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "повидло",
    calories: 150
});

fridge.removeFood("нема такої їжі"); // без ефекту
console.log(fridge.getFood().length); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log(item.title); // сік, зелень
    fridge.removeFood(item);
});

console.log(fridge.getFood().length); // 2