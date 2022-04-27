// Function

function reverseList <T>(list: Array<T>) : Array<T>{
    let reverseList: T[] = [];
    for (let i = list.length - 1; i>=0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}

let names = ["trator", "carro", "moto"];
let numbers = [1,2,3,4,5];

let reversedNames = reverseList<string> (names);
let reversedNumbers = reverseList<number> (numbers);

console.log(reversedNames);
console.log(reversedNumbers);

// Arrow Function

let reverseListArrow = <T>(list: Array<T>) : Array<T> => {
    let reverseList: T[] = [];
    for (let i = list.length - 1; i>=0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}

console.log(reverseListArrow(names));
console.log(reverseListArrow(numbers));