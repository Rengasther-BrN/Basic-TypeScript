class Person1 {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`name: ${this.name}`);
    }
}
class Employee1 extends Person1 {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
}
let p1 = new Person1("Bruno");
let emp1 = new Employee1("Bruno Marques", 4000);
console.log(p1);
console.log(emp1);
let p3 = new Employee1("Mario", 2000);
console.log(p3);
//# sourceMappingURL=classes.js.map