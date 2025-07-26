class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoNascimento = new Date().getFullYear() -  idade
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const alzevir = new Pessoa('Alzevir', 41)
//alzevir.descrever()

//console.log(alzevir)

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2)
    }
}

const uno = new Carro('Fiat', 'preto', 1 / 12)
console.log(uno, uno.calcularGastoDePercurso(70, 5))