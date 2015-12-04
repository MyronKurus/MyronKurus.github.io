Array.prototype.reverse = function () {

    for (var i = 0, j = this.length - 1; i < j; i++, j--) {
        var tmp = this[i]; // 1
        this[i] = this[j]; // [4, 2, 3, 4]
        this[j] = tmp;     // [4, 2, 3, 1]
    }

    return this;

};

var input = [1, 2, 3, 4];

console.log(input.reverse());

console.log(input);