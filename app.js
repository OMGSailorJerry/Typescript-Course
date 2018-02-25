var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function claculateCirc(d) {
            return d * PI;
        }
        Circle.claculateCirc = claculateCirc;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function claculateTriang(width, length) {
        return width * length / 2;
    }
    MyMath.claculateTriang = claculateTriang;
})(MyMath || (MyMath = {}));
//Import Namespaces
/// <reference path="circleMath.ts"/>
/// <reference path="rectMath.ts"/>
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.claculateTriang(10, 20));
console.log(CircleMath.claculateCirc(3));
console.log(PI);
