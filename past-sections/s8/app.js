// // Simple Generic
// function echo(data: any) {
//     return data;
// };
// console.log(echo('Oleg'));
// console.log(echo(27));
// console.log(echo({name:'Oleg', age: 27}));
// // Better Generic
// function BetterEcho<T>(data: T) {
//     return data;
// };
// console.log(BetterEcho('Oleg').length);
// console.log(BetterEcho<number>(27));
// console.log(BetterEcho({name:'Oleg', age: 27}).name);
// //Builtin Generic
// const testResult: Array<number> = [1.94, 2.33];
// testResult.push(-2.99);
// // testResult.push('-2.99');
// console.log(testResult);
// // Arrays 
// function printAll<T>(args: T[]) {
//     args.forEach((el) => console.log(el));
// };
// printAll<string>(['Apple', 'Banana']);
// // Generic Types
// const echo2: <T>(data: T) => T = BetterEcho;
// console.log(echo2<string>('Something'));
// // Generic Classes
// class SimpleMath<T extends number | string, U extends number | string> {
//     baseValue: T;
//     multiplayValue: U;
//     calculate(): number {
//         return +this.baseValue * +this.multiplayValue;
//     }
// }
// const simpleMath = new SimpleMath<string, number>();
// simpleMath.baseValue = '10';
// simpleMath.multiplayValue = 20;
// console.log(simpleMath.calculate());
//# sourceMappingURL=app.js.map