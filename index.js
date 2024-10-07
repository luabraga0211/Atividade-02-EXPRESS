const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
      { name: 'nome', message: 'Insira o nome desejado' },
      { name: 'idade', message: 'Insira a sua idade' },
      { name: 'email', message: 'Insira o seu email'}
    ])

    .then((answers) => {
        const response = `O nome do usuário é ${answers.nome} ele tem ${answers.idade} e seu contato é ${answers.email}`
        console.log(chalk.bgYellow.black(response))
    })

    .catch((erro) => {
    console.error('Ocorreu um erro:', erro)
  })