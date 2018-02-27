// Simple Generic
function echo(data) {
    return data;
}
;
console.log(echo('Oleg'));
console.log(echo(27));
console.log(echo({ name: 'Oleg', age: 27 }));
// Better Generic
function BetterEcho(data) {
    return data;
}
;
console.log(BetterEcho('Oleg').length);
console.log(BetterEcho(27));
console.log(BetterEcho({ name: 'Oleg', age: 27 }).name);
//Builtin Generic
var testResult = [1.94, 2.33];
testResult.push(-2.99);
// testResult.push('-2.99');
console.log(testResult);
// Arrays 
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
;
printAll(['Apple', 'Banana']);
// Generic Types
var echo2 = BetterEcho;
console.log(echo2('Something'));
// Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplayValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplayValue = 20;
console.log(simpleMath.calculate());
//# sourceMappingURL=app.js.map