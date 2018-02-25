// Exercise 1 - How was your TypeScript Class?
class Car {
    public name: string;
    public acceleration: number = 0;
    
    constructor(name: string){
        this.name = name;
    };
    
    honk() {
        console.log('Tooooooooooot!');
    };

    accelerate(speed: number) {
        this.acceleration += speed;
    };
};
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width: number = 0;
    length: number = 0;
};
class Rectangle extends BaseObject {    
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
rectangle.width = 6;
rectangle.length = 2;

console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = '';

    get firstName(): string {
        return this._firstName;
    }

    set firstName(val: string) {
        if (val.length > 3) {
            this._firstName = val;
        }
    }
}
const person = new Person();
console.log('Call-1: ', person.firstName);
person.firstName = "Ma";
console.log('Call-2: ', person.firstName);
person.firstName = "Maximilian";
console.log('Call-3: ', person.firstName);