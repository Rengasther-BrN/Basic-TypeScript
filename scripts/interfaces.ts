function printName( person: {name:string}): void {
    console.log(person.name)
}

let rondomObj = {name:"Bruno", age: 37};

interface Person {
    name: string;
    age?: number;
}

interface Employee extends Person {
    salary: number;
    readonly bonus: number;   // 'readonly' não pode ser modificado no após a criação
}

let pe: Person = {name:"Bruno 1"};
let emp: Employee = {name: "Bruno 2" , salary: 2000, bonus: 4};

function printName2 (person: Person): void {
    console.log(person.name)
}

printName2(pe);
printName2(emp);