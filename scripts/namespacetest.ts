import EmailValidator = Validation.EmailValidator;

let emailExmaple = ["lala@email.com","lal", "teste@gol.br"]

emailExmaple.forEach(email => {
    console.log(`${email} ${EmailValidator.isValid(email)}`)
})