// // let & const
// let variable = "test";
// variable = "test 2";
// const maxLevel = 100;
// // maxLevel = 99;
// function reset() {
//     // console.log(variable);
//     let variable = null;
//     console.log(variable);
// }
// reset()
// console.log(variable);
// // Arrow funciton
// console.log('ARROW FUNCTIONS');
// const addNumbers = function(number1: number, number2: number): number {
//     return number1 + number2;
// };
// console.log(addNumbers(3, 10));
// const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
// console.log(multiplyNumbers(3, 10));
// const greet = () => {
//     console.log('Hello!');
// };
// greet();
// const greetFriend = friend => console.log(friend);
// greetFriend('Max');
// //Default Parametrs
// console.log('DEFAULT PARAMETERS');
// const countdown = (start: number = 10): void => {
//     while (start > 0) {
//         start--;
//     }
//     console.log('Done!', start);
// };
// countdown();
// // Rest & Spread
// console.log('REST & SPREAD');
//  const numbers = [1, 10, 99, -5];
//  console.log(Math.max(33, 99, 10, -3));
//  console.log(Math.max(...numbers));
// //  function makeArray(name: string, ...args: number[]) {
// //      return args;
// //  }
// //  console.log(makeArray('Oleg', 1, 2, 3));
//  function makeArray(...args: number[]) {
//      return args;
//  }
//  console.log(makeArray(1, 2, 3));
//  // Destruction
//  console.log('DISTRUCTION');
//  const myHobbies = ['Cooking', 'Sports'];
// //  const hobby1 = myHobbies[0];
// //  const hobby2 = myHobbies[1];
//  const [hobby1, hobby2] = myHobbies;
//  console.log( hobby1, hobby2 );
//  const userData = {userName: 'Oleg', age: 32};
// //  const userName = userData.userName;
// //  const age = userData.age;
// const {userName: myName, age: myAge} = userData;
// console.log(myName, myAge);
// // Template Literals
// const userName = 'Oleg';
// const greeting = `Hello!
// I'm ${userName}`;
// console.log(greeting);
//# sourceMappingURL=app.js.map