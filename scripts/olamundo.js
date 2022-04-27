var p = document.createElement('p');
var ola = "teste";
p.textContent = ola;
document.body.appendChild(p);
var num = 10;
var bool = true;
var str = "a beautiful message";
var str2 = 'a beautiful message';
var str3 = `${str2} to bruno`;
console.log(str3);
function add(v1, v2, v3) {
    if (v3 !== undefined)
        return v1 + v2 + v3;
    return v1 + v2;
}
console.log(`add ${add(1, 2, 3)}`);
let var1 = "teste";
let strLength = var1.length;
let strUpperCase = var1.toUpperCase();
console.log(strLength);
console.log(strUpperCase);
//# sourceMappingURL=olamundo.js.map