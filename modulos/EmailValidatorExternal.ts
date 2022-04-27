import { ValidatorExternal } from './ValidatorExternal';

    let emailRegex:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    export class EmailValidatorExternal implements ValidatorExternal {
        isValid(str: string): boolean {
            throw new Error('Method not implemented.');
        }
        static isValid(str: string): boolean {
            return emailRegex.test(str);
        }
    }


