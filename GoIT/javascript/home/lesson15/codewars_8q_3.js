function NameMe(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

    this.name = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Doe');

console.log(n.firstName);
console.log(n.lastName);
console.log(n.name);