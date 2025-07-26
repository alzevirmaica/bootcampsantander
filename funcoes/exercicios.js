function meuNome(nome) {
    return `Meu nome é ${nome}`
}

const myName =  meuNome('Alzevir')
console.log(myName)

function verificarIdade(idade) {
    return idade >= 18 ? `${meuNome('Alzevir')} e tenho ${idade} e é maior de idade` : `Você tem ${idade} e é menor de idade`
}

console.log(verificarIdade(18))