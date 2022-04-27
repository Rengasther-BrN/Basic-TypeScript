// Function
function reverseList(list) {
    let reverseList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
let names = ["trator", "carro", "moto"];
let numbers = [1, 2, 3, 4, 5];
let reversedNames = reverseList(names);
let reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
// Arrow Function
let reverseListArrow = (list) => {
    let reverseList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
};
console.log(reverseListArrow(names));
console.log(reverseListArrow(numbers));
//# sourceMappingURL=generics.js.map