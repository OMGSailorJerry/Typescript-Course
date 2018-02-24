let myAge: number = 32;
let myName: string = 'Oleg';

// myName = 30;

let anything;
anything = 42;

function controlMe(isTrue: boolean, someThingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 42;
    }
    result = 32;
    return result;
}