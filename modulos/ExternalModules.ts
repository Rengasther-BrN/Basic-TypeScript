import { EmailValidatorExternal } from './EmailValidatorExternal';

let emailExmaple1 = ["lala@email.com","lal", "teste@gol.br"]

emailExmaple1.forEach(email => {
    console.log(`${email} ${EmailValidatorExternal.isValid(email)}`)
})