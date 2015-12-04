function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    var crewDraft = this.crew * 1.5;
    return this.draft - crewDraft > 20;
};

var titanic = new Ship(20,10);

console.log(titanic.isWorthIt());