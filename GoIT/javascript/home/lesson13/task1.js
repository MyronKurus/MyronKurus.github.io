function CoffeeMachine(power, capacity) {
    var power = power;
    
    this.getPower = function(){
            return power;
    };
    
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значення повинно бути позитивним");
        }
        if (amount > capacity) {
            throw new Error("Неможна залити води більше, ніж " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

}

var coffeeMachine = new CoffeeMachine(2000, 1000);

console.log(coffeeMachine.getPower());