console.log('test s_9');

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('hi');
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}
@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}
@logging(true)
@printable
class Plant {
    name = 'Green plant';
}

const plant = new Plant();
(<any>plant).print();

// Method Decorator
// Property Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean): any {
    return function(target: any, propName: string) {
        const newDescroptor: PropertyDescriptor = {
            writable: value
        };
        return newDescroptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
};
project.calcBudget();
console.log(project);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number)  {
    console.log(`Target:`, target);
    console.log(`methodName:`, methodName);
    console.log(`paramIndex:`, paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printSudntsNumber(mode: string, @printInfo printAll: boolean) {
        if ( printAll ) {
            console.log(1000);
        } else {
            console.log(200);
        }
    }
}

const course = new Course('New Сщгкыу');
course.printSudntsNumber('any', true);
course.printSudntsNumber('any',  false);