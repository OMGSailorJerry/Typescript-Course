// class Person {
//     // public by default
//     name: string;
//     private type: string;
//     protected age: number = 32;
//     constructor(name: string, public username: string) {
//         this.name = name;
//     }
//     printAge() {
//         console.log(this.age);
//         this.setType('Developer');
//     }
//     private setType(type: string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }
// const preson = new Person('Oleg', 'oleg');
// console.log(preson.name, preson.username);
// preson.printAge();
// // preson.setType('Developer');
// // Inheritance
// class Oleg extends Person {
//     name = 'Oleg2';
//     constructor(username: string) {
//         super('Oleg', username);
//         this.age = 31;
//     }
// }
// const oleg = new Oleg('anna');
// console.log(oleg);
// //Getters & Setters
// class Plant {
//     private _species: string = 'Default';
//     get species() {
//         return this._species;
//     }
//     set species(val: string) {
//         if (val.length > 3) {
//             this._species = val;
//         } else {
//             this._species = "Default";
//         }
//     }
// }
// let plant = new Plant();
// console.log(plant.species);
// plant.species = 'ab';
// console.log(plant.species);
// plant.species = 'abcd';
// console.log(plant.species);
// // Static Properties & Methods
// class Helpers {
//     static PI: number = 3.14;
//     static clacCircumference(diameter: number): number {
//         return this.PI * diameter;
//     }
// }
// console.log(2 * Helpers.PI);
// console.log(Helpers.clacCircumference(5));
// // Abstract Classes
// abstract class Project {
//     projectName: string = 'Default';
//     budget: number  = 1000;
//     abstract changeName(name: string): void;
//     calcBudget() {
//         return this.budget * 2;
//     }
// }
// class ITProject extends Project {
//     changeName(name: string): void {
//         this.projectName = name;
//     }
// }
// let newProject = new ITProject();
// console.log(newProject);
// newProject.changeName('startup');
// console.log(newProject);
// // private constructors
// class OnlyOne {
//     private static instance: OnlyOne;
//     public name: string;
//     private constructor(name: string) {
//         this.name = name;
//     }
//     static getInstance() {
//         if (!OnlyOne.instance) {
//             OnlyOne.instance = new OnlyOne('The Only One');
//         }
//         return OnlyOne.instance;
//     }
// }
// // let wrong = new OnlyOne('The Only One');
// let right = OnlyOne.getInstance();
// console.log(right.name);
// right.name = 'Something else';
//# sourceMappingURL=app.js.map