let nameAge = new Map<string, number>();
nameAge.set("Gon",14);
nameAge.set("Killua",14);

console.log(nameAge);


// segunda forma

let nameAge2 = new Map<string, number>().set("Gon",14).set("Killua",14);
console.log(nameAge2);

//  terceira forma

let nameAge3 = new Map<string, number>([
    ["Gon",14],["Killua",14]
]);

console.log(nameAge3);

for( let key of nameAge3.keys()){
    console.log(key);
}

for( let v of nameAge3.values()){
    console.log(v);
}