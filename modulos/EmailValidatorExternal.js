"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class EmailValidatorExternal {
    isValid(str) {
        throw new Error('Method not implemented.');
    }
    static isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;
//# sourceMappingURL=EmailValidatorExternal.js.map