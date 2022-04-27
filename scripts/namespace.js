var Validation;
(function (Validation) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    class EmailValidator {
        static isValid(str) {
            return emailRegex.test(str);
        }
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=namespace.js.map