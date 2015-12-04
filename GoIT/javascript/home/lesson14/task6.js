function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function() {
    var date = new Date();

    var hrs = date.getHours();
    if (hrs < 10) {
        hrs = '0' + hrs
    };

    var mins = date.getMinutes();
    if (mins < 10) {
        mins = '0' + mins
    };

    var secs = date.getSeconds();
    if (secs < 10) {
        secs = '0' + secs
    };

    console.log(this._template.replace('h', hrs).replace('m', mins).replace('s', secs));
};

Clock.prototype.start = function() {
    console.log('started');
    this._render();
    var self = this;

    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};



var clock = new Clock({
    template: 'h:m:s'
});
clock.start();