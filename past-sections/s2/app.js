// let myName = 'Oleg';
// // myName = 32;
// let age = 22;
// let phones: any[] = ["home", "work"];
// phones = [100];
// // tuples
// let addres: [string, number] = ["Superstreet", 99];
// // enum
// enum Color {
//     Gray,           //0
//     Green = 100,    //100
//     Blue,           //101
//     Red = 4,        //4
//     Pink            //3
// }
// let myColor: Color = Color.Pink;
// console.log(myColor);
// // any 
// let car : any = 'BMW';
// console.log(car);
// car = { brand: 'BMW', series: 3}
// console.log(car);
// // funcitons
// function returnmyName(): string {
//     return myName;
// };
// console.log(returnmyName())
// // void
// function sayHello(): void {
//     console.log('Hello!');
// }
// // arguments types
// function multiply(value1: number, value2: number): number {
//     return value1 * value2;
// };
// // console.log(multiply(2, 'Max'));
// console.log(multiply(2, 10));
// let myMultiply: (a: number, b: number) => number;
// // myMultiply = sayHello;
// // myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(2, 4));
// // objects
// let userData: { name: string, age: number } = {
//     name: 'Oleg',
//     age: 32
// };
// // complex object
// let complex: {data: number[], output: (all: boolean) => number[]} = {
//     data: [100, 3.99, 10],
//     output: function(all: boolean): number[] {
//         return this.data;
//     }
// };
// // complex = {};
// // type alias
// type Complex = {data: number[], output: (all: boolean) => number[]};
// let complex2: Complex = {
//     data: [100, 3.99, 10],
//     output: function(all: boolean): number[] {
//         return this.data;
//     } 
// };
// // union types
// let myrealRealAge: number | string = 32;
// myrealRealAge = '32';
// // myrealRealAge = true;
// // check types
// // let finalValue = 'A string';
// let finalValue = 3;
// if (typeof finalValue == "number") {
//     console.log("Final value is a number");
// };
// // never
// function neverReturns():never {
//     throw new Error('An error!');
// };
// // neverReturns();
// // Nullable Types
// let canBuNull: number | null = 12;
// canBuNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = 4;
// canAlsoBeNull = null;
// let canThisBeAny: any = null;
// canThisBeAny = 12;
//# sourceMappingURL=app.js.map