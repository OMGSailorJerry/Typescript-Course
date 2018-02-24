var myName = 'Oleg';
// myName = 32;
var age = 22;
var phones = ["home", "work"];
phones = [100];
// tuples
var addres = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Pink"] = 5] = "Pink"; //3
})(Color || (Color = {}));
var myColor = Color.Pink;
console.log(myColor);
// any 
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// funcitons
function returnmyName() {
    return myName;
}
;
console.log(returnmyName());
// void
function sayHello() {
    console.log('Hello!');
}
// arguments types
function multiply(value1, value2) {
    return value1 * value2;
}
;
// console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 4));
// objects
var userData = {
    name: 'Oleg',
    age: 32
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myrealRealAge = 32;
myrealRealAge = '32';
// myrealRealAge = true;
// check types
// let finalValue = 'A string';
var finalValue = 3;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
;
// never
function neverReturns() {
    throw new Error('An error!');
}
;
// neverReturns();
// Nullable Types
var canBuNull = 12;
canBuNull = null;
var canAlsoBeNull;
canAlsoBeNull = 4;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
