let person = { name: "bruno", lastname: "marques" };
let name1 = person.name;
let lastname1 = person.lastname;
console.log(name1);
console.log(lastname1);
// Desistruturado
let { name: name2, lastname: lastname2 } = person;
console.log(name2);
console.log(lastname2);
// Desisntruturando um ARRAY
let array = ["goku", "vegeta", "picolo"];
let [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);
// Desistruturando uma função
class Person {
    constructor(name) {
        this.name = name;
    }
}
function example1(person) {
    console.log(person.name);
}
function example2({ name }) {
    console.log(person.name);
}
example1(new Person("goten"));
example2({ name: "gohan" });
//# sourceMappingURL=destructuring.js.map