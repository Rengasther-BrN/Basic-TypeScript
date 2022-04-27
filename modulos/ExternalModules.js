"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
let emailExmaple1 = ["lala@email.com", "lal", "teste@gol.br"];
emailExmaple1.forEach(email => {
    console.log(`${email} ${EmailValidatorExternal_1.EmailValidatorExternal.isValid(email)}`);
});
//# sourceMappingURL=ExternalModules.js.map