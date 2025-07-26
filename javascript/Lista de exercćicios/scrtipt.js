/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1-Preço do combustível;
2-Gasto médio de combustível do carro por KM;
3-Distância em KM da viagem.
*/

const precoCombustivel = 5.79
const kmPorLitros = 5.79
const distanciaEmKm = 100

function calcularLitrosConsumidos(distancia, consumo) {
    return distancia / consumo;
}

function calcularValorGasto(distancia, consumo, preco) {
    const litros = calcularLitrosConsumidos(distancia, consumo);
    return litros * preco;
}

const litros = calcularLitrosConsumidos(distanciaEmKm, kmPorLitros);
const gasto = calcularValorGasto(distanciaEmKm, kmPorLitros, precoCombustivel);

console.log(`Litros consumidos: ${litros.toFixed(2)}`);
console.log(`Valor gasto: R$ ${gasto.toFixed(2)}`);


/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

function calcularClassificacaoFinal(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;

    if (media < 5) {
        return `Sua média foi ${media.toFixed(2)} e você está em reprovação`;
    } else if (media >= 5 && media <= 7) {
        return `Sua média foi ${media.toFixed(2)} e você está em recuperação`;
    } else {
        return `Sua média foi ${media.toFixed(2)} e você passou de semestre`;
    }
}

const resultado = calcularClassificacaoFinal(9, 9, 9);

console.log(resultado);

/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

const classificacoesIMC = [
    { min: 0, max: 18.5, condicao: "Abaixo do peso" },
    { min: 18.5, max: 25, condicao: "Peso normal" },
    { min: 25, max: 30, condicao: "Acima do peso" },
    { min: 30, max: 40, condicao: "Obeso" },
    { min: 40, max: Infinity, condicao: "Obesidade Grave" }
]

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    let resultado = ""

    classificacoesIMC.forEach(faixa => {
        if (imc >= faixa.min && imc < faixa.max) {
            resultado = faixa.condicao
        }
    })

    return resultado
}

const peso = 85;
const altura = 1.72;

const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

console.log(`Seu IMC é ${imc.toFixed(2)} e sua condição é: ${classificacao}`);

/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const condicoesPagamento = [
    {
        codigo: 1,
        descricao: "À vista no Débito (10% de desconto)",
        calcular: (preco) => preco * 0.9
    },
    {
        codigo: 2,
        descricao: "À vista no Dinheiro ou PIX (15% de desconto)",
        calcular: (preco) => preco * 0.85
    },
    {
        codigo: 3,
        descricao: "Em duas vezes (sem juros)",
        calcular: (preco) => preco
    },
    {
        codigo: 4,
        descricao: "Acima de duas vezes (10% de juros)",
        calcular: (preco) => preco * 1.1
    }
];


function calcularValorFinal(precoEtiqueta, codigoCondicao) {
  let resultado = null;

  condicoesPagamento.forEach(condicao => {
   
    if (condicao.codigo === codigoCondicao) {
      const valorFinal = condicao.calcular(precoEtiqueta);
      resultado = {
        descricao: condicao.descricao,
        valor: valorFinal.toFixed(2)
      };
    }
  });

  return resultado;
}

const preco = 150;    // preço normal do produto
const codigo = 2;     // código da condição de pagamento escolhido

const resultadoFinal = calcularValorFinal(preco, codigo);

if (resultadoFinal) {
  console.log(`Condição escolhida: ${resultadoFinal.descricao}`);
  console.log(`Valor final a pagar: R$ ${resultadoFinal.valor}`);
} else {
  console.log("Código de pagamento inválido.");
}


