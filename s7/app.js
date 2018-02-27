function greet(person) {
    console.log("hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Oleg',
    hobbies: ['Coocking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: 'Oleg', age: 32});
changeName(person);
greet(person);
person.greet('Mykhailov');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Sonya';
myPerson.lastName = 'Mykhailova';
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 32,
    firstName: 'Oleg',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map