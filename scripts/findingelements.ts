let element = document.getElementById("btn2");  // O tipo retornado é um HTMLElement
console.log(element);

let element2 = document.querySelector("#btn1"); // O tipo retornado é Element
console.log(element2);

let element3 = document.querySelector("#main"); // O tipo retornado é HTMLDivElement
console.log(element3);

let elements = document.getElementsByTagName("div"); // NodeListOf HTMLDivElement
console.log(elements);
console.log(elements[2]);




