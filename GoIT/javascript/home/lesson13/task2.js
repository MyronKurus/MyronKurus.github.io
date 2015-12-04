function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значення повинно бути позитивним");
        }
        if (amount > capacity) {
            throw new Error("Неможна залити води більше, ніж " + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        console.log( 'Кава готовf!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };
    
    this.addWater = function (amount){
        this.setWaterAmount(amount + waterAmount);
    };

}