function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var runningStatus = false;
    
    this.isRunning = function() {
        return runningStatus;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... перевірки пропущені для лаконічності
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Кава готова!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        runningStatus = true;
        timerId = setTimeout(function() {
            runningStatus = false;
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
console.log( 'В процесі: ' + coffeeMachine.isRunning() ); // В процесі: true

coffeeMachine.setOnReady(function() {
    console.log( "Після: " + coffeeMachine.isRunning() ); // Після: false
});