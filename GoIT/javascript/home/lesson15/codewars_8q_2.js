var Ghost = function() {

    var self = this;

    (function() {
        var value = Math.random();
        if (value < 0.25) {
            self.color = 'white';
        } else if (value > 0.25 && value < 0.5) {
            self.color = 'yellow';
        } else if (value > 0.5 && value < 0.75) {
            self.color = 'purple';
        } else {
            self.color = 'red';
        }
    }());