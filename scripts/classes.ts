class Person1 {
    name: string;
    constructor (name: string) {
        this.name = name;
    }
    print(): void{
        console.log(`name: ${this.name}`);
    }
}

class Employee1 extends Person1 {
    salary: number;
    constructor (name: string, salary:number){
        super(name);
        this.salary = salary;
    }
}

let p1 = new Person1 ("Bruno");
let emp1 = new Employee1("Bruno Marques", 4000);

console.log(p1);
console.log(emp1);

let p3: Person1 = new Employee1 ("Mario", 2000);

console.log(p3);

