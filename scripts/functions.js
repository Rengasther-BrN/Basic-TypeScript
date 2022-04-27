function print1(val) {
    console.log(val);
}
print1("message here");
function printOrNot(flag = false) {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot(true);
//Função Anonima        ----> só pode ser chamada a funcção depois de criada
//sumAnonymous(1,2);    
let sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
//ArrowFunction
let sumArrow1 = (n1, n2) => n1 + n2;
let sumArrow2 = (n1, n2) => {
    return n1 + n2;
};
let objectArrow = (name, surname) => ({
    name: name,
    surname: surname
});
sumArrow1(1, 1);
console.log(sumArrow1(3, 3));
console.log(sumArrow2(4, 4));
console.log(objectArrow("bruno", "marques"));
//Função Não Anonima    ----> pode ser chamada antes ou depois
sumAnonymous(1, 2);
function sumNotAnonymous(n1, n2) {
    console.log(`sum: ${n1 + n2}`);
}
sumAnonymous(1, 2);
//Entendendo o this.
function testThis() {
    return this;
}
console.log(testThis());
let objExample = {
    name: "bruno",
    lastName: "marques",
    fullName: function () {
        return this;
    },
    fullName2: () => {
        return this;
    },
    thisExemple: this
};
console.log(objExample.name);
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExemple);
let loterry = {
    names: ["gon", "goku", "vegeta"],
    test: "kamekameha",
    createLotteryPicker: function () {
        console.log("first level this: " + this.names, +"-" + this.test);
        return () => {
            console.log("Second level this: " + this);
            let pickedPersonNumber = this.names;
            return { name: this.names[pickedPersonNumber] };
        };
    }
};
let personPicker = loterry.createLotteryPicker();
let pickedPerson = personPicker();
console.log(personPicker());
//# sourceMappingURL=functions.js.map