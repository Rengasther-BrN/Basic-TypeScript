var p = document.createElement('p');
var ola:string = "teste";
p.textContent = ola;
document.body.appendChild(p);


var num : number = 10;
var bool : boolean = true;

var str : string = "a beautiful message";
var str2 : string = 'a beautiful message';
var str3 : string = `${str2} to bruno`;
console.log(str3);

function add(v1: number, v2: number, v3?: number): number {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;    
}

console.log(`add ${add(1,2,3)}`);

let var1: any = "teste";

let strLength: number = (<string> var1).length;
let strUpperCase: string = (var1 as string).toUpperCase();

console.log(strLength);
console.log(strUpperCase);